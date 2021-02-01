const router = require("express").Router();
const bcrypt = require("bcrypt");

router.get("/", async (request, response) => {
  const users = await request.context.models.User.findAll({});
  return response.send(users);
});

router.get("/:userId", async (request, response) => {
  const user = await request.context.models.User.findByPk(
    request.params.userId
  );

  if (!user) {
    return response.status(404).end();
  }

  return response.send(user);
});

router.post("/", async (request, response) => {
  const body = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const savedUser = await request.context.models.User.create({
    username: body.username,
    name: body.name,
    passwordHash,
  });

  delete savedUser["passwordHash"];

  return response.status(201).send(savedUser);
});

module.exports = router;
