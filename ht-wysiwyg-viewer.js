"use strict";
import { LitElement, html } from "@polymer/lit-element";

import { stylesQuillSnow } from "./styles-quill-snow.js";
import { stylesHighlightjs } from "./styles-highlightjs.js";
import { stylesCommonForEditorAndViewer } from "./styles-common-for-editor-and-viewer.js";

import "./highlight.pack.js";
import "quill/dist/quill.min.js";

import "@01ht/ht-wysiwyg/ht-quill-components.js";

import "@01ht/ht-wysiwyg/ht-wysiwyg-image.js";
import "@01ht/ht-wysiwyg/ht-wysiwyg-gif.js";
import "@01ht/ht-wysiwyg/ht-wysiwyg-video.js";
import "@01ht/ht-wysiwyg/ht-wysiwyg-youtube.js";

hljs.configure({
  languages: ["javascript", "ruby", "python", "sql", "html", "css"]
});

class HTWysiwygViewer extends LitElement {
  render() {
    const { data, quillReady } = this;
    if (quillReady) this.quill.setContents(JSON.parse(data));
    return html`
    <!-- ${stylesQuillSnow} -->
    ${stylesHighlightjs}
    ${stylesCommonForEditorAndViewer}
    ${SharedStyles}
    <style>
      :host {
        display: block;
        position: relative;
        box-sizing: border-box;
      }
      
      .ql-editor {
        padding:0;
      }

      .ql-container.ql-snow {
          border: none;
      }

      .ql-clipboard {
        display:none;
      }
    </style>
    <div id="container">
        <div id="quill"></div>
    </div>
`;
  }

  static get is() {
    return "ht-wysiwyg-viewer";
  }

  static get properties() {
    return {
      data: { type: String },
      description: { type: Object },
      quillReady: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.description = {};
    this.quillReady = false;
  }

  _initQuill() {
    this.quill = new Quill(this.shadowRoot.querySelector("#quill"), {
      modules: {
        syntax: true,
        toolbar: false
      },
      theme: "snow"
    });
    this.quill.enable(false);
    this.quillReady = true;
    this.quill.setContents(this.description);
  }

  firstUpdated() {
    if (!window.Quill) {
      let script = document.createElement("script");
      script.src = "/node_modules/quill/dist/quill.min.js";
      script.onload = _ => {
        this._initQuill();
      };
      this.shadowRoot.appendChild(script);
    } else {
      this._initQuill();
    }
  }
}

customElements.define(HTWysiwygViewer.is, HTWysiwygViewer);
