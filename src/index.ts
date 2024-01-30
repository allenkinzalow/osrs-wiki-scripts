import config from "@config";

import generateCluePages from "./scripts/clues";
import differences from "./scripts/difference/difference";
import infoboxGenerator from "./scripts/infoboxGenernator";

console.log(`Running ${config.environment}`);

//differences();
//infoboxGenerator("item_defs");
//infoboxGenerator("npc_defs");
generateCluePages();
