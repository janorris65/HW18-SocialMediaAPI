import { Schema, model } from "mongoose";
//import thoughtSchema from "./thoughts";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate(emailval) {
        return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailval);
      },
    },
    //thoughts: [thoughtSchema],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    strict: "throw",
    // Send the virtuals to the client (e.g. res.json)
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
  }
);
userSchema.virtual("friendcount").get(function () {
  return this.friends.length;
});

export default model("users", userSchema);
// username, string, unique, required, trimmed
// email , string, unique, required, validated
// thoughts , array of id's referencing thought
// friends, array of id's referencing user
// virtual, called friendcount
