# ht-wysiwyg

Because Quill not supporting Shadow DOM yet (when using Quill((1.3.6) in Shadow DOM text format not working correctly), need using iframe variant.

# Build iframe-imports.js

Because iframe-content.js not going throw build process, all ES6 imports must be transform manually.

Needed imports placed in iframe-imports-es6.js.

For making iframe-imports-amd.js => "npm run build"
