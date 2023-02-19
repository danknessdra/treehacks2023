import { mutation } from "./_generated/server";

export default mutation(async ({ db }, title, description, tag, author) => {
  const item = { title, description, tag, author};
  await db.insert("form", item);
});
