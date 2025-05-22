//Created by Felo Malachi Valle
var temp1 = 72; //Morning temperature
var temp2 = 85; //Lunch temperature
var temp3 = 79; //Dinner temperature
var temp4 = 75; //Night temperature
try {
	getAverageTemperature(temp1, temp2, temp3, temp4);
}
catch(error){
	console.log(error);
}
function getAverageTemperature(a, b, c, d){
	let average = (a + b + c + d) / 4;
	console.log("The daily average is : " + average);
	if (average >= 80) {
		console.log("It was a hot day!");
	}
	else if (average < 80 && average > 0) {
		console.log("It was a nice day!");
	}
	else{
		throw new Error("Average " + average + " is less than 0"); //Throws an error if average is less than 0
	}
}
