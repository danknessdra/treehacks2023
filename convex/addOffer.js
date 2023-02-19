import { mutation } from "./_generated/server";

export default mutation(async ({ db }, auth1, auth2, id1, id2, title1, description1, tag1, author1, title2, description2, tag2, author2) => {
  const item = { auth1, auth2, id1, id2, title1, description1, tag1, author1, title2, description2, tag2, author2};
  await db.insert("offer", item);
});
