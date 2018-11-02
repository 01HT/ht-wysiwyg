"use strict";
import { LitElement, html } from "@polymer/lit-element";
import "@polymer/paper-button";
import "@polymer/paper-input/paper-input.js";
import "@polymer/paper-styles/default-theme.js";
import "@polymer/paper-dialog/paper-dialog.js";
import "@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js";
import "@01ht/ht-storage";

// Fix for adding this file when build
import { iframeContent } from "./iframe-content.js";

class HTWysiwyg extends LitElement {
  render() {
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
          display:none;
        }

        iframe[ready] {
          display:block;
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

        #iframe-container {
          width: 100%;
          height: 500px;
          box-sizing: border-box;
        }
      </style>
      <div id="iframe-container"></div>
      <paper-dialog id="youtube-dialog">
        <paper-dialog-scrollable>
          <h2>Введите ID видео</h2>
          <paper-input id="youtube" label="YouTube videoID" always-float-label placeholder="videoID">
            <div slot="prefix">https://www.youtube.com/watch?v=</div>
          </paper-input>
        </paper-dialog-scrollable>
        <div class="buttons">
          <paper-button id="close" dialog-dismiss>Закрыть</paper-button>
          <paper-button id="select" dialog-confirm autofocus @click=${e => {
            this._insertYouTubeVideo();
          }}>Выбрать</paper-button>
        </div>
      </paper-dialog>
      <paper-dialog id="ht-storage-dialog">
        <h2>Выберите файлы</h2>
        <paper-dialog-scrollable>
            <ht-storage></ht-storage>
        </paper-dialog-scrollable>
        <div class="buttons">
          <paper-button id="close" dialog-dismiss>Закрыть</paper-button>
          <paper-button id="select" dialog-confirm autofocus @click=${e => {
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
    this.quillUpdating = false;
    this.quill = {};
    this.currentInsertMode;
    this.templateReady = false;
    this.description = `{"ops":[{"insert":"\\n"}]}`;
    this.defaultDescription = `{"ops":[{"insert":"\\n"}]}`;
  }

  firstUpdated() {
    this.templateReady = true;
    this.setData(this.description);
  }

  get storage() {
    return this.shadowRoot.querySelector("ht-storage");
  }

  getData() {
    // Get data in HTML format => this.quill.root.innerHTML
    return JSON.stringify(this.quill.getContents());
  }

  setData(description) {
    this.description = description;
    if (!this.templateReady) return;
    if (this.quillUpdating) return;
    this.quillUpdating = true;
    let iframe = this.shadowRoot.querySelector("iframe");
    if (iframe !== null)
      this.shadowRoot.querySelector("#iframe-container").removeChild(iframe);
    iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", 0);
    this.shadowRoot.querySelector("#iframe-container").appendChild(iframe);
    let iframeWindow = iframe.contentWindow;
    let doc = iframeWindow.document;
    doc.open();
    iframeWindow.cloudinaryURL = window.cloudinaryURL;
    iframeWindow.addEventListener("quill-ready", e => {
      e.stopPropagation();
      this.quill = iframeWindow.quill;
      this.quill.setContents(JSON.parse(this.description));
      this.shadowRoot.querySelector("iframe").setAttribute("ready", "");
      this.quillUpdating = false;
    });
    iframeWindow.addEventListener("show-modal", e => {
      e.stopPropagation();
      this.currentInsertMode = e.detail.mode;
      if (this.currentInsertMode === "youtube") {
        this.shadowRoot.querySelector("#youtube").value = "";
        this.shadowRoot.querySelector("#youtube-dialog").open();
      } else {
        this.shadowRoot.querySelector("#ht-storage-dialog").open();
        this.storage.updateList();
      }
    });
    doc.write(iframeContent);
    doc.close();
  }

  setDefaultData() {
    this.setData(this.defaultDescription);
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

  _insertYouTubeVideo() {
    let videoID = this.shadowRoot.querySelector("#youtube").value;
    this.insertToEditor({ videoID: videoID });
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
