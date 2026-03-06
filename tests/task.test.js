const request = require("supertest")
const app = require("../src/app")

describe("Task API", () => {

  it("should reject creating task without token", async () => {

    const res = await request(app)
      .post("/tasks")
      .send({
        title: "Test Task"
      })

    expect(res.statusCode).toBe(401)

  })

})