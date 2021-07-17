# MBC18_Workout-Tracker

Monash Bootcamp Assignment 18 - Workout Tracker (noSQL)

### About this project

Monash Bootcamp starter code was enhanced to create this application.

The Workout Tracker assists a consumer to reach their fitness goals more quickly by tracking their progress. The application provides capability to log multiple exercises in a workout on a given day, track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, it also allows the user to record the distance travelled.

### Project Links

This application is live via Heroku
https://git.heroku.com/vvnnz-workout-tracker.git

### Screen layout and Design

The following image depicts the web application's appearance and functionality:
(![Landing Page](https://github.com/vvnnzar/MBC18_Workout-Tracker/blob/main/public/screen%20design/Landing%20Page.png))
(![Fitness Tracker](https://github.com/vvnnzar/MBC18_Workout-Tracker/blob/main/public/screen%20design/Fitness%20Tracker.png))


### Acknowledgements

This development was completed in part using the following online references:

- Monash Bootcamp Collateral

### Installation

### Pre requisites

To view and modify code you will require installation of:

- Code editor software such as Visual Code Studio.
- Node
- Robo3T or Mongo DB Compass

### Getting Started

1. Install GITHib on your PC
2. Create a local project repository
3. Clone project repository using git clone
4. Initialise the project using command: git init
5. Install necessary dependencies, run the command: npm i
6. Run seed file using npm run seed
7. Invoke the application with command:note server.js. This will start localhost server on PORT 3000
8. Open browser and type http://localhost:3000/ to run this application on your local machine.

### Tests

## Acceptance Criteria

1. Application loads without error
2. Landing page provides capability to create a new workout or continue last workout.
3. User can add an exercise to the most recent/new workout plan.
4. User can view the combined weight of multiple exercises from the past seven workouts on the `stats` page.
5. User can view the total duration of each workout from the past seven workouts on the `stats` page.

### Code Deployment

To update the project with latest code:

1. Run command git status to ensure no conflict of changes
2. Run command git pull to get latest code
3. Stage files for checkin using command git add .
4. Commit files using command git commit -m "My commit message"
5. Push files to gitlab main branch using command git push

### Technologies Used

- Express.js
- Node.js
- MongoDb
- Mongoose

### Versioning

- Initial Release

### License

- MIT
