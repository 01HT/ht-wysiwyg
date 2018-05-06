"use strict";
import { LitElement, html } from "@polymer/lit-element";
import "@polymer/paper-button";
import "@polymer/paper-styles/default-theme.js";
import "@polymer/paper-dialog/paper-dialog.js";
import "@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js";
import "ht-storage/ht-storage.js";

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

        paper-dialog {
          width: 100%;
          max-width: 800px;
        }

        ht-storage {
          border:1px solid var(--divider-color);
        }

        paper-button {
          font-weight: 500;
          color: var(--accent-color);
        }
      </style>
      <iframe id="iframe" src="/node_modules/ht-wysiwyg/iframe-with-quill.html" frameborder="0"></iframe>
      <paper-dialog>
        <h2>Выберите файлы</h2>
        <p>.jpeg | .png | .gif | .tiff | .svg | .webp < 2 MB</p>
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
  }

  ready() {
    super.ready();
    let iframe = this.shadowRoot.getElementById("iframe");
    iframe.contentWindow.addEventListener("quill-ready", e => {
      e.preventDefault();
      this.dispatchEvent(
        new CustomEvent("ht-wysiwyg-ready", {
          bubbles: false
        })
      );
      this.quillReady = true;
      this.quill = iframe.contentWindow.quill;
    });
    iframe.contentWindow.addEventListener("show-modal", e => {
      e.preventDefault();
      this.shadowRoot.querySelector("paper-dialog").open();
      this.storage.updateList();
    });
  }

  get storage() {
    return this.shadowRoot.querySelector("ht-storage");
  }

  getData() {
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

  insertToEditor(url) {
    const range = this.quill.getSelection();
    this.quill.insertEmbed(range.index, "image", `${url}`);
  }

  _insertImages() {
    let arrayOfSrc = [];
    let srcs = this.storage.getSelectedImageSources();
    if (srcs.length === 0) return;
    srcs.forEach(src => {
      this.insertToEditor(src);
    });
  }
}

customElements.define(HTWysiwyg.is, HTWysiwyg);
