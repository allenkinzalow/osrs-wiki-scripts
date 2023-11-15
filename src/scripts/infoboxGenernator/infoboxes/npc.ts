import { mkdir, readFile, writeFile } from "fs/promises";

import {
  InfoboxItem,
  InfoboxNPC,
  InfoboxTemplate,
  MediaWikiBreak,
  MediaWikiBuilder,
  MediaWikiDate,
  MediaWikiFile,
  MediaWikiTemplate,
} from "../../../utils/mediawiki";

const npcInfoboxGenerator = async (id: string) => {
  try {
    const npcContent = await readFile(
      `./data/newdump/npc_defs/${id}.json`,
      "utf-8"
    );
    const npcJson = JSON.parse(npcContent);

    const infoboxNpc = new InfoboxTemplate<InfoboxNPC>("NPC", {
      name: npcJson.name as string,
      image: new MediaWikiFile(`${npcJson.name}.png`),
      release: new MediaWikiDate(new Date()),
      update: "",
      members: npcJson.members as boolean,
      quest: "No",
      options: npcJson.actions,
      examine: "",
      id: npcJson.id,
    });

    const builder = new MediaWikiBuilder();
    builder.addContents([
      new MediaWikiTemplate("Stub"),
      infoboxNpc.build(),
      new MediaWikiFile(`${npcJson.name} chathead.png`, {
        horizontalAlignment: "left",
      }),
      new MediaWikiBreak(),
    ]);

    await mkdir("./out/infobox/npc", { recursive: true });
    await writeFile(`./out/infobox/npc/${npcJson.id}.txt`, builder.build());
  } catch (e) {
    console.error(`Error generating infobox for npc ${id}: `, e);
  }
};

export default npcInfoboxGenerator;
