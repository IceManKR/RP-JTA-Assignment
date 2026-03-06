const prisma = require("../prisma/client")

exports.getAllUsers = async (req, res) => {

  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      role: true,
      createdAt: true
    }
  })

  res.json(users)
}

exports.deleteUser = async (req, res) => {

  const { id } = req.params

  await prisma.user.delete({
    where: { id }
  })

  res.json({
    message: "User deleted"
  })
}

exports.getProfile = async (req, res) => {

  const user = await prisma.user.findUnique({
    where: { id: req.user.userId },
    select: {
      id: true,
      email: true,
      role: true,
      createdAt: true
    }
  })

  res.json(user)
}