var readlineSync = require('readline-sync');


quest1 = {
  question: "What is your name? ",
}
quest2 = {
  question: "Where do I Live? ",
  answer: "Pilani",
}
quest3 = {
  question: "What is my favourite superhero? Hint: DC Hero ",
  answer: "Flash",
}
quest4 = {
  question: "What is my favourite color?",
  answer: "Purple",
}
quest5 = {
  question:"What is my favourite number?",
  answer:"7",
}
quest6 = {
  question:"Am I left handed?",
  answer:"yes",
}

let score = 0;

function firstQues(){
questionVar = quest1.question;
  var askQuestion = readlineSync.question(questionVar);
  console.log("Hello "+askQuestion);
}

function secondQues(){
  questionVar = quest2.question;
  var askQuestion = readlineSync.question(questionVar);
  if(askQuestion===quest2.answer){
    console.log("Correct Answer! ");
    score +=1;
    console.log("You got one point.");
  }else {
    console.log("Wrong Answer.");
  }
}

function thirdQues(){
  questionVar = quest3.question;
  var askQuestion = readlineSync.question(questionVar);
  if(askQuestion===quest3.answer){
    console.log("Correct Answer! You got one point");
    score +=1;
  }else{
    console.log("Wrong Answer.")
  }
}

function fourQues(){
  questionVar = quest4.question;
  var askQuestion = readlineSync.question(questionVar);
  if(askQuestion===quest4.answer){
    console.log("Correct Answer! ");
    score +=1;
    console.log("You got one point.");
  }else {
    console.log("Wrong Answer.");
  }
}

function fiveQues(){
  questionVar = quest5.question;
  var askQuestion = readlineSync.question(questionVar);
  if(askQuestion===quest5.answer){
    console.log("Correct Answer! ");
    score +=1;
    console.log("You got one point.");
  }else {
    console.log("Wrong Answer.");
  }
}

function sixQues(){
  questionVar = quest6.question;
  var askQuestion = readlineSync.question(questionVar);
  if(askQuestion===quest6.answer){
    console.log("Correct Answer! ");
    score +=1;
    console.log("You got one point.");
  }else {
    console.log("Wrong Answer.");
  }
}





var highScore = [5];
var quiz1 = firstQues();
var quiz2 = secondQues();
var quiz3 = thirdQues();
var quiz4 = fourQues();
var quiz5 = fiveQues();
var quiz6 = sixQues();

if(score ===highScore){
  console.log("You have reached highest score.");
}
if(score <highScore){
  console.log("Your score was lower than highest score recorded.");
}
if(score > highScore){
  console.log("Wow! You have created new record");
}

console.log("\nTotal: "+score+ " points");
console.log("Highest Score on leaderboard is "+highScore);
