import { schema } from "normalizr";
import user from "./user";
import comment from "./comment";

export default new schema.Entity("tasks", {
  owner: user,
  comments: [comment]
});
