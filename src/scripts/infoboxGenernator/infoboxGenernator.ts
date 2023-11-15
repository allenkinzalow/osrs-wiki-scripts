import { readdir } from "fs/promises";

import itemInfoboxGenerator from "./infoboxes/item";
import npcInfoboxGenerator from "./infoboxes/npc";

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
  } else if (type === "npc_defs") {
    if (id) {
      npcInfoboxGenerator(id);
    } else {
      const newItems = await readdir(`./out/added/npc_defs`);
      newItems.forEach((file) => {
        npcInfoboxGenerator(file.split(".")[0]);
      });
    }
  }
};

export default infoboxGenerator;
