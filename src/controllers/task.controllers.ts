import { Request, Response } from "express";
import { ApiResponse } from "@/utils/apiResponse";
import { ApiError } from "@/utils/apiError";
import { Task } from "@/models/task.model";

export const getAllTasks = async (req: Request, res: Response):Promise<Response> => {
  const tasks = await Task.find();

  if (!tasks || tasks.length === 0) {
    throw new ApiError(404, "No tasks found", ["No tasks available in the database"]);
  }
  return res
    .status(200)
    .json(new ApiResponse(200, tasks, "All task fetch Successfully"));
};

export const getTaskById = async (req: Request, res: Response):Promise<Response> => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "Task ID is required"));
    }

    const task = await Task.findById(id);

    if (!task) {
      throw new ApiError(404, "task not found!");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, task, "task fetch Successfully"));
  } catch (error: any) {
    throw new ApiError(500, error.message || "An unexpected error occurred");
  }
};

export const createTask = async (req: Request, res: Response):Promise<Response> => {
  const { title, description, deadline, status, priority } = req.body;

  if (!title || !deadline || !status || !priority ) {
    throw new ApiError(
      400,
      "All fields are required"
    );
  }

  try {
    const createdTask = await Task.create({ title, description, deadline, status, priority  });

    if (!createdTask) {
      throw new ApiError(500, "An error occurred while creating the task");
    }

    return res
      .status(201)
      .json(new ApiResponse(200, createdTask, "Task created Successfully"));
  } catch (error: any) {
    throw new ApiError(500, error.message || "An unexpected error occurred");
  }
};

export const updateTask = async (req: Request, res: Response):Promise<Response> => {
  try {
    const { id } = req.params;
    const { title, description, deadline } = req.body;

    if (!id) {
      throw new ApiError(400, "Task ID is required");
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, deadline },
      { new: true }
    );

    if (!updatedTask) {
      throw new ApiError(404, "Task not found or update failed");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, updatedTask, "Task updated Successfully"));
  } catch (error: any) {
    throw new ApiError(500, "Something went wrong while updating the task", [
      error.message,
    ]);
  }
};

export const deleteTask = async (req: Request, res: Response):Promise<Response> => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new ApiError(400, "Task ID is required");
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      throw new ApiError(404, "Task not found");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, deletedTask, "Task deleted Successfully"));
  } catch (error) {
    throw new ApiError(500, "Something went wrong while deleting the task");
  }
};
