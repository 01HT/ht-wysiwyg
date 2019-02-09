"use strict";
import { LitElement, html, css } from "lit-element";

class HTWysiwygGif extends LitElement {
  static styles = css`<style>
    :host {
      display: block;
      position:relative;
      box-sizing:border-box;
    }
  </style>`;

  render() {
    const { data } = this;
    let poster = `${window.cloudinaryURL}/image/upload/v${data.version}/${
      data.public_id
    }.jpg`;
    let mp4 = `${window.cloudinaryURL}/image/upload/v${data.version}/${
      data.public_id
    }.mp4`;
    let webm = `${window.cloudinaryURL}/image/upload/v${data.version}/${
      data.public_id
    }.webm`;
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
