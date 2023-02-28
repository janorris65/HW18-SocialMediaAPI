import { Schema, model } from "mongoose";

const reactionSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      ref: "users",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
  },
  {
    strict: "throw",
    // Send the virtuals to the client (e.g. res.json)
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
  }
);

export { reactionSchema };
export default model("thoughts", reactionSchema);
// reactions cont
// reactionID mongooses Objectid datatype, default set to new ObjectID??? isnt this included
// reactionBody string, required, 280 max
// Username string, required
// createdAt , Date, default to current time stamp, getter method to format timestamp
