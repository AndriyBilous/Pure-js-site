import { block } from "../utils.js";
import { ColumnsBlock, TextBlock, TitleBlock } from "./blocks.js";

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback;

    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML("afterbegin", this.template);
    this.$el.addEventListener("submit", this.addBlock.bind(this));
  }

  get template() {
    return [
      block("text"),
      block("title"),
      block("columns", "1Value,2Value,...,NValue"),
    ].join("");
  }

  addBlock(event) {
    event.preventDefault();

    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;

    let newBlock;

    switch (type) {
      case "text":
        newBlock = new TextBlock(value, { styles });
        break;
      case "title":
        newBlock = new TitleBlock(value, { styles });
        break;
      case "columns":
        newBlock = new ColumnsBlock(value.split(","), { styles });
        break;

      default:
        break;
    }

    this.update(newBlock);

    event.target.value.value = "";
    event.target.styles.value = "";
  }
}
