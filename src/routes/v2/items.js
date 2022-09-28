const item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    description: { type: "string" },
  },
};
const postItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name", "description"],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
      },
    },
    response: {
      201: item,
    },
  },
};
const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
      },
    },
  },
};

const itemRoutes_v2 = async (fastify, options, done) => {
  fastify.post("/", postItemOpts, async (request, reply) => {
    const client = await fastify.pg.connect();
    try {
      const { name, description } = request.body;
      const { rows } = await fastify.pg.query(
        "INSERT INTO items (name,description) VALUES ($1, $2) RETURNING *",
        [name, description]
      );
      reply.code(201).send(rows[0]);
    } catch (error) {
      reply.send(error);
    } finally {
      client.release();
    }
  });

  fastify.get("/", async (request, reply) => {
    const client = await fastify.pg.connect();
    try {
      const { rows } = await client.query("SELECT * FROM items");
      reply.send(rows);
    } catch (error) {
      reply.send(error);
    } finally {
      client.relese();
    }
  });

  fastify.get("/:id", async (request, reply) => {
    const client = await fastify.pg.connect();
    try {
      const { id } = request.params;
      const { rows } = await client.query("SELECT * FROM items WHERE id=$1", [
        id,
      ]);
      reply.send(rows[0]);
    } catch (error) {
      reply.send(error);
    } finally {
      client.relese();
    }
  });

  fastify.put("/:id", async (request, reply) => {
    const client = await fastify.pg.connect();
    try {
      const { id } = request.params;
      const { name, description } = request.body;
      const { rows } = await client.query(
        "UPDATE items SET name=$1, description=$2 WHERE id=$3 RETURNING *",
        [name, description, id]
      );
      reply.send(rows[0]);
    } catch (error) {
      reply.send(error);
    } finally {
      client.relese();
    }
  });

  fastify.delete("/:id", deleteItemOpts, async (request, reply) => {
    const client = await fastify.pg.connect();
    try {
      const { id } = request.params;
      await client.query("DELETE from items WHERE id=$1", [id]);
      reply.send(`Item ${id} has been deleted`);
    } catch (error) {
      reply.send(error);
    } finally {
      client.relese();
    }
  });

  done();
};

module.exports = { itemRoutes_v2 };
