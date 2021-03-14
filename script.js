/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakes = 0;

var timeLeft = 0;
var interval;

function startGame() {
  //initialize game variables
  clueHoldTime = 1000;
  progress = 0;
  gamePlaying = true;
  mistakes = 0;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  randomizePattern();
  console.log(pattern);
  playClueSequence();
}

function randomizePattern() {
  pattern = [];
  
  for (let i=0;i<8;i++){
    pattern.push(Math.floor(Math.random() * 6 + 1));
  }
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  clearInterval(interval);
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congrats! You beat the game.");
}

function decreaseTimer() {
  timeLeft--;
  document.getElementById("timer").innerHTML = "Time Remaining: " + timeLeft;
  if (timeLeft <= 0) {
    clearInterval(interval);
    alert("you ran out of time");
    if (mistakes != 2) {
      mistakes++;
      alert("you have " + (3 - mistakes) + " tries left")
      playClueSequence();
    } else {
      loseGame();
    }
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  if (btn != pattern[guessCounter]) {
    clearInterval(interval);
    if (mistakes == 2) {
      loseGame();
    } else {
      mistakes++;
      alert("Incorrect! you have " + (3 - mistakes) + " tries left")
      playClueSequence();
    }
  } else if (guessCounter != progress) {
    guessCounter++;
  } else if (progress != pattern.length - 1) {
    clearInterval(interval);
    progress++;
    clueHoldTime -= 85;
    playClueSequence();
  } else {
    clearInterval(interval);
    winGame();
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  timeLeft = 6 + progress * 2;
  interval = setInterval(decreaseTimer, 1000)
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 420,
  2: 240,
  3: 360,
  4: 540,
  5: 300,
  6: 480
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
