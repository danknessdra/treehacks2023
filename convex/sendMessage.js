import { mutation } from "./_generated/server";

export default mutation(async ({ db }, title, description, tag, author, pid) => {
  const item = { title, description, tag, author, pid};
  await db.insert("form", item);
});
