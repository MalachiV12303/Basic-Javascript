//Created by Felo Malachi Valle
var input = 150;
var primes = sieveOfErato(input);
console.log('Prime numbers between 0 and ' + input + ' are ' + primes.join(', '));

function sieveOfErato(n){ //This function returns array of prime numbers between 0 and n
	let arr = new Array();
	let bools = new Array();
	let primes = new Array();
	//Populates arrays
	for(let i = 2; i < n + 1; i++){
		arr.push(i);
		bools.push(true);
	}
	let length = arr.length; //I believe this is more efficient to reduce calls to the length function in the following loops
	//Iterates over each element in arr, if the element is not 'marked', then it marks all its multiples in the rest of the list
	for(let i = 0; i < length; i++){ 
		if(bools[i] == true){
			for(let h = i + 1; h < length; h++){
				if(arr[h] % arr[i] == 0){
					bools[h] = false;
				}
			}
		}
	}
	//Populates the array of prime numbers with only numbers that are not 'marked'
	for(let i = 0; i < length; i++){
		if(bools[i]){
			primes.push(arr[i]);
		}
	}
	return primes;
}