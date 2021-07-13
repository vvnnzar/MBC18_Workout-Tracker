// Import express router
const router = require("express").Router();
const express = require("express");

// Import workout model
const Workout = require("../models/workout");

router.get("/api/workouts", async (req, res) => {
  try {
    let dbWorkout = await Workout.aggregate([
      {
        $unwind: "exercises",
      },
    ]);
    res.json(dbWorkout);
  } catch {
    res.status(500);
  }
});

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbWorkout) => {
      console.log("Please output data", dbWorkout[0].exercises);
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.put(
  "/api/workouts/:id",
  express.json(),
  async ({ body, params }, res) => {
    console.log(params, body);
    Workout.updateOne({ _id: params.id }, { $push: { exercises: body } })
      .then((dbWorkout) => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  }
);

// Export API routes
module.exports = router;
