const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

const router = require("express").Router();

router.get("/", async (request, response) => {
  // Check if token is present and then decipher it.
  // Checking here is to prevent Unauthorized error yet we want to display public todos
  const decodedToken = request.token
    ? jwt.verify(request.token, process.env.SECRET)
    : null;

  const isLoggedIn = !(!request?.token || !decodedToken?.username); // Check if if no token (valid or present) and converting to a boolean

  const loggedInUser = isLoggedIn
    ? await request.context.models.User.findByPk(decodedToken.username)
    : null;

  const checkCondition = loggedInUser
    ? {
        [Op.or]: [{ isPrivate: false }, { userId: loggedInUser.username }],
      }
    : { isPrivate: false };

  const todos = await request.context.models.Todo.findAll({
    where: checkCondition,
  });

  return response.send(todos);
});

router.get("/:todoId", async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET);

  if (!request.token || !decodedToken.username) {
    return response.status(401).json({ error: "Token missing or invalid" });
  }

  const user = await request.context.models.User.findByPk(
    decodedToken.username
  );

  if (user.username !== decodedToken.username) {
    return response.status(401).json({ error: "Unauthorized" });
  }

  const todo = await request.context.models.Todo.findByPk(
    request.params.todoId
  );

  if (!todo) {
    return response.status(404).end();
  }

  if (user.username !== todo?.userId) {
    return response.status(401).json({ error: "Unauthorized" });
  }

  return response.send(todo);
});

router.post("/", async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET);

  if (!request.token || !decodedToken.username) {
    return response.status(401).json({ error: "Token missing or invalid" });
  }

  const user = await request.context.models.User.findByPk(
    decodedToken.username
  );

  if (
    user.username !== request.body.userId ||
    user.username !== decodedToken.username
  ) {
    return response.status(401).json({ error: "Unauthorized" });
  }

  const todo = await request.context.models.Todo.create({
    text: request.body.text,
    isPrivate: request.body.isPrivate,
    userId: request.body.userId,
  });

  return response.status(201).send(todo);
});

router.put("/:todoId", async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET);

  if (!request.token || !decodedToken.username) {
    return response.status(401).json({ error: "Token missing or invalid" });
  }

  const user = await request.context.models.User.findByPk(
    decodedToken.username
  );

  if (
    user.username !== request.body.userId ||
    user.username !== decodedToken.username
  ) {
    return response.status(401).json({ error: "Unauthorized" });
  }

  const todo = await request.context.models.Todo.upsert({
    id: request.params.todoId,
    text: request.body.text,
    isPrivate: request.body.isPrivate,
    userId: decodedToken.username,
  });

  return response.send(todo);
});

router.delete("/:todoId", async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET);

  if (!request.token || !decodedToken.username) {
    return response.status(401).json({ error: "Token missing or invalid" });
  }

  const user = await request.context.models.User.findByPk(
    decodedToken.username
  );

  if (user.username !== decodedToken.username) {
    return response.status(401).json({ error: "Unauthorized" });
  }

  const todo = await request.context.models.Todo.destroy({
    where: {
      [Op.and]: [{ id: request.params.todoId }, { userId: user.username }],
    },
  });

  console.log("===================");
  console.log(todo);

  if (!todo) {
    return response.status(401).json({ error: "Unauthorized" });
  }

  return response.status(204).end();
});

module.exports = router;
