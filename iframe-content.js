export const iframeContent = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Iframe with Quill</title>
    <script src="/node_modules/@01ht/ht-wysiwyg/highlight.pack.js"></script>
    <script src="/node_modules/quill/dist/quill.min.js"></script>
    <script src="/node_modules/@01ht/ht-wysiwyg/ht-quill-components.js"></script>

    <!-- (from ./styles-quill-snow.js) Quill Snow styles -->
    <style>
        .ql-container {
            box-sizing: border-box;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 13px;
            height: 100%;
            margin: 0px;
            position: relative;
        }

        .ql-container.ql-disabled .ql-tooltip {
            visibility: hidden;
        }

        .ql-container.ql-disabled .ql-editor ul[data-checked]>li::before {
            pointer-events: none;
        }

        .ql-clipboard {
            left: -100000px;
            height: 1px;
            overflow-y: hidden;
            position: absolute;
            top: 50%;
        }

        .ql-clipboard p {
            margin: 0;
            padding: 0;
        }

        .ql-editor {
            box-sizing: border-box;
            line-height: 1.42;
            height: 100%;
            outline: none;
            overflow-y: auto;
            padding: 12px 15px;
            tab-size: 4;
            -moz-tab-size: 4;
            text-align: left;
            white-space: pre-wrap;
            word-wrap: break-word;
        }

        .ql-editor>* {
            cursor: text;
        }

        // .ql-editor p,
        // .ql-editor ol,
        // .ql-editor ul,
        // .ql-editor pre,
        // .ql-editor blockquote,
        // .ql-editor h1,
        // .ql-editor h2,
        // .ql-editor h3,
        // .ql-editor h4,
        // .ql-editor h5,
        // .ql-editor h6 {
        //     margin: 0;
        //     padding: 0;
        //     counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
        // }

        .ql-editor ol,
        .ql-editor ul {
            padding-left: 1.5em;
        }

        .ql-editor ol>li,
        .ql-editor ul>li {
            list-style-type: none;
        }

        .ql-editor ul>li::before {
            content: '\\2022';
        }

        .ql-editor ul[data-checked=true],
        .ql-editor ul[data-checked=false] {
            pointer-events: none;
        }

        .ql-editor ul[data-checked=true]>li *,
        .ql-editor ul[data-checked=false]>li * {
            pointer-events: all;
        }

        .ql-editor ul[data-checked=true]>li::before,
        .ql-editor ul[data-checked=false]>li::before {
            color: #777;
            cursor: pointer;
            pointer-events: all;
        }

        .ql-editor ul[data-checked=true]>li::before {
            content: '\\2611';
        }

        .ql-editor ul[data-checked=false]>li::before {
            content: '\\2610';
        }

        .ql-editor li::before {
            display: inline-block;
            white-space: nowrap;
            width: 1.2em;
        }

        .ql-editor li:not(.ql-direction-rtl)::before {
            margin-left: -1.5em;
            margin-right: 0.3em;
            text-align: right;
        }

        .ql-editor li.ql-direction-rtl::before {
            margin-left: 0.3em;
            margin-right: -1.5em;
        }

        .ql-editor ol li:not(.ql-direction-rtl),
        .ql-editor ul li:not(.ql-direction-rtl) {
            padding-left: 1.5em;
        }

        .ql-editor ol li.ql-direction-rtl,
        .ql-editor ul li.ql-direction-rtl {
            padding-right: 1.5em;
        }

        .ql-editor ol li {
            counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
            counter-increment: list-0;
        }

        .ql-editor ol li:before {
            content: counter(list-0, decimal) '. ';
        }

        .ql-editor ol li.ql-indent-1 {
            counter-increment: list-1;
        }

        .ql-editor ol li.ql-indent-1:before {
            content: counter(list-1, lower-alpha) '. ';
        }

        .ql-editor ol li.ql-indent-1 {
            counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
        }

        .ql-editor ol li.ql-indent-2 {
            counter-increment: list-2;
        }

        .ql-editor ol li.ql-indent-2:before {
            content: counter(list-2, lower-roman) '. ';
        }

        .ql-editor ol li.ql-indent-2 {
            counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
        }

        .ql-editor ol li.ql-indent-3 {
            counter-increment: list-3;
        }

        .ql-editor ol li.ql-indent-3:before {
            content: counter(list-3, decimal) '. ';
        }

        .ql-editor ol li.ql-indent-3 {
            counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
        }

        .ql-editor ol li.ql-indent-4 {
            counter-increment: list-4;
        }

        .ql-editor ol li.ql-indent-4:before {
            content: counter(list-4, lower-alpha) '. ';
        }

        .ql-editor ol li.ql-indent-4 {
            counter-reset: list-5 list-6 list-7 list-8 list-9;
        }

        .ql-editor ol li.ql-indent-5 {
            counter-increment: list-5;
        }

        .ql-editor ol li.ql-indent-5:before {
            content: counter(list-5, lower-roman) '. ';
        }

        .ql-editor ol li.ql-indent-5 {
            counter-reset: list-6 list-7 list-8 list-9;
        }

        .ql-editor ol li.ql-indent-6 {
            counter-increment: list-6;
        }

        .ql-editor ol li.ql-indent-6:before {
            content: counter(list-6, decimal) '. ';
        }

        .ql-editor ol li.ql-indent-6 {
            counter-reset: list-7 list-8 list-9;
        }

        .ql-editor ol li.ql-indent-7 {
            counter-increment: list-7;
        }

        .ql-editor ol li.ql-indent-7:before {
            content: counter(list-7, lower-alpha) '. ';
        }

        .ql-editor ol li.ql-indent-7 {
            counter-reset: list-8 list-9;
        }

        .ql-editor ol li.ql-indent-8 {
            counter-increment: list-8;
        }

        .ql-editor ol li.ql-indent-8:before {
            content: counter(list-8, lower-roman) '. ';
        }

        .ql-editor ol li.ql-indent-8 {
            counter-reset: list-9;
        }

        .ql-editor ol li.ql-indent-9 {
            counter-increment: list-9;
        }

        .ql-editor ol li.ql-indent-9:before {
            content: counter(list-9, decimal) '. ';
        }

        .ql-editor .ql-indent-1:not(.ql-direction-rtl) {
            padding-left: 3em;
        }

        .ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
            padding-left: 4.5em;
        }

        .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
            padding-right: 3em;
        }

        .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
            padding-right: 4.5em;
        }

        .ql-editor .ql-indent-2:not(.ql-direction-rtl) {
            padding-left: 6em;
        }

        .ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
            padding-left: 7.5em;
        }

        .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
            padding-right: 6em;
        }

        .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
            padding-right: 7.5em;
        }

        .ql-editor .ql-indent-3:not(.ql-direction-rtl) {
            padding-left: 9em;
        }

        .ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
            padding-left: 10.5em;
        }

        .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
            padding-right: 9em;
        }

        .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
            padding-right: 10.5em;
        }

        .ql-editor .ql-indent-4:not(.ql-direction-rtl) {
            padding-left: 12em;
        }

        .ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
            padding-left: 13.5em;
        }

        .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
            padding-right: 12em;
        }

        .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
            padding-right: 13.5em;
        }

        .ql-editor .ql-indent-5:not(.ql-direction-rtl) {
            padding-left: 15em;
        }

        .ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
            padding-left: 16.5em;
        }

        .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
            padding-right: 15em;
        }

        .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
            padding-right: 16.5em;
        }

        .ql-editor .ql-indent-6:not(.ql-direction-rtl) {
            padding-left: 18em;
        }

        .ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
            padding-left: 19.5em;
        }

        .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
            padding-right: 18em;
        }

        .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
            padding-right: 19.5em;
        }

        .ql-editor .ql-indent-7:not(.ql-direction-rtl) {
            padding-left: 21em;
        }

        .ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
            padding-left: 22.5em;
        }

        .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
            padding-right: 21em;
        }

        .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
            padding-right: 22.5em;
        }

        .ql-editor .ql-indent-8:not(.ql-direction-rtl) {
            padding-left: 24em;
        }

        .ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
            padding-left: 25.5em;
        }

        .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
            padding-right: 24em;
        }

        .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
            padding-right: 25.5em;
        }

        .ql-editor .ql-indent-9:not(.ql-direction-rtl) {
            padding-left: 27em;
        }

        .ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
            padding-left: 28.5em;
        }

        .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
            padding-right: 27em;
        }

        .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
            padding-right: 28.5em;
        }

        .ql-editor .ql-video {
            display: block;
            max-width: 100%;
        }

        .ql-editor .ql-video.ql-align-center {
            margin: 0 auto;
        }

        .ql-editor .ql-video.ql-align-right {
            margin: 0 0 0 auto;
        }

        .ql-editor .ql-bg-black {
            background-color: #000;
        }

        .ql-editor .ql-bg-red {
            background-color: #e60000;
        }

        .ql-editor .ql-bg-orange {
            background-color: #f90;
        }

        .ql-editor .ql-bg-yellow {
            background-color: #ff0;
        }

        .ql-editor .ql-bg-green {
            background-color: #008a00;
        }

        .ql-editor .ql-bg-blue {
            background-color: #06c;
        }

        .ql-editor .ql-bg-purple {
            background-color: #93f;
        }

        .ql-editor .ql-color-white {
            color: #fff;
        }

        .ql-editor .ql-color-red {
            color: #e60000;
        }

        .ql-editor .ql-color-orange {
            color: #f90;
        }

        .ql-editor .ql-color-yellow {
            color: #ff0;
        }

        .ql-editor .ql-color-green {
            color: #008a00;
        }

        .ql-editor .ql-color-blue {
            color: #06c;
        }

        .ql-editor .ql-color-purple {
            color: #93f;
        }

        .ql-editor .ql-font-serif {
            font-family: Georgia, Times New Roman, serif;
        }

        .ql-editor .ql-font-monospace {
            font-family: Monaco, Courier New, monospace;
        }

        .ql-editor .ql-size-small {
            font-size: 0.75em;
        }

        .ql-editor .ql-size-large {
            font-size: 1.5em;
        }

        .ql-editor .ql-size-huge {
            font-size: 2.5em;
        }

        .ql-editor .ql-direction-rtl {
            direction: rtl;
            text-align: inherit;
        }

        .ql-editor .ql-align-center {
            text-align: center;
        }

        .ql-editor .ql-align-justify {
            text-align: justify;
        }

        .ql-editor .ql-align-right {
            text-align: right;
        }

        .ql-editor.ql-blank::before {
            color: rgba(0, 0, 0, 0.6);
            content: attr(data-placeholder);
            font-style: italic;
            left: 15px;
            pointer-events: none;
            position: absolute;
            right: 15px;
        }

        .ql-snow.ql-toolbar:after,
        .ql-snow .ql-toolbar:after {
            clear: both;
            content: '';
            display: table;
        }

        .ql-snow.ql-toolbar button,
        .ql-snow .ql-toolbar button {
            background: none;
            border: none;
            cursor: pointer;
            display: inline-block;
            float: left;
            height: 24px;
            padding: 3px 5px;
            width: 28px;
        }

        .ql-snow.ql-toolbar button svg,
        .ql-snow .ql-toolbar button svg {
            float: left;
            height: 100%;
        }

        .ql-snow.ql-toolbar button:active:hover,
        .ql-snow .ql-toolbar button:active:hover {
            outline: none;
        }

        .ql-snow.ql-toolbar input.ql-image[type=file],
        .ql-snow .ql-toolbar input.ql-image[type=file] {
            display: none;
        }

        .ql-snow.ql-toolbar button:hover,
        .ql-snow .ql-toolbar button:hover,
        .ql-snow.ql-toolbar button:focus,
        .ql-snow .ql-toolbar button:focus,
        .ql-snow.ql-toolbar button.ql-active,
        .ql-snow .ql-toolbar button.ql-active,
        .ql-snow.ql-toolbar .ql-picker-label:hover,
        .ql-snow .ql-toolbar .ql-picker-label:hover,
        .ql-snow.ql-toolbar .ql-picker-label.ql-active,
        .ql-snow .ql-toolbar .ql-picker-label.ql-active,
        .ql-snow.ql-toolbar .ql-picker-item:hover,
        .ql-snow .ql-toolbar .ql-picker-item:hover,
        .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
        .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
            color: #06c;
        }

        .ql-snow.ql-toolbar button:hover .ql-fill,
        .ql-snow .ql-toolbar button:hover .ql-fill,
        .ql-snow.ql-toolbar button:focus .ql-fill,
        .ql-snow .ql-toolbar button:focus .ql-fill,
        .ql-snow.ql-toolbar button.ql-active .ql-fill,
        .ql-snow .ql-toolbar button.ql-active .ql-fill,
        .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
        .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
        .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
        .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
        .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
        .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
        .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
        .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
        .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
        .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
            fill: #06c;
        }

        .ql-snow.ql-toolbar button:hover .ql-stroke,
        .ql-snow .ql-toolbar button:hover .ql-stroke,
        .ql-snow.ql-toolbar button:focus .ql-stroke,
        .ql-snow .ql-toolbar button:focus .ql-stroke,
        .ql-snow.ql-toolbar button.ql-active .ql-stroke,
        .ql-snow .ql-toolbar button.ql-active .ql-stroke,
        .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
        .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
        .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
        .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
        .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
        .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
        .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
        .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
        .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
        .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
        .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
        .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
        .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
        .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
        .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
        .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
        .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
        .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
        .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
        .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
        .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
        .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
            stroke: #06c;
        }

        @media (pointer: coarse) {
            .ql-snow.ql-toolbar button:hover:not(.ql-active),
            .ql-snow .ql-toolbar button:hover:not(.ql-active) {
                color: #444;
            }
            .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
            .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
            .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
            .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
                fill: #444;
            }
            .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
            .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
            .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
            .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
                stroke: #444;
            }
        }

        .ql-snow {
            box-sizing: border-box;
        }

        .ql-snow * {
            box-sizing: border-box;
        }

        .ql-snow .ql-hidden {
            display: none;
        }

        .ql-snow .ql-out-bottom,
        .ql-snow .ql-out-top {
            visibility: hidden;
        }

        .ql-snow .ql-tooltip {
            position: absolute;
            transform: translateY(10px);
        }

        .ql-snow .ql-tooltip a {
            cursor: pointer;
            text-decoration: none;
        }

        .ql-snow .ql-tooltip.ql-flip {
            transform: translateY(-10px);
        }

        .ql-snow .ql-formats {
            display: inline-block;
            vertical-align: middle;
        }

        .ql-snow .ql-formats:after {
            clear: both;
            content: '';
            display: table;
        }

        .ql-snow .ql-stroke {
            fill: none;
            stroke: #444;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2;
        }

        .ql-snow .ql-stroke-miter {
            fill: none;
            stroke: #444;
            stroke-miterlimit: 10;
            stroke-width: 2;
        }

        .ql-snow .ql-fill,
        .ql-snow .ql-stroke.ql-fill {
            fill: #444;
        }

        .ql-snow .ql-empty {
            fill: none;
        }

        .ql-snow .ql-even {
            fill-rule: evenodd;
        }

        .ql-snow .ql-thin,
        .ql-snow .ql-stroke.ql-thin {
            stroke-width: 1;
        }

        .ql-snow .ql-transparent {
            opacity: 0.4;
        }

        .ql-snow .ql-direction svg:last-child {
            display: none;
        }

        .ql-snow .ql-direction.ql-active svg:last-child {
            display: inline;
        }

        .ql-snow .ql-direction.ql-active svg:first-child {
            display: none;
        }

        .ql-snow .ql-editor h1 {
            font-size: 2em;
        }

        // .ql-snow .ql-editor h2 {
        //     font-size: 1.5em;
        // }

        // .ql-snow .ql-editor h3 {
        //     font-size: 1.17em;
        // }

        // .ql-snow .ql-editor h4 {
        //     font-size: 1em;
        // }

        .ql-snow .ql-editor h5 {
            font-size: 0.83em;
        }

        .ql-snow .ql-editor h6 {
            font-size: 0.67em;
        }

        .ql-snow .ql-editor a {
            text-decoration: underline;
        }

        // .ql-snow .ql-editor blockquote {
        //     border-left: 4px solid #ccc;
        //     margin-bottom: 5px;
        //     margin-top: 5px;
        //     padding-left: 16px;
        // }

        // .ql-snow .ql-editor code,
        // .ql-snow .ql-editor pre {
        //     background-color: #f0f0f0;
        //     border-radius: 3px;
        // }

        // .ql-snow .ql-editor pre {
        //     white-space: pre-wrap;
        //     margin-bottom: 5px;
        //     margin-top: 5px;
        //     padding: 5px 10px;
        // }

        // .ql-snow .ql-editor code {
        //     font-size: 85%;
        //     padding: 2px 4px;
        // }

        // .ql-snow .ql-editor pre.ql-syntax {
        //     background-color: #23241f;
        //     color: #f8f8f2;
        //     overflow: visible;
        // }

        .ql-snow .ql-editor img {
            max-width: 100%;
        }

        .ql-snow .ql-picker {
            color: #444;
            display: inline-block;
            float: left;
            font-size: 14px;
            font-weight: 500;
            height: 24px;
            position: relative;
            vertical-align: middle;
        }

        .ql-snow .ql-picker-label {
            cursor: pointer;
            display: inline-block;
            height: 100%;
            padding-left: 8px;
            padding-right: 2px;
            position: relative;
            width: 100%;
        }

        .ql-snow .ql-picker-label::before {
            display: inline-block;
            line-height: 22px;
        }

        .ql-snow .ql-picker-options {
            background-color: #fff;
            display: none;
            min-width: 100%;
            padding: 4px 8px;
            position: absolute;
            white-space: nowrap;
        }

        .ql-snow .ql-picker-options .ql-picker-item {
            cursor: pointer;
            display: block;
            padding-bottom: 5px;
            padding-top: 5px;
        }

        .ql-snow .ql-picker.ql-expanded .ql-picker-label {
            color: #ccc;
            z-index: 2;
        }

        .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
            fill: #ccc;
        }

        .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
            stroke: #ccc;
        }

        .ql-snow .ql-picker.ql-expanded .ql-picker-options {
            display: block;
            margin-top: -1px;
            top: 100%;
            z-index: 1;
        }

        .ql-snow .ql-color-picker,
        .ql-snow .ql-icon-picker {
            width: 28px;
        }

        .ql-snow .ql-color-picker .ql-picker-label,
        .ql-snow .ql-icon-picker .ql-picker-label {
            padding: 2px 4px;
        }

        .ql-snow .ql-color-picker .ql-picker-label svg,
        .ql-snow .ql-icon-picker .ql-picker-label svg {
            right: 4px;
        }

        .ql-snow .ql-icon-picker .ql-picker-options {
            padding: 4px 0px;
        }

        .ql-snow .ql-icon-picker .ql-picker-item {
            height: 24px;
            width: 24px;
            padding: 2px 4px;
        }

        .ql-snow .ql-color-picker .ql-picker-options {
            padding: 3px 5px;
            width: 152px;
        }

        .ql-snow .ql-color-picker .ql-picker-item {
            border: 1px solid transparent;
            float: left;
            height: 16px;
            margin: 2px;
            padding: 0px;
            width: 16px;
        }

        .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
            position: absolute;
            margin-top: -9px;
            right: 0;
            top: 50%;
            width: 18px;
        }

        .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
        .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
        .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
            content: attr(data-label);
        }

        .ql-snow .ql-picker.ql-header {
            width: 98px;
        }

        .ql-snow .ql-picker.ql-header .ql-picker-label::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item::before {
            content: 'Normal';
        }

        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
            content: 'Heading 1';
        }

        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
            content: 'Heading 2';
        }

        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
            content: 'Heading 3';
        }

        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
            content: 'Heading 4';
        }

        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
            content: 'Heading 5';
        }

        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
            content: 'Heading 6';
        }

        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
            font-size: 2em;
        }

        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
            font-size: 1.5em;
        }

        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
            font-size: 1.17em;
        }

        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
            font-size: 1em;
        }

        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
            font-size: 0.83em;
        }

        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
            font-size: 0.67em;
        }

        .ql-snow .ql-picker.ql-font {
            width: 108px;
        }

        .ql-snow .ql-picker.ql-font .ql-picker-label::before,
        .ql-snow .ql-picker.ql-font .ql-picker-item::before {
            content: 'Sans Serif';
        }

        .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,
        .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
            content: 'Serif';
        }

        .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,
        .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
            content: 'Monospace';
        }

        .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
            font-family: Georgia, Times New Roman, serif;
        }

        .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
            font-family: Monaco, Courier New, monospace;
        }

        .ql-snow .ql-picker.ql-size {
            width: 98px;
        }

        .ql-snow .ql-picker.ql-size .ql-picker-label::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item::before {
            content: 'Normal';
        }

        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
            content: 'Small';
        }

        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
            content: 'Large';
        }

        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
            content: 'Huge';
        }

        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
            font-size: 10px;
        }

        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
            font-size: 18px;
        }

        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
            font-size: 32px;
        }

        .ql-snow .ql-color-picker.ql-background .ql-picker-item {
            background-color: #fff;
        }

        .ql-snow .ql-color-picker.ql-color .ql-picker-item {
            background-color: #000;
        }

        .ql-toolbar.ql-snow {
            border: 1px solid #ccc;
            box-sizing: border-box;
            font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
            padding: 8px;
        }

        .ql-toolbar.ql-snow .ql-formats {
            margin-right: 15px;
        }

        .ql-toolbar.ql-snow .ql-picker-label {
            border: 1px solid transparent;
        }

        .ql-toolbar.ql-snow .ql-picker-options {
            border: 1px solid transparent;
            box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
        }

        .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
            border-color: #ccc;
        }

        .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
            border-color: #ccc;
        }

        .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
        .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
            border-color: #000;
        }

        .ql-toolbar.ql-snow+.ql-container.ql-snow {
            border-top: 0px;
        }

        .ql-snow .ql-tooltip {
            background-color: #fff;
            border: 1px solid #ccc;
            box-shadow: 0px 0px 5px #ddd;
            color: #444;
            padding: 5px 12px;
            white-space: nowrap;
        }

        .ql-snow .ql-tooltip::before {
            content: "Visit URL:";
            line-height: 26px;
            margin-right: 8px;
        }

        .ql-snow .ql-tooltip input[type=text] {
            display: none;
            border: 1px solid #ccc;
            font-size: 13px;
            height: 26px;
            margin: 0px;
            padding: 3px 5px;
            width: 170px;
        }

        .ql-snow .ql-tooltip a.ql-preview {
            display: inline-block;
            max-width: 200px;
            overflow-x: hidden;
            text-overflow: ellipsis;
            vertical-align: top;
        }

        .ql-snow .ql-tooltip a.ql-action::after {
            border-right: 1px solid #ccc;
            content: 'Edit';
            margin-left: 16px;
            padding-right: 8px;
        }

        .ql-snow .ql-tooltip a.ql-remove::before {
            content: 'Remove';
            margin-left: 8px;
        }

        .ql-snow .ql-tooltip a {
            line-height: 26px;
        }

        .ql-snow .ql-tooltip.ql-editing a.ql-preview,
        .ql-snow .ql-tooltip.ql-editing a.ql-remove {
            display: none;
        }

        .ql-snow .ql-tooltip.ql-editing input[type=text] {
            display: inline-block;
        }

        .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
            border-right: 0px;
            content: 'Save';
            padding-right: 0px;
        }

        .ql-snow .ql-tooltip[data-mode=link]::before {
            content: "Enter link:";
        }

        .ql-snow .ql-tooltip[data-mode=formula]::before {
            content: "Enter formula:";
        }

        .ql-snow .ql-tooltip[data-mode=video]::before {
            content: "Enter video:";
        }

        // .ql-snow a {
        //     color: #06c;
        // }

        .ql-container.ql-snow {
            border: 1px solid #ccc;
        } // HT Quill styles
        a {
            color: #4285f4 !important;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        .ql-snow.ql-toolbar button,
        .ql-snow .ql-toolbar button {
            padding: 6px;
            height: 32px;
            width: 32px;
        }

        .ql-toolbar.ql-snow .ql-formats {
            margin-right: 14px;
        }

        .ql-editor .ql-video {
            width: 100%;
            height: 337px;
        }
    </style>

    <!-- (from ./styles-highlight.js) highlightjs atom-one-dark styles -->
    <style>
        .hljs {
            display: block;
            overflow-x: auto;
            padding: 0.5em;
            color: #abb2bf;
            background: #282c34
        }

        .hljs-comment,
        .hljs-quote {
            color: #5c6370;
            font-style: italic
        }

        .hljs-doctag,
        .hljs-keyword,
        .hljs-formula {
            color: #c678dd
        }

        .hljs-section,
        .hljs-name,
        .hljs-selector-tag,
        .hljs-deletion,
        .hljs-subst {
            color: #e06c75
        }

        .hljs-literal {
            color: #56b6c2
        }

        .hljs-string,
        .hljs-regexp,
        .hljs-addition,
        .hljs-attribute,
        .hljs-meta-string {
            color: #98c379
        }

        .hljs-built_in,
        .hljs-class .hljs-title {
            color: #e6c07b
        }

        .hljs-attr,
        .hljs-variable,
        .hljs-template-variable,
        .hljs-type,
        .hljs-selector-class,
        .hljs-selector-attr,
        .hljs-selector-pseudo,
        .hljs-number {
            color: #d19a66
        }

        .hljs-symbol,
        .hljs-bullet,
        .hljs-link,
        .hljs-meta,
        .hljs-selector-id,
        .hljs-title {
            color: #61aeee
        }

        .hljs-emphasis {
            font-style: italic
        }

        .hljs-strong {
            font-weight: bold
        }

        .hljs-link {
            text-decoration: underline
        }
    </style>

    <!-- (from ./styles-common-for-editor-and-viewer.js) Quill Snow styles -->
    <style>
        .ql-editor {
    white-space: initial;
}

.ql-editor {
    font-family: Roboto, sans-serif;
    color: #424242;
    font-size: 1rem;
    line-height: 1.5;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

.ql-editor .ql-video {
    width: 100%;
    height: 310px;
    margin: 24px 0;
}

pre {
    border-radius:0;
    padding: 16px;
    font-size:14px;
    background-color: #23241f;
    color: #f8f8f2;
    word-break: keep-all;
    box-sizing:border-box;
    -moz-box-sizing:border-box;
    display:block; 
    white-space: pre-wrap;  
    white-space: -moz-pre-wrap; 
    white-space: -pre-wrap; 
    white-space: -o-pre-wrap; 
    word-wrap: break-word; 
}

blockquote {
    border-left: 3px solid rgba(0,0,0,.84);
    padding:0;
    padding-left: 20px;
    font-weight: 400;
    font-style: italic;
    line-height: 1.58;
    letter-spacing: -.003em;
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

ht-wysiwyg-image, ht-wysiwyg-gif, ht-wysiwyg-video, pre, blockquote  {
    margin: 32px 0;
}


<!-- ht-theme SharedStyles -->
h1, h2, h3, h4, h5, h6 {
    color: #414549;
}

a {
    color: #4285f4;
    text-decoration: none;
    outline: 0;
}

a:hover {
    text-decoration: underline;
}

p {
    /* font-size: 16px; */
    margin: 0 0 16px;
}

ul {
    margin-top: 0;
}

li {
    /* font-size: 16px; */
    line-height:1.8;
}
    </style>


    <style>
        body {
            padding: 0;
            margin: 0;
            height: 500px;
        }

        /* Toolbar styles */

        svg {
            fill: #444;
        }

        .ql-toolbar.ql-snow .ql-formats {
            margin-right: 14px;
        }

        .ql-snow.ql-toolbar button,
        .ql-snow .ql-toolbar button {
            padding: 6px;
            height: 32px;
            width: 32px;
        }

        /* Editor styles */

        #quill {
            height: 100%;
            max-height: calc(100% - 66px);
        }
    </style>
</head>

<body>
    <script>
        // Fix for iframe because default module add not working in frames
        function addModule(url) {
            let script = document.createElement("script");
            script.setAttribute("type", "module");
            script.setAttribute("src", url);
            document.head.appendChild(script);
        }

        addModule("/node_modules/@01ht/ht-wysiwyg/ht-wysiwyg-image.js");
        addModule("/node_modules/@01ht/ht-wysiwyg/ht-wysiwyg-gif.js");
        addModule("/node_modules/@01ht/ht-wysiwyg/ht-wysiwyg-video.js");
        addModule("/node_modules/@01ht/ht-wysiwyg/ht-wysiwyg-youtube.js");

        const icons = Quill.import('ui/icons');
        icons.header[3] = \`<svg viewBox="0 0 18 18">
  <path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/>
</svg>\`;
icons.header[4] = \`<svg viewBox="0 0 18 18">
  <path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/>
</svg>\`;
icons.gif = \`<svg viewBox="0 0 24 24">
<g><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
</svg>\`;
icons.youtube = \`<svg viewBox="0 0 511.627 511.627">
	<g>
		<path d="M459.954,264.376c-2.471-11.233-7.949-20.653-16.416-28.264c-8.474-7.611-18.227-12.085-29.27-13.418    c-35.02-3.806-87.837-5.708-158.457-5.708c-70.618,0-123.341,1.903-158.174,5.708c-11.227,1.333-21.029,5.807-29.407,13.418    c-8.376,7.614-13.896,17.035-16.562,28.264c-4.948,22.083-7.423,55.391-7.423,99.931c0,45.299,2.475,78.61,7.423,99.93    c2.478,11.225,7.951,20.653,16.421,28.261c8.47,7.614,18.225,11.991,29.263,13.134c35.026,3.997,87.847,5.996,158.461,5.996    c70.609,0,123.44-1.999,158.453-5.996c11.043-1.143,20.748-5.52,29.126-13.134c8.377-7.607,13.897-17.036,16.56-28.261    c4.948-22.083,7.426-55.391,7.426-99.93C467.377,319.007,464.899,285.695,459.954,264.376z M165.025,293.218h-30.549v162.45    h-28.549v-162.45h-29.98v-26.837h89.079V293.218z M242.11,455.668H216.7v-15.421c-10.278,11.615-19.989,17.419-29.125,17.419    c-8.754,0-14.275-3.524-16.556-10.564c-1.521-4.568-2.286-11.519-2.286-20.844V314.627h25.41v103.924    c0,6.088,0.096,9.421,0.288,9.993c0.571,3.997,2.568,5.995,5.996,5.995c5.138,0,10.566-3.997,16.274-11.991V314.627h25.41V455.668    z M339.183,413.411c0,13.894-0.855,23.417-2.56,28.558c-3.244,10.462-9.996,15.697-20.273,15.697    c-9.137,0-17.986-5.235-26.556-15.697v13.702h-25.406v-189.29h25.406v61.955c8.189-10.273,17.036-15.413,26.556-15.413    c10.277,0,17.029,5.331,20.273,15.988c1.704,4.948,2.56,14.369,2.56,28.264V413.411z M435.685,390.003h-51.104v24.839    c0,13.134,4.374,19.697,13.131,19.697c6.279,0,10.089-3.422,11.42-10.28c0.376-1.902,0.571-7.706,0.571-17.412h25.981v3.71    c0,9.329-0.195,14.846-0.572,16.563c-0.567,5.133-2.56,10.273-5.995,15.413c-6.852,10.089-17.139,15.133-30.841,15.133    c-13.127,0-23.407-4.855-30.833-14.558c-5.517-7.043-8.275-18.083-8.275-33.12v-49.396c0-15.036,2.662-26.076,7.987-33.119    c7.427-9.705,17.61-14.558,30.557-14.558c12.755,0,22.85,4.853,30.263,14.558c5.146,7.043,7.71,18.083,7.71,33.119V390.003    L435.685,390.003z"/>
		<path d="M302.634,336.043c-4.38,0-8.658,2.101-12.847,6.283v85.934c4.188,4.186,8.467,6.279,12.847,6.279    c7.419,0,11.14-6.372,11.14-19.13v-60.236C313.773,342.418,310.061,336.043,302.634,336.043z"/>
		<path d="M397.428,336.043c-8.565,0-12.847,6.475-12.847,19.41v13.134h25.693v-13.134    C410.274,342.511,405.99,336.043,397.428,336.043z"/>
		<path d="M148.473,113.917v77.375h28.549v-77.375L211.563,0h-29.121l-19.41,75.089L142.759,0h-30.262    c5.33,15.99,11.516,33.785,18.559,53.391C140.003,79.656,145.805,99.835,148.473,113.917z"/>
		<path d="M249.82,193.291c13.134,0,23.219-4.854,30.262-14.561c5.332-7.043,7.994-18.274,7.994-33.689V95.075    c0-15.225-2.669-26.363-7.994-33.406c-7.043-9.707-17.128-14.561-30.262-14.561c-12.756,0-22.75,4.854-29.98,14.561    c-5.327,7.043-7.992,18.181-7.992,33.406v49.965c0,15.225,2.662,26.457,7.992,33.689    C227.073,188.437,237.063,193.291,249.82,193.291z M237.541,89.935c0-13.134,4.093-19.701,12.279-19.701    s12.275,6.567,12.275,19.701v59.955c0,13.328-4.089,19.985-12.275,19.985s-12.279-6.661-12.279-19.985V89.935z"/>
		<path d="M328.328,193.291c9.523,0,19.328-5.901,29.413-17.705v15.703h25.981V48.822h-25.981v108.777    c-5.712,8.186-11.133,12.275-16.279,12.275c-3.429,0-5.428-2.093-5.996-6.28c-0.191-0.381-0.287-3.715-0.287-9.994V48.822h-25.981    v112.492c0,9.705,0.767,16.84,2.286,21.411C313.961,189.768,319.574,193.291,328.328,193.291z"/>
	</g>
</svg>\`;
icons.video = \`<svg viewBox="0 0 24 24">
<g><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
</svg>\`;

    </script>

    <div id="quill"></div>
    <script>
        hljs.configure({
        languages: ["javascript", "ruby", "python", "sql", "html", "css"]
        });

        var quill = new Quill(document.querySelector("#quill"), {
            modules: {
                syntax: true,
                toolbar: {
                    container: [
                        ["bold", "italic"],
                        [{ 'header': 2 }, { 'header': 3 }, { 'header': 4 }],
                        ["link", "image", "gif", "video", "youtube"],
                        ['blockquote', 'code-block'],
                        [
                            {
                                list: "ordered"
                            },
                            {
                                list: "bullet"
                            }
                        ],
                        ["clean"]
                    ],
                    handlers: {
                        'image': () => { showModal("image") },
                        'gif': () => { showModal("gif") },
                        'video': () => { showModal("video") },
                        'youtube': () => { showModal("youtube") }
                        
                    }
                }
            },
            theme: "snow"
        });

        window.dispatchEvent(
            new CustomEvent("quill-ready", {
                bubbles: false
            })
        );

        function showModal(mode) {
            window.dispatchEvent(
                new CustomEvent("show-modal", {
                    bubbles: false,
                    detail: {mode: mode}
                })
            );
        }
    </script>
</body>

</html>
`;
