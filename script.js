function startWorkout() {
  const message = document.getElementById("message");
  message.textContent = "ARISE workout started! 🔥";
}

function createWorkout() {
  const workoutList = document.getElementById("workout-list");

  workoutList.innerHTML = `
    <div class="exercise-card">
      <h3>🔥 ARISE Beginner Workout</h3>
      <p>Push-ups — 20 reps</p>
      <p>Squats — 30 reps</p>
      <p>Plank — 60 seconds</p>
      <p>Mountain Climbers — 30 reps</p>
    </div>
  `;
}
