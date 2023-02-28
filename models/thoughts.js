import { Schema, model } from "mongoose";

const thoughtSchema = new Schema({});
// thoughttext , string required, 1-280 char
// createdAt , Date, default to current time stamp, getter method to format timestamp
// username string, required
// reactions, array of nested (embedded documents)
// reactions cont
// reactionID mongooses Objectid datatype, default set to new ObjectID
// reactionBody string, required, 280 max
// Username string, required
// createdAt , Date, default to current time stamp, getter method to format timestamp
