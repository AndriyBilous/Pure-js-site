// import image from "./assets/image.jpeg";
import {
  TextBlock,
  TitleBlock,
  ColumnsBlock,
  ImageBlock,
} from "./classes/blocks.js";

export const data = [
  new TitleBlock("Pure JS site constructor", {
    tag: "h2",
    // styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center; padding: 1.5rem;`,
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      padding: "1.5rem",
      "text-align": "center",
    },
  }),
  // new ImageBlock(image, {
  //   styles: {
  //     padding: "2rem 0",
  //     display: "flex",
  //     "justify-content": "center",
  //   },
  //   imageStyles: {
  //     width: "500px",
  //     height: "auto",
  //   },
  //   alt: "It`s a picture",
  // }),
  new ColumnsBlock(
    [
      "Application, constructed mostly on JavaScript, with minimum of HTML and CSS",
      "Application don`t use any libraries",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
  new TextBlock("some text", {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
];
