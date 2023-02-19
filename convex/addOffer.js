import { mutation } from "./_generated/server";

export default mutation(async ({ db }, auth1, auth2, id1, id2) => {
  const item = { auth1, auth2, id1, id2};
  await db.insert("offer", item);
});
