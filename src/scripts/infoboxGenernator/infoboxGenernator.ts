import { readdir } from "fs/promises";

import itemInfoboxGenerator from "./infoboxes/item";

const infoboxGenerator = async (type: string, id?: string) => {
  if (type === "item_defs") {
    if (id) {
      itemInfoboxGenerator(id);
    } else {
      const newItems = await readdir(`./out/added/item_defs`);
      newItems.forEach((file) => {
        itemInfoboxGenerator(file.split(".")[0]);
      });
    }
  }
};

export default infoboxGenerator;
