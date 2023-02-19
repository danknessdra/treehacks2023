import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({

    messages: defineTable({
        body: s.string(),
        user: s.id("users"),
        chatID:s.string()
      }),

    users: defineTable({
    name: s.string(),
    username:s.string(),
    email: s.string(),
    description:s.string(),
    phone: s.string()
    }),

    forum: defineTable({
        title:s.string(),
        description:s.string(),
        author:s.string(),
        tags:s.any(),

    }),

    requests: defineTable({

        from:s.string(),
        to:s.string(),
        postId:s.bigint(),

    })

});