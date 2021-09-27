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



var highScore = [2];
var quiz1 = firstQues();
var quiz2 = secondQues();
var quiz3 = thirdQues();

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
console.log("Highest Score is "+highScore);
