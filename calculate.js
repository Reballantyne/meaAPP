var type  = new Array();
var weight   = new Array();
var score = new Array();

var goal = document.getElementById("goal");
var typeInput  = document.getElementById("label");
var weightInput   = document.getElementById("weight");
var scoreInput = document.getElementById("score");
var messageBox2 = document.getElementById("display2");
var messageBox  = document.getElementById("display");

function insert ( ) {

 if (typeInput.value < 1 || weightInput.value < 1 || scoreInput.value < 1) {
 	alert("Please make sure to enter in percentages!");
 	return;
 }

 if (typeInput.value > 100 || weightInput.value > 100 || scoreInput.value > 100) {
 	alert("Please make sure to enter in percentages (0~100)!");
 	return;
 }

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
  messageBox.innerHTML = "Your goal is " + goal.value + "." + "<br/>";
  
  for (var i = 0; i < type.length; i++) {
  	messageBox.innerHTML += type[i] + ": worth " + weight[i] + "%, you got " + score[i] + "%" + "<br/>";
  }
  
  //messageBox.innerHTML += "Type: " + type.join(", ") + "<br/>";
  //messageBox.innerHTML += "Weight: " + weight.join(", ") + "<br/>";
  //messageBox.innerHTML += "Score: " + score.join(", ");
}

function calculate () {
    var target = goal.value;
	var sum = 0;
	var weightTotal = 0;
	for (var i = 0; i < weight.length; i++) {
		sum += weight[i] * score[i] / 100;
		weightTotal += weight[i] / 100;
	}
	var result = (target - sum) / (1 - weightTotal);


	if (result <= 0) {
		messageBox2.innerHTML = "You need a 0% on the final to get " + goal.value + "% in the class!";
	}
	else {
		messageBox2.innerHTML = "You need at least " + result + "% on the final to get " + goal.value + "% in the class!";
	}

	if (result <= 0) {
		alert("Well done, you are guarrenteed an A!");
	}

	if (result > 100) {
		alert("Sorry, it's impossible for you to get an A...");
	}
	
}
