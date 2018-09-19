"use strict";
import { LitElement, html } from "@polymer/lit-element";

class HTWysiwygYoutube extends LitElement {
  render() {
    const { data } = this;
    return html`
      <style>
        :host {
          display: block;
          position:relative;
          box-sizing:border-box;
          overflow:hidden;
        }

        iframe {
          display:block;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          height: 100%;
          width: 100%;
          position: absolute;
        }

        #container {
          display: block;
          padding-bottom: 56.25%;
          max-height: 56.25%;
          height: 100%;
          width: 100%;
          background:black;
        }
      </style>
      <div id="container">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${
          data.videoID
        }?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>
      </div>
`;
  }

  static get is() {
    return "ht-wysiwyg-youtube";
  }

  static get properties() {
    return {
      data: { type: String }
    };
  }
}

customElements.define(HTWysiwygYoutube.is, HTWysiwygYoutube);
