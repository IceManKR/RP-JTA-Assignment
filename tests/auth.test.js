const request = require("supertest")
const app = require("../src/app")

describe("Auth API", () => {

  it("should register a new user", async () => {

    const email = `test${Date.now()}@test.com`

    const res = await request(app)
      .post("/auth/register")
      .send({
        email,
        password: "123456"
      })

    expect(res.statusCode).toBe(201)

  })

})