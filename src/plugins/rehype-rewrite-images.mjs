import { visit } from 'unist-util-visit';

/**
 * Rehype plugin: rewrite relative image paths to absolute with base path.
 * Works on the HTML AST after markdown is converted.
 */
export default function rehypeRewriteImages() {
  const base = '/FisicaTeorica_I/';
  return function (tree) {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        const src = node.properties?.src;
        if (src && (src.startsWith('./assets/') || src.startsWith('assets/'))) {
          const filename = src.replace(/^\.\/assets\//, '').replace(/^assets\//, '');
          node.properties.src = base + 'assets/' + filename;
        }
      }
    });
  };
}