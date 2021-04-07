// Dependencies //
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Workout Schema //

const workoutSchema = new Schema(
{
    day: {
      type: Date,
      default: new Date()
    },
    exercises: Array
},
);
  
const workout = mongoose.model("Workout", workoutSchema);

 // Export the database//
 module.exports = workout;