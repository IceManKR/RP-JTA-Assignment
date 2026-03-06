const prisma = require("../prisma/client")

exports.createTask = async (req, res) => {

  const { title, description, status } = req.body

  const task = await prisma.task.create({
    data: {
      title,
      description,
      status,
      userId: req.user.userId
    }
  })

  res.status(201).json(task)
}

exports.getTasks = async (req, res) => {

  let tasks

  if (req.user.role === "ADMIN") {

    tasks = await prisma.task.findMany()

  } else {

    tasks = await prisma.task.findMany({
      where: { userId: req.user.userId }
    })

  }

  res.json(tasks)
}

exports.updateTask = async (req, res) => {

  const { id } = req.params

  const task = await prisma.task.update({
    where: { id },
    data: req.body
  })

  res.json(task)
}

exports.deleteTask = async (req, res) => {

  const { id } = req.params

  await prisma.task.delete({
    where: { id }
  })

  res.json({ message: "Task deleted" })
}