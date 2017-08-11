
//#4
var numArray = [ 1.2, 3.4, 4.6, 5.7, 6.9];
//#5
var newArray =[];
for(var i = 0; i < numArray.length; i++) {
	var x = Math.round(numArray[i]);
	newArray.push(x);
}
console.log(newArray);
//#6
var newArrayTwo = [];
function randomNumbers() {
	var ran = Math.ceil(Math.random() * 100);
	newArrayTwo.push(ran);
};
for (var i = 0; i < 10; i++) {
	randomNumbers();
};
console.log(newArrayTwo);

//#7
function newDate() {
	var date = new Date();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
//#8
	var currentTime = hour + " : " + minute + " : " + second + " : ";
	console.log(currentTime);

//#9
	var day = today.getDate();
	var month = today.getMonth() + 1;
	var year = today.getFullYear();

	var currentDate = day + " / " + month + " / " + year + " / "; 
	console.log(currentDate);
};
//#11
setTimeout(function()) {
	newDate();
}, 1000;

function domEventListener () {
	var today = new Date();
	var year = today.getFullYear();

	document.getElementById("displayYearEl").textContent = year;
	ocument.getElementById("displayYear").addEventListener("click", domEventListener, false);
}

