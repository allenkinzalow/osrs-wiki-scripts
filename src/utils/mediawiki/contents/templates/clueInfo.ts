import { Template } from "./types";
import MediaWikiTemplate from "../template";

class ClueInfoTemplate extends Template {
  id: string;
  text?: string;
  items?: string;
  notes?: string;
  map?: string;

  constructor(
    id: string,
    text: string,
    items: string,
    notes: string,
    map: string
  ) {
    super("Clue info");
    this.id = id;
    this.text = text;
    this.items = items;
    this.notes = notes;
    this.map = map;
  }

  build() {
    const clueInfoTemplate = new MediaWikiTemplate(this.name);
    clueInfoTemplate.add("id", this.id);
    clueInfoTemplate.add("text", this.text);
    clueInfoTemplate.add("items", this.items);
    clueInfoTemplate.add("notes", this.notes);
    clueInfoTemplate.add("map", this.map);
    return clueInfoTemplate;
  }
}

export default ClueInfoTemplate;
