// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var button1= document.querySelector("#noun1");
var button2= document.querySelector("#verb");
var button3= document.querySelector("#adjective");
var button4= document.querySelector("#noun2");
var button5= document.querySelector("#setting");
var button6= document.querySelector("#studentButton")

// Constants for p tag to display query selectors
var pTag= document.querySelector("body p");

// Constants for final buttons and p tags
var finalP= document.querySelector("#story");

// Variables for pre-defined arrays
var noun1 = ['the turkey', 'mom', 'dad', 'the dog', 'my teacher', 'the elephant', 'the cat'];
var verb = ['sat on', 'ate', 'danced with', 'saw', 'doesn’t like', 'kissed'];
var adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var noun2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var settings = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

// Variables for count to grab array elements
var randomText, selectedVerb, selectedAdjective, selectedNoun2, selectedSetting;



/* Event Listeners
-------------------------------------------------- */
studentButton.addEventListener('click', updateStudentInfo);
button1.addEventListener('click', noun1_on_click);
button2.addEventListener('click', verb_on_click);
button3.addEventListener('click', adjective_on_click);
button4.addEventListener('click', noun2_on_click);
button5.addEventListener('click', setting_on_click);

/* Functions
-------------------------------------------------- */
function updateStudentInfo() {
    const studentId = "1219275"; 
    const studentName = "ChingHoTong"; 
    document.getElementById('studentInfo').textContent = `Student ID: ${studentId}, Name: ${studentName}`;
}


function noun1_on_click() {
    const noun1Count = Math.floor(Math.random() * noun1.length);
    randomText = noun1[noun1Count];
    document.getElementById('choosenNoun1').textContent = randomText;
    document.body.style.backgroundColor = "red";
}

function verb_on_click() {
    const verbCount = Math.floor(Math.random() * verb.length);
    selectedVerb = verb[verbCount];
    document.getElementById('choosenVerb').textContent = selectedVerb;
    document.body.style.backgroundColor = "yellow";
}

function adjective_on_click() {
    const adjectivesCount = Math.floor(Math.random() * adjectives.length);
    selectedAdjective = adjectives[adjectivesCount];
    document.getElementById('choosenAdjective').textContent = selectedAdjective;
    document.body.style.backgroundColor = "blue";
}

function noun2_on_click() {
    const noun2Count = Math.floor(Math.random() * noun2.length);
    selectedNoun2 = noun2[noun2Count];
    document.getElementById('choosenNoun2').textContent = selectedNoun2;
    document.body.style.backgroundColor = "green";
}

function setting_on_click() {
    const settingsCount = Math.floor(Math.random() * settings.length);
    selectedSetting = settings[settingsCount];
    document.getElementById('choosenSetting').textContent = selectedSetting;
    document.body.style.backgroundColor = "purple";
}


// Concatenate the user story and display
function playback_on_click() {
    var userStory= randomText+" "+selectedVerb+" "+selectedAdjective+" "+selectedNoun2+" "+selectedSetting;
    finalP.textContent =userStory;
    document.body.style.backgroundColor = "pink";
}

// Grabbing random element from arrays, concatenate and display
function random_on_click() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    var newUserStory= randomText+" "+selectedVerb+" "+selectedAdjective+" "+selectedNoun2+" "+selectedSetting;
    finalP.textContent = newUserStory;
    document.body.style.backgroundColor = "yellow";
}

// Helper function to get a random word from an array
function getRandomWord(array) {

}


