import { z } from "zod";

export const userSchemaRequest = z.object({
  id: z.string(),
});

export const userSchemaReply = z.object({
  id: z.string(),
  name: z.string(),
})

export const userSchemaReplyArray = z.array(userSchemaReply);

export type UserSchemaRequest = z.infer<typeof userSchemaRequest>;
export type UserSchemaReply = z.infer<typeof userSchemaReply>;

export const models = {
  userSchemaRequest,
  userSchemaReply,
  userSchemaReplyArray,
};
