const express = require("express")
const router = express.Router()

const userController = require("../controllers/user.controller")
const authMiddleware = require("../middleware/auth.middleware")
const roleMiddleware = require("../middleware/role.middleware")

router.use(authMiddleware)

router.get("/profile", userController.getProfile)

router.get("/", roleMiddleware("ADMIN"), userController.getAllUsers)

router.delete("/:id", roleMiddleware("ADMIN"), userController.deleteUser)

module.exports = router