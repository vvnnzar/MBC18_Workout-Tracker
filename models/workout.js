// Require mongoose package
const mongoose = require("mongoose");

// Mongoose Schema
const Schema = mongoose.Schema;

// Create Schema
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter Exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter Exercise name",
      },
      duration: {
        type: Number,
        required: "Enter Exercise duration",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

//Add workout schema to mongoose model
const Workout = mongoose.model("workout", WorkoutSchema);

// Export workout model
module.exports = Workout;
