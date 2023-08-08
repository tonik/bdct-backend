import { FastifyPluginAsync } from "fastify";
import usersData from "../../data/users.json";

const users: FastifyPluginAsync = async (server): Promise<void> => {
  server.zod.get(
    `/users`,
    {
      operationId: `getAllUsers`,
      description: `Get all users`,
      reply: `userSchemaReplyArray`,
    },
    async () => {
      return usersData;
    }
  );

  server.zod.get(
    `/users/:id`,
    {
      operationId: `getUser`,
      params: `userSchemaRequest`,
      description: `Get a user by id`,
      reply: `userSchemaReply`,
    },
    async ({ params }) => {
      const user = usersData.find((user) => String(user.id) === params.id);
      if (!user) {
        throw server.httpErrors.notFound();
      }
      return user;
    }
  );
};

export default users;
