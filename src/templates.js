import { row, col, css } from "./utils.js";

function title(block) {
  const { tag = "h1", styles } = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

function text(block) {
  return row(col(`<p>${block.value}</p>`), css(block.options.styles));
}

function columns(block) {
  const html = block.value.map(col).join("");
  return row(html, css(block.options.styles));
}

// function image(block) {
//   const { alt = "", imageStyles, styles } = block.options;
//   return row(
//     `<img src="${block.value}" alt="${alt}" style="${css(imageStyles)}"/>`,
//     css(styles)
//   );
// }

export const templates = {
  title,
  text,
  columns,
  // image,
};
