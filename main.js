window.addEventListener('load', init);

//Available Levels
const levels = {
    easy:5,
    medium:3,
    hard:2
};

//To change level
let currentLevel = levels.easy;

//Globals
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input')
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message')
const seconds = document.querySelector('#seconds')

const words = [
    'siblings',
    'echo',
    'investigation',
    'symptom',
    'space',
    'master',
    'definition',
    'deterrent',
    'horrendous',
    'nutrition',
    'javascript',
    'establishment',
    'developer',
    'joke',
    'cocktail',
    'stubborn',
    'cocktail',
    'discriminate',
    'interrogate',
    'independent',
    'detach',
    'constitution',
    'environmental',
    'degradation',
    'encyclopedia',
    'intimacy',
    'partnership',
    'janitor',
    'senator',
    'github'
];

//Initialize game
function init(){
    //Load word from array
    showWord(words);
    //Start matching on word input
    wordInput.addEventListener('input', startMatch)
    //call coundown every second
    setInterval(countdown, 1000);
    //Check game status
    setInterval(checkStatus, 50)

}
//Start match
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    scoreDisplay.innerHTML =score;
}
//Match currentWord to word Input
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
       message.innerHTML = 'Correct!!!'
       return true;
    }else{
        message.innerHTML ='';
        return false;
    }
}

//pick and show random words
function showWord(words){
    //Generate random arrray index
    const randIndex = Math.floor(Math.random() * words.length);
    //Output random word
    currentWord.innerHTML =words[randIndex];
}

//Coundown timer
function countdown(){
    if(time>0){
        time--;

    }else if (time === 0){
        //Game is over
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
}
//check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!!!';
        score = 0;
    }
}
