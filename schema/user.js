import { schema } from "normalizr";

const processStrategy = (value, parent, key) => {
  switch (true) {
    case key === "owner" && parent.summary:
      return { ...value, tasks: [parent.id] };
    case key === "owner" && parent.body:
      return { ...value, comments: [parent.id] };
    default:
      return { ...value };
  }
};

const mergeStrategy = (entityA, entityB) => {
  return {
    ...entityA,
    ...entityB,
    tasks: [...(entityA.tasks || []), ...(entityB.tasks || [])],
    comments: [...(entityA.comments || []), ...(entityB.comments || [])]
  };
};

export default new schema.Entity(
  "users",
  {},
  {
    mergeStrategy,
    processStrategy
  }
);
