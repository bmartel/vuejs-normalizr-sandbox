import { normalize, schema } from "normalizr";
import user from "./user";
import task from "./task";
import comment from "./comment";

export const page = new schema.Entity("page", {
  user,
  task,
  tasks: [task],
  comment,
  comments: [comment]
});

export default state => {
  return normalize(state, page);
};
