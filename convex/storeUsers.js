import { mutation } from "./_generated/server";

/**
 * Insert or update the user in a Convex table then return the document's ID.
 *
 * The `UserIdentity.tokenIdentifier` string is a stable and unique value we use
 * to look up identities.
 *
 * Keep in mind that `UserIdentity` has a number of optional fields, the
 * presence of which depends on the identity provider chosen. It's up to the
 * application developer to determine which ones are available and to decide
 * which of those need to be persisted.
 */
export default mutation(async ({ db, auth }) => {
  const identity = await auth.getUserIdentity();
  console.log(identity);
  if (!identity) {
    throw new Error("Called storeUser without authentication present");
  }

  // Check if we've already stored this identity before.
  const user = await db.query("users").filter(q=>q.eq(q.field("tokenID"),identity.tokenIdentifier)).collect();

  if (user.length !== 0) {
    // If we've seen this identity before but the name has changed, patch the value.
    if (user.name != identity.name) {
      await db.patch(user[0]._id, { name: identity.name });
    }
    
    return user._id;
  }
 
  // If it's a new identity, create a new `User`.
  return db.insert("users", {
    name: identity.name,
    tokenID: identity.tokenIdentifier,
    email: identity.email,
    description:"Nothing yet!",
    phone:"Nothing yet!",
    
  });

});