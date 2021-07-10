// Import express router
const router = require("express").Router();

// Import workout model
const Workout = require("../models/workout");

// GET Request for getting all workouts
router.get("/api/workouts", async (req, res) => {
  console.log("HELLO ");
  try {
    let dbWorkout = await Workout.aggregate([
      // {
      //   $addFields: {
      //     totalDuration: {
      //       $sum: '$exercises.duration',
      //     },
      //   },
      // },
      {
        $unwind: "exercises"
      }
    ]);
    // let dbWorkout = await Workout.find().populate('exercises')
    // console.log("????????", dbWorkout)
    res.json(dbWorkout);
  } catch {

    res.status(500);
  }
  // .then((dbWorkout) => {
  //   console.log("Please output data", dbWorkout);
  //   res.json(dbWorkout);
  // })
  // .catch((err) => {
  //   console.log(err);
  //   res.json(err);
  // });
});

// GET request
router.get("/api/workouts/range", (req, res) => {
  console.log("HELLO 2");
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

// POST workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// PUT/Update workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findOneAndUpdate(params.id, { $push: { exercises: body } })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Export API routes
module.exports = router;
