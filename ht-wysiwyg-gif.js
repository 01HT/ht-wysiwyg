"use strict";
import { LitElement, html, css } from "lit-element";

import { stylesBasicWebcomponents } from "@01ht/ht-theme/styles";

class HTWysiwygGif extends LitElement {
  static get styles() {
    return stylesBasicWebcomponents;
  }

  render() {
    const { data } = this;
    let poster = `${window.appConfig.cloudinary.url}/image/upload/v${
      data.version
    }/${data.public_id}.jpg`;
    let mp4 = `${window.appConfig.cloudinary.url}/image/upload/v${
      data.version
    }/${data.public_id}.mp4`;
    let webm = `${window.appConfig.cloudinary.url}/image/upload/v${
      data.version
    }/${data.public_id}.webm`;
    return html`
      <div id="container">
        <video width="100%" height="auto" autoplay loop muted="muted" poster="${poster}">
            <source type="video/mp4" src="${mp4}">
            <source type="video/webm" src="${webm}">
        </video>
      </div>
`;
  }

  static get properties() {
    return {
      data: { type: Object }
    };
  }
}

customElements.define("ht-wysiwyg-gif", HTWysiwygGif);
