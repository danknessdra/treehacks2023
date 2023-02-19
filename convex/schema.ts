import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({

    messages: defineTable({
        body: s.string(),
        user: s.id("users"),
        convoID: s.string()
      }),

    users: defineTable({
    name: s.string(),
    tokenIdentifier: s.string(),
    email: s.string(),
    description:s.string(),
    phone: s.string()
    }).index("by_token", ["tokenIdentifier"]),

    posts: defineTable({

        title:s.string(),
        date:s.string(),
        description:s.string(),
        author:s.string(),
        tags:s.any()

    }),

});