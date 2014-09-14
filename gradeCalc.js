var type  = [];
var weight   = [];
var score = [];

var typeInput  = document.getElementById("Label");
var weightInput   = document.getElementById("Weight");
var scoreInput = document.getElementById("Score");

var messageBox  = document.getElementById("display");

function insert ( ) {
 type.push( typeInput.value );
 weight.push( weightInput.value );
 score.push( scoreInput.value );
  
 clearAndShow();
}

function clearAndShow () {
  // Clear our fields
  typeInput.value = "";
  weightInput.value = "";
  scoreInput.value = "";
  
  // Show our output
  messageBox.innerHTML = "";
  
  messageBox.innerHTML += "Label: " + type.join(", ") + "<br/>";
  messageBox.innerHTML += "Weight: " + weight.join(", ") + "<br/>";
  messageBox.innerHTML += "Score: " + score.join(", ");
}

function calculate () {
  var target = 90;
    var sum = 0;
    for (var i = 0; i < weight.length; i++) {
        sum += weight[i] * score[i];
    }
    var result = (target - sum) / 0.5;

    messageBox.innerHTML = result;
}
