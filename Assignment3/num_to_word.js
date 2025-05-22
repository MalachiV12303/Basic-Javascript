//Created by Felo Malachi Valle
var input = 932;
numToWord(input);
function numToWord(a){
	a = a.toString();
	let words = new Array('zero','one','two','three','four','five','six','seven','eight','nine');
	let nums = new Array(0,1,2,3,4,5,6,7,8,9);
	let out = new Array();
	for(const b of a){
		for(let i = 0; i < nums.length; i++){
			if(b == nums[i]){
				out.push(words[i]);
			}
		}
		
	}
	let output = out.join(' ');
	console.log('An input of ' + input + ' has been converted into '+ output);
}
