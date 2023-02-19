import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({

    messages: defineTable({
        body: s.string(),
        user: s.id("users"),
        convoID: s.string(),
        time:s.bigint(),
        msgId:s.bigint()
      }),

    users: defineTable({
    name: s.string(),
    userid: s.bigint(),
    email: s.string(),
    description:s.string(),
    phone: s.string()
    }).index("by_token", ["userid"]),

    posts: defineTable({
        postId:s.bigint(),
        title:s.string(),
        date:s.string(),
        description:s.string(),
        author:s.string(),
        tags:s.any(),

    }),

    requests: defineTable({

        from:s.string(),
        to:s.string(),
        requestId:s.bigint(),
        postId:s.bigint()

    })

});