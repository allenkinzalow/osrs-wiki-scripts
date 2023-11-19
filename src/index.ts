import config from "@config";

import generateCluePages from "./scripts/clues";

console.log(`Running ${config.environment}`);

//differences();
//infoboxGenerator("item_defs");
//infoboxGenerator("npc_defs");
generateCluePages();
