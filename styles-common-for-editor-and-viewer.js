import { css } from "lit-element";

export const stylesCommonForEditorAndViewer = css`
  .ql-editor {
    white-space: initial;
  }

  .ql-editor .ql-video {
    width: 100%;
    height: 310px;
    margin: 24px 0;
  }

  pre {
    border-radius: 0;
    padding: 16px;
    font-size: 14px;
    background-color: #23241f;
    color: #f8f8f2;
    word-break: keep-all;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    display: block;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }

  blockquote {
    border-left: 3px solid rgba(0, 0, 0, 0.84);
    padding: 0;
    padding-left: 20px;
    font-weight: 400;
    font-style: italic;
    line-height: 1.58;
    letter-spacing: -0.003em;
  }

  h2 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 2.125rem;
    line-height: 2.5rem;
    font-weight: 400;
    letter-spacing: 0.00735em;
    text-decoration: inherit;
    text-transform: inherit;
  }

  h3 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: normal;
    text-decoration: inherit;
    text-transform: inherit;
  }

  h4 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    text-decoration: inherit;
    text-transform: inherit;
  }

  ht-wysiwyg-image,
  ht-wysiwyg-gif,
  ht-wysiwyg-video,
  pre,
  blockquote {
    margin: 32px 0;
  }
`;
