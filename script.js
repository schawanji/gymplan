const pushExercise = {
    name: "Push-ups",
    tags: ["Chest", "Body mass", " Body core"],
    description: "Push-ups are a fundamental bodyweight exercises that targets the Chest, Body Core,Biceps and Triceps. ",
    videoLink: "https://www.example.com/push-up-video"

}

const exerciseElements = document.getElementById("workouts");

exerciseElements.innerHTML = `${JSON.stringify(pushExercise)}`;

