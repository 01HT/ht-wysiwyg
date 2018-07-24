"use strict";
import { LitElement, html } from "@polymer/lit-element";
import "@polymer/paper-button";
import "@polymer/paper-styles/default-theme.js";
import "@polymer/paper-dialog/paper-dialog.js";
import "@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js";
import "@01ht/ht-storage";

// Fix for adding this file when build
import { iframeContent } from "./iframe-content.js";

class HTWysiwyg extends LitElement {
  _render() {
    return html`
      <style>
        :host {
          display: block;
          position:relative;
          box-sizing:border-box;
        }

        iframe {
          width:100%;
          height: 500px;
        }

        paper-button {
          font-weight: 500;
          color: var(--accent-color);
        }

        paper-dialog {
          width: 95%;
          max-width: 800px;
          margin-left: 0;
          margin-right: 0;
        }

        #test {
          height:300px;
        }
      </style>
      <iframe id="iframe" frameborder="0"></iframe>
      <paper-dialog>
        <h2>Выберите файлы</h2>
        <paper-dialog-scrollable>
            <ht-storage></ht-storage>
        </paper-dialog-scrollable>
        <div class="buttons">
          <paper-button id="close" dialog-dismiss>Закрыть</paper-button>
          <paper-button id="select" dialog-confirm autofocus on-click="${e => {
            this._insertImages();
          }}">Выбрать</paper-button>
        </div>
      </paper-dialog>
`;
  }

  static get is() {
    return "ht-wysiwyg";
  }

  constructor() {
    super();
    this.quillReady = false;
    this.quill = {};
    this.currentInsertMode;
  }

  ready() {
    super.ready();
    let iframe = this.shadowRoot.getElementById("iframe");
    iframe.contentWindow.cloudinaryURL = window.cloudinaryURL;
    iframe.contentDocument.write(iframeContent);
    iframe.contentWindow.addEventListener("quill-ready", e => {
      e.stopPropagation();
      this.dispatchEvent(
        new CustomEvent("ht-wysiwyg-ready", {
          bubbles: false
        })
      );
      this.quillReady = true;
      this.quill = iframe.contentWindow.quill;
    });
    iframe.contentWindow.addEventListener("show-modal", e => {
      e.stopPropagation();
      this.currentInsertMode = e.detail.mode;
      this.shadowRoot.querySelector("paper-dialog").open();
      this.storage.updateList();
    });
  }

  get storage() {
    return this.shadowRoot.querySelector("ht-storage");
  }

  getData() {
    // Get data in HTML format => this.quill.root.innerHTML
    return JSON.stringify(this.quill.getContents());
  }

  setData(description) {
    if (this.quillReady) {
      this.quill.setContents(JSON.parse(description));
    } else {
      let timeoutID = setTimeout(100, _ => {
        this.setData(description).bind(this);
        clearTimeout(timeoutID);
      });
    }
  }

  setDefaultData() {
    this.setData("{}");
  }

  insertToEditor(item) {
    let Quill = this.shadowRoot.getElementById("iframe").contentWindow.Quill;
    let resourceType = item.resource_type;
    let format = item.format;
    let currentInsertMode = this.currentInsertMode;

    if (currentInsertMode === "image" && resourceType !== "image") return;
    if (currentInsertMode === "gif" && format !== "gif") return;
    if (currentInsertMode === "video" && resourceType !== "video") return;

    const range = this.quill.getSelection(true);

    this.quill.insertText(range.index, "\n", Quill.sources.USER);

    if (this.currentInsertMode === currentInsertMode)
      this.quill.insertEmbed(
        range.index + 1,
        `ht-wysiwyg-${currentInsertMode}`,
        item,
        Quill.sources.USER
      );

    this.quill.setSelection(range.index + 2, Quill.sources.SILENT);
  }

  _insertImages() {
    let items = this.storage.getSelectedItems();
    if (items.length === 0) return;
    items.forEach(item => {
      this.insertToEditor(item);
    });
  }
}

customElements.define(HTWysiwyg.is, HTWysiwyg);
