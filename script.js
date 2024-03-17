const pushUpsExercise = {
    name: "Push-ups",
    tags: ["Chest", "Body mass", " Body core"],
    description: "Push-ups are a fundamental bodyweight exercises that targets the Chest, Body Core,Biceps and Triceps. ",
    videoLink: "https://www.example.com/push-up-video"


}
const pullUpsExercise = {
    name: "Pull-ups",
    tags: ["back", "Body mass", " Body core"],
    description: "Pull-ups targets the back, arms and also targets the body core.",
    videoLink: ""

}
const squatsExercise = {
    name: "squats",
    tags: ["quads", "glutes", " Body core","harmstrings"],
    description: "Squats helps to build strong legs, strong core and also helps  creating endurance in the body by targeting almost the whole body. ",
    videoLink: ""

}
const deadliftsExercise = {
    name: "deadlifts",
    tags: ["back", "Body mass", " Body core", "harmstrings"],
    description: "Deadlifts are exercises that are done to strenghten the back , they also target the whole body and makes you very strong. ",
    videoLink: ""

}

const exerciseElements = document.getElementById("workouts");

exerciseElements.innerHTML = `${JSON.stringify(pushExercise)}`;

