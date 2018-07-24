"use strict";
import { LitElement, html } from "@polymer/lit-element";
class HTWysiwygImage extends LitElement {
  _render({ data }) {
    let placeholder = `${
      window.cloudinaryURL
    }/image/upload/c_scale,f_auto,w_64/v${data.version}/${data.public_id}.${
      data.format
    }`;
    let src = `${window.cloudinaryURL}/image/upload/f_auto/v${data.version}/${
      data.public_id
    }.${data.format}`;
    if (data.format === "svg") {
      src = `${window.cloudinaryURL}/image/upload/v${data.version}/${
        data.public_id
      }.${data.format}`;
    }
    let padding = "100%";
    if (data.width < data.height) {
      padding = "" + (2 - data.height / data.width) * 100;
    } else {
      padding = "" + (2 - data.width / data.height) * 100;
    }
    return html`
      <style>
        :host {
          display: block;
          position:relative;
          box-sizing:border-box;
        }

        img {
          position: absolute;
          top:0;
          left:0;
          width: 100%;
          display:block;
        }

        picture {
          display: flex;
          position:relative;
          width:100%;
          overflow:hidden;
        }

        picture[loading] {
          background:#e2e2e2;
        }

        #placeholder {
          filter:blur(5px);
          transition: opacity 0.5s;
        }

        #image {
          transition: opacity 0.7s;
        }

        [loading] {
          opacity:0;
        }
      </style>
      <picture loading style="padding-bottom: ${padding}%">
        <img id="placeholder" loading src=${placeholder}>
        <img id="image" loading src=${src}>
      </picture>
`;
  }

  static get is() {
    return "ht-wysiwyg-image";
  }

  static get properties() {
    return {
      data: Object
    };
  }

  ready() {
    super.ready();
    this.shadowRoot.querySelector("picture").removeAttribute("loading", "");
    this.shadowRoot.querySelectorAll("img").forEach(img => {
      img.addEventListener("load", e => {
        e.target.removeAttribute("loading", "");
      });
    });
  }
}

customElements.define(HTWysiwygImage.is, HTWysiwygImage);
