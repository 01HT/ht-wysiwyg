import { html } from "@polymer/lit-element";

export const stylesCommonForEditorAndViewer = html`
<style>
.ql-editor {
    white-space: initial;
}

.ql-snow .ql-editor a {
    text-decoration: none;
    color:#4285f4;
}

.ql-snow .ql-editor a:hover {
    text-decoration: underline;
    color:#4285f4;
}

.ql-editor .ql-video {
    width: 100%;
    height: 310px;
    margin: 24px 0;
}

.ql-snow .ql-editor pre {
    border-radius:0;
    margin: 24px 0;
    font-size:14px;
}

.ql-snow .ql-editor blockquote {
    border-left: 3px solid rgba(0,0,0,.84);
    padding:0;
    padding-left: 20px;
    font-weight: 400;
    font-style: italic;
    line-height: 1.58;
    letter-spacing: -.003em;
    margin: 24px 0;
}

.ql-snow .ql-editor h2, .ql-snow .ql-editor h3, .ql-snow .ql-editor h4 {
    margin: 16px 0;
}

.ql-snow .ql-editor h2 {
    font-size: 36px;
}

.ql-snow .ql-editor h3 {
    font-size: 28px;
}

.ql-snow .ql-editor h4 {
    font-size: 20px
}

.ql-snow .ql-editor {
    color: #414549;
}

.ql-snow .ql-editor p, .ql-snow .ql-editor blockquote, .ql-editor ol, .ql-editor ul {
    font-size: 16px;
    line-height: 30px;
    color: #424242;
    margin: 24px 0;
}

.ql-snow .ql-editor ul, .ql-snow .ql-editor ol {
    padding-left:24px;
}

ht-wysiwyg-image, ht-wysiwyg-gif, ht-wysiwyg-video {
    margin: 24px 0;
}
</style>`;
