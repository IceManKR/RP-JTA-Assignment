const prisma = require("../prisma/client")
const { hashPassword, comparePassword } = require("../utils/hash")
const { generateToken } = require("../utils/jwt")

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body

    const hashedPassword = await hashPassword(password)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword
      }
    })

    res.status(201).json({
      message: "User registered successfully"
    })

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.login = async (req, res) => {
  try {

    const { email, password } = req.body

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const validPassword = await comparePassword(password, user.password)

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const token = generateToken(user)

    res.json({ token })

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}