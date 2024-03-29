


const object = {

    pushUpsExercise: {
        name: "Push-ups",
        tags: ["Chest", "Body mass", " Body core"],
        description: "Push-ups are a fundamental bodyweight exercises that targets the Chest, Body Core,Biceps and Triceps. ",
        videoLink: "https://www.example.com/push-up-video"


    },

    pullUpsExercise: {
        name: "Pull-ups",
        tags: ["back", "Body mass", " Body core"],
        description: "Pull-ups targets the back, arms and also targets the body core.",
        videoLink: ""

    },

    squatsExercise: {
        name: "squats",
        tags: ["quads", "glutes", " Body core", "harmstrings"],
        description: "Squats helps to build strong legs, strong core and also helps  creating endurance in the body by targeting almost the whole body. ",
        videoLink: ""

    },

    deadliftsExercise: {
        name: "deadlifts",
        tags: ["back", "Body mass", " Body core", "harmstrings"],
        description: "Deadlifts are exercises that are done to strenghten the back , they also target the whole body and makes you very strong. ",
        videoLink: ""

    }
}

object.absExercices = {
    name: "Six pack",
    tags: ["abs", "back", "core"]

}

console.log(object.absExercices)

const absExercices = object.absExercices.tags;

absExercices.push("oblique");


/*const exercisesElements = document.getElementById("exercises");

for (let exercises in object) {
    exercisesElements.innerHTML += `<h2>${object[exercises].name}</h2>`
    exercisesElements.innerHTML += `<li>${object[exercises].tags}</li>`
    exercisesElements.innerHTML += `<li>${object[exercises].description}</li>`
    console.log(exercisesElements);
}*/

const formElement = document.getElementById("input-form");
const divExercisesElement = document.getElementById("exercises");


const submitFormHandler = (event) => {
    event.preventDefault();


    const inputTextElement = document.getElementById("input-text");
    const newExercise = inputTextElement.value;

    divExercisesElement.innerHTML = newExercise;
    inputTextElement.value = " ";
    console.log();
}

formElement.addEventListener("submit", submitFormHandler); 
