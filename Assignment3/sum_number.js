//Created by Felo Malachi Valle
var num = "2155";
var sum = sumNumber(num);
console.log('The sum of all the digits in ' + num + ' is ' + sum);

function sumNumber(a){
	let sum = 0;
	for(const b of a){
		sum += parseInt(b);
	}
	return sum;
}