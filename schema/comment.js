import { schema } from "normalizr";
import user from "./user";

export default new schema.Entity(
  "comments",
  {
    owner: user
  },
  {
    processStrategy: (value, parent, key) => {
      return { ...value, task: parent.id };
    }
  }
);
