"use strict";
import { LitElement, html, css } from "lit-element";

import { stylesBasicWebcomponents } from "@01ht/ht-theme/styles";

class HTWysiwygImage extends LitElement {
  static get styles() {
    return [
      stylesBasicWebcomponents,
      css`
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          display: block;
        }

        picture {
          display: flex;
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        picture[loading] {
          background: #e2e2e2;
        }

        #placeholder {
          filter: blur(5px);
          transition: opacity 0.5s;
        }

        #image {
          transition: opacity 0.7s;
        }

        [loading] {
          opacity: 0;
        }
      `
    ];
  }

  render() {
    const { data } = this;
    let placeholder = `${
      window.appConfig.cloudinary.url
    }/image/upload/c_scale,f_auto,w_64/v${data.version}/${data.public_id}.${
      data.format
    }`;
    let src = `${window.appConfig.cloudinary.url}/image/upload/f_auto/v${
      data.version
    }/${data.public_id}.${data.format}`;
    if (data.format === "svg") {
      src = `${window.appConfig.cloudinary.url}/image/upload/v${data.version}/${
        data.public_id
      }.${data.format}`;
    }
    let padding = "100%";
    if (data.width < data.height) {
      padding = "" + data.width / data.height * 100;
    } else {
      padding = "" + data.height / data.width * 100;
    }
    return html`
      <picture loading style="padding-bottom: ${padding}%">
        <img id="placeholder" loading src="${placeholder}">
        <img id="image" loading src="${src}">
      </picture>
`;
  }

  static get properties() {
    return {
      data: { type: Object }
    };
  }

  firstUpdated() {
    this.shadowRoot.querySelector("picture").removeAttribute("loading", "");
    this.shadowRoot.querySelectorAll("img").forEach(img => {
      img.addEventListener("load", e => {
        e.target.removeAttribute("loading", "");
      });
    });
  }
}

customElements.define("ht-wysiwyg-image", HTWysiwygImage);
