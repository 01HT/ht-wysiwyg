"use strict";
import { LitElement, html, css } from "lit-element";

import { stylesQuillSnow } from "./styles-quill-snow.js";
import { stylesHighlightjs } from "./styles-highlightjs.js";
import { stylesCommonForEditorAndViewer } from "./styles-common-for-editor-and-viewer.js";

import "./highlight.pack.js";
// import "quill/dist/quill.min.js";

import { initHTComponents } from "@01ht/ht-wysiwyg/ht-quill-components.js";

import "@01ht/ht-wysiwyg/ht-wysiwyg-image.js";
import "@01ht/ht-wysiwyg/ht-wysiwyg-gif.js";
import "@01ht/ht-wysiwyg/ht-wysiwyg-video.js";
import "@01ht/ht-wysiwyg/ht-wysiwyg-youtube.js";

hljs.configure({
  languages: ["javascript", "ruby", "python", "sql", "html", "css"]
});

class HTWysiwygViewer extends LitElement {
  // ${stylesQuillSnow}
  static styles = [
    stylesHighlightjs,
    stylesCommonForEditorAndViewer,
    SharedStyles,
    css`<style>
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
    </style>`
  ];

  render() {
    const { data } = this;
    return html` 
    <div id="container">
        <div id="quill"></div>
    </div>
`;
  }

  static get properties() {
    return {
      data: { type: String },
      description: { type: Object },
      quillReady: { type: Boolean },
      htComponentsReady: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.description = {};
    this.quillReady = false;
    this.htComponentsReady = false;
  }

  firstUpdated() {
    this._initQuill();
  }

  _initQuill() {
    if (window.Quill) {
      this.quillReady = true;
      this._initHTQuillComponents();

      return;
    }
    if (window.quillScriptAdded === undefined) {
      window.quillScriptAdded = true;
      let script = document.createElement("script");
      script.src = "/node_modules/quill/dist/quill.min.js";
      document.body.appendChild(script);
    }
    this._checkQuillInit();
  }

  _checkQuillInit() {
    if (window.Quill) {
      this.quillReady = true;
      this._initHTQuillComponents();
    } else {
      setTimeout(_ => {
        this._checkQuillInit();
      }, 100);
    }
  }

  _initHTQuillComponents() {
    if (window.Quill.imports["formats/ht-wysiwyg-youtube"]) {
      this.htComponentsReady = true;
      this._initQuillContainer();
      return;
    }
    if (window.HTQuillCompnentsInitializing === undefined) {
      window.HTQuillCompnentsInitializing = true;
      initHTComponents();
    }
    this._checkHTQuillComponentsInit();
  }

  _checkHTQuillComponentsInit() {
    if (window.Quill.imports["formats/ht-wysiwyg-youtube"]) {
      this.htComponentsReady = true;
      this._initQuillContainer();
    } else {
      setTimeout(_ => {
        this._checkHTQuillComponentsInit();
      }, 100);
    }
  }

  _initQuillContainer() {
    this.quill = new Quill(this.shadowRoot.querySelector("#quill"), {
      modules: {
        syntax: true,
        toolbar: false
      },
      theme: "snow"
    });
    this.quill.enable(false);
    this.quill.setContents(this.description);
  }

  updated() {
    if (JSON.stringify(this.data) !== JSON.stringify())
      if (this.quillReady && this.htComponentsReady && this.quill)
        this.quill.setContents(JSON.parse(this.data));
  }
}

customElements.define("ht-wysiwyg-viewer", HTWysiwygViewer);
