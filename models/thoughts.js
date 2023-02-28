import { Schema, model } from "mongoose";
import { reactionSchema } from "./reactions.js";

const thoughtSchema = new Schema(
  {
    thoughttext: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
      ref: "users",
    },
    reactions: [reactionSchema],
  },
  {
    strict: "throw",
    // Send the virtuals to the client (e.g. res.json)
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
  }
);

export { thoughtSchema };
export default model("thoughts", thoughtSchema);
