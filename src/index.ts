import config from "@config";

import differences from "./scripts/difference/difference";
import infoboxGenerator from "./scripts/infoboxGenernator";

console.log(`Running ${config.environment}`);

//differences();
infoboxGenerator("item", "4151");
