import itemInfoboxGenerator from "./infoboxes/item";

const infoboxGenerator = (type: string, id: string) => {
  if (type === "item") {
    itemInfoboxGenerator(id);
  }
};

export default infoboxGenerator;
