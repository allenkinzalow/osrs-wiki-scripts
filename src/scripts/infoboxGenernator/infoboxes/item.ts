import { mkdir, readFile, writeFile } from "fs/promises";

import {
  InfoboxItem,
  InfoboxTemplate,
  MediaWikiBreak,
  MediaWikiBuilder,
  MediaWikiDate,
  MediaWikiFile,
  MediaWikiTemplate,
} from "../../../utils/mediawiki";

const itemInfoboxGenerator = async (id: string) => {
  try {
    const itemContent = await readFile(
      `./data/newdump/item_defs/${id}.json`,
      "utf-8"
    );
    const itemJson = JSON.parse(itemContent);

    const infoboxItem = new InfoboxTemplate<InfoboxItem>("item", {
      name: itemJson.name as string,
      image: new MediaWikiFile(`${itemJson.name}.png`),
      release: new MediaWikiDate(new Date()),
      update: "",
      members: itemJson.members as boolean,
      quest: "No",
      tradeable: itemJson.isTradeable,
      bankable: itemJson.placeholderId > 0,
      placeholder:
        itemJson.placeholderId > 1 ? itemJson.placeholderId : undefined,
      equipable: itemJson["wearPos1"] > 0,
      stackable: itemJson.stackable > 0,
      noteable: itemJson.notedId > 0,
      options: itemJson.interfaceOptions,
      examine: "",
      value: itemJson.cost,
      weight: (itemJson.weight / 1000).toFixed(3),
      id: itemJson.id,
    });

    const builder = new MediaWikiBuilder();
    builder.addContents([
      new MediaWikiTemplate("Stub"),
      infoboxItem.build(),
      new MediaWikiFile(`${itemJson.name} detail.png`, {
        horizontalAlignment: "left",
        resizing: { width: 130 },
      }),
      new MediaWikiBreak(),
    ]);

    await mkdir("./out/infobox/item", { recursive: true });
    await writeFile(`./out/infobox/item/${itemJson.id}.txt`, builder.build());
  } catch (e) {
    console.error(`Error generating infobox for item ${id}: `, e);
  }
};

export default itemInfoboxGenerator;
