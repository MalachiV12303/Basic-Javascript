//Created by Felo Malachi Valle
var volts = new Array();
var amps = new Array();
var power = new Array();
console.log('Hour  Current  Voltage  Power');
//This for loop adds values to arrays and prints outputs
for(let i = 0; i < 24; i++){
	let output = new Array();
	volts.push(getRandomInt(5,21));
	amps.push(getRandomInt(1,11));
	if(i + 1 > 9){
		output.push(i + 1 + '  ');
	}
	else{
		output.push(i + 1  + '   ');
	}
	if(amps[i] > 9){
		output.push(amps[i] + '     ');
	}
	else{
		output.push(amps[i] + '      ');
	}
	if(volts[i] > 9){
		output.push(volts[i] + '     ');
	}
	else{
		output.push(volts[i] + '      ');
	}
	power.push(volts[i] * amps[i]);
	output.push(power[i]);
	console.log(output.join('  '));
}
//Gets and prints average power consumption
var average = 0;
for(const a of power){
	average += a;
}
average = (average / 24).toFixed(2);
console.log('Average Power: ' + average + ' watts');

//Used for generating random number, b exclusive
function getRandomInt(a, b) {
 	a = Math.ceil(a);
 	b = Math.floor(b);
 	return Math.floor(Math.random() * (b - a) + a);
 }