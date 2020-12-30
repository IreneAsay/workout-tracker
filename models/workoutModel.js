const mongoose = require("mongoose")
const Schema = mongoose.Schema
const workoutModel = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "You must enter an exercise type."
            },
            name: {
                type: String,
                trim: true,
                required: "You must enter an exercise name."
            },
            duration: {
                type: Number,
                trim: true,
                required: "You must enter an exercise duration."
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            },
        }
    ]
});

const Workout = mongoose.model("Workout", workoutModel)
module.exports = Workout
