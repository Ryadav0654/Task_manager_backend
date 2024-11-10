import { Router } from "express";
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from "@/controllers/task.controllers";
import { asyncHander } from "@/utils/asyncHander";

const router = Router();

router.route("/").get(asyncHander(getAllTasks));
router.route("/").post(asyncHander(createTask));
router.route("/:id").get(asyncHander(getTaskById));
router.route("/:id").patch(asyncHander(updateTask));
router.route("/:id").delete(asyncHander(deleteTask));

export default router;