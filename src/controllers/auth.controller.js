const prisma = require("../prisma/client")
const { hashPassword, comparePassword } = require("../utils/hash")
const { generateToken } = require("../utils/jwt")
const { registerSchema, loginSchema } = require("../validators/auth.validator")

// REGISTER USER
exports.register = async (req, res) => {
  try {

    // Validate input
    const parsed = registerSchema.safeParse(req.body)

    if (!parsed.success) {
      return res.status(400).json({
        error: parsed.error.errors
      })
    }

    const { email, password } = parsed.data

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      })
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create user
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword
      }
    })

    res.status(201).json({
      message: "User registered successfully"
    })

  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
}


// LOGIN USER
exports.login = async (req, res) => {
  try {

    // Validate input
    const parsed = loginSchema.safeParse(req.body)

    if (!parsed.success) {
      return res.status(400).json({
        error: parsed.error.errors
      })
    }

    const { email, password } = parsed.data

    // Find user
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials"
      })
    }

    // Compare passwords
    const validPassword = await comparePassword(password, user.password)

    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid credentials"
      })
    }

    // Generate JWT
    const token = generateToken(user)

    res.json({
      token
    })

  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
}