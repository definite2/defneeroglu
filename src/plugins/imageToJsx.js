import { visit } from "unist-util-visit";
const sizeOf = require("image-size");
const fs = require("fs");
module.exports = (options) => (tree) => {
  visit(
    tree,
    // only visit p tags that contain an img element
    (node) =>
      node.type === "paragraph" &&
      node.children.some((n) => n.type === "image"),
    (node) => {
      const imageNode = node.children.find((n) => n.type === "image");
      let localImage = `${process.cwd()}/public${imageNode.url}`;
      if (fs.existsSync(localImage)) {
        const dimensions = sizeOf(localImage);
         // Convert original node to next/image
        (imageNode.type = "mdxJsxFlowElement"),
          (imageNode.name = "Image"),
          (imageNode.attributes = [
            { type: "mdxJsxAttribute", name: "alt", value: imageNode.alt },
            { type: "mdxJsxAttribute", name: "src", value: imageNode.url },
            { type: "mdxJsxAttribute", name: "width", value: dimensions.width },
            {
              type: "mdxJsxAttribute",
              name: "height",
              value: dimensions.height,
            },
          ]);
          // Change node type from p to div to avoid nesting error
        node.type = 'div'
        node.children = [imageNode]
      }
    }
  );
};
