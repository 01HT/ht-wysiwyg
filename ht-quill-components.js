let Inline = Quill.import("blots/inline");
let Block = Quill.import("blots/block");
let BlockEmbed = Quill.import("blots/block/embed");

// ht-wysiwyg-image
class HTWysiwygImage extends BlockEmbed {
  static create(value) {
    let node = super.create();
    node.data = value;
    return node;
  }

  static value(node) {
    return node.data;
  }
}

HTWysiwygImage.blotName = "ht-wysiwyg-image";
HTWysiwygImage.tagName = "ht-wysiwyg-image";

Quill.register(HTWysiwygImage);

// ht-wysiwyg-gif
class HTWysiwygGif extends BlockEmbed {
  static create(value) {
    let node = super.create();
    node.data = value;
    return node;
  }

  static value(node) {
    return node.data;
  }
}

HTWysiwygGif.blotName = "ht-wysiwyg-gif";
HTWysiwygGif.tagName = "ht-wysiwyg-gif";

Quill.register(HTWysiwygGif);

// ht-wysiwyg-video
class HTWysiwygVideo extends BlockEmbed {
  static create(value) {
    let node = super.create();
    node.data = value;
    return node;
  }

  static value(node) {
    return node.data;
  }
}

HTWysiwygVideo.blotName = "ht-wysiwyg-video";
HTWysiwygVideo.tagName = "ht-wysiwyg-video";

Quill.register(HTWysiwygVideo);

// ht-wysiwyg-youtube
class HTWysiwygYoutube extends BlockEmbed {
  static create(value) {
    let node = super.create();
    node.data = value;
    return node;
  }

  static value(node) {
    return node.data;
  }
}

HTWysiwygYoutube.blotName = "ht-wysiwyg-youtube";
HTWysiwygYoutube.tagName = "ht-wysiwyg-youtube";

Quill.register(HTWysiwygYoutube);
