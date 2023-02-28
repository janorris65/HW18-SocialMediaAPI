import { Schema, model } from "mongoose";
// import reactionSchema from "./reactions.js"

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
    // reactions: [reactionSchema],
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
// thoughttext , string required, 1-280 char
// createdAt , Date, default to current time stamp, getter method to format timestamp
// username string, required
// reactions, array of nested (embedded documents)
// reactions cont
// reactionID mongooses Objectid datatype, default set to new ObjectID
// reactionBody string, required, 280 max
// Username string, required
// createdAt , Date, default to current time stamp, getter method to format timestamp
