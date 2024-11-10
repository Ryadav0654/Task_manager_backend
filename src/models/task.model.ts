import mongoose, { Schema } from "mongoose";

export interface ITask {
  title: string;
  description: string;
  completed: boolean;
  deadline: Date;
  createdAt: Date;
  priority:string;
  status:string
}

const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
        type: Boolean,
        default: false,
      },
    deadline: {
      type: Date,
      required:true
    },
    createdAt: {
      type:Date,
      default: Date.now(),
    },
    priority: {
      type: String,
      required:true
    },
    status: {
      type: String,
      required:true
    }
  },
  {
    timestamps: true,
  }
);


export const Task = mongoose.model<ITask>("Task", taskSchema);