const supertest = require("supertest");
const { models, sequelize } = require("../models");
const app = require("../app");
const api = supertest(app);

const Todo = models.Todo;

let auth = {};

beforeAll(async () => {
  const response = await api
    .post("/api/login")
    .send({
      username: "sam",
      password: "sam",
    })
    .expect(200);

  auth.token = response.body.token;
});

describe("addition of a new todo", () => {
  test("succeeds with valid data", async () => {
    const newTodo = {
      content: "This works",
      isPrivate: false,
      userId: "sam",
    };

    const savedTodo = await api
      .post("/api/todos")
      .auth(auth.token, { type: "bearer" })
      .send(newTodo)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    expect(savedTodo.body.content).toContain("This works");
  });

  test("does not validate with wrong token", async () => {
    const newNote = {
      content: "This does not work",
      isPrivate: true,
    };

    await api
      .post("/api/todos")
      .auth(auth.token + "u", { type: "bearer" })
      .send(newNote)
      .expect(401);
  });
});

afterAll(() => {
  sequelize.close();
});
