const { z } = require("zod")

exports.taskSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  status: z.enum(["PENDING", "COMPLETED"]).optional()
})