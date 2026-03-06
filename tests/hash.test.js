const { hashPassword } = require("../src/utils/hash")

describe("Hash Utility", () => {

  it("should hash password", async () => {

    const hash = await hashPassword("123456")

    expect(hash).toBeDefined()

  })

})