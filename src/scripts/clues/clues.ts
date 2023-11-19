import { readFile } from "node:fs/promises";

import {
  generateAnagramPages,
  generateCipherPages,
  generateCoordinatePages,
  generateCrypticPages,
  generateMapPages,
} from "./types";
import { getCacheProvider } from "./utils";
import { LazyPromise } from "../../utils/cache2/LazyPromise";

export const ITEM_EXAMINES: { [key: string]: string } = {};

const generateCluePages = async () => {
  const cache = new LazyPromise(() => getCacheProvider()).asPromise();

  const itemExamines = await readFile(`./data/examines/objs.csv`, "utf-8");
  itemExamines.split("\n").forEach((line) => {
    const parsedLine = line.split(",");
    const id = parsedLine[0];
    const examine = parsedLine[1];
    if (id) {
      ITEM_EXAMINES[id] = examine;
    }
  });

  generateAnagramPages(cache);
  generateMapPages(cache);
  generateCipherPages(cache);
  generateCoordinatePages(cache);
  generateCrypticPages(cache);
};

export default generateCluePages;
