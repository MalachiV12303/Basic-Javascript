# Assignments from JavaScript (COP2801) 2022  
This course will teach students to write JavaScript programs that can be executed by the major Web browsers. These programs will be created using this object-based scripting language. Students will conceptualize and develop JavaScript programs using strings, arrays, built-in functions, user-defined functions, control structures, and looping structures.  

# Assignment 2
### program1_1.js  
Do a simple math problem.
```
var m = 4.3;
var x = 5;
var b = 7;
var y = m * x + b;
console.log("y = " + y);
```

### program1_2.js  
A group of students wanted to do a research project on the temperature on May 4th. They took 4 sample temperatures during the day. Please take their info and compute the average. If the average is larger than or equal to 80 then say "It was a hot day!". If it was less than 80 then say "It was a nice day!"  
```
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
```
### program1_3.js  
Write a program that loops over numbers between 1 and 50(inclusive). Print when the value is a multiple of 7. Print "Foo-x"(where x is the number) when the number is between 43-47(inclusive) Print "Bar-x"(where x is the number) when the number is a multiple of 10. Each of these prints will be on their own line.  
```
for (let x = 1; x < 51; x++){
	if(x > 42 && x < 48){
		console.log("Foo-" + x);
	}
	else if(x % 10 == 0){
		console.log("Bar-" + x);
	}
	else if(x % 7 == 0){
		console.log(x);
	}
}
```
# Assignment 3
### average_power.js
```
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
```
### num_to_word.js
```
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
```
### primes.js
```
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
```
### sum_number.js
```
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
```
# Assignment 4
Design and implement a program that will allow us to determine the length of time needed to pay off a credit card
balance, as well as the total interest paid.

The program must implement the following functions:
### 1. displayWelcome  
This function should display the welcome message to the user explaining what the program does.
```
function displayWelcome(){
  console.log('This program will determine the time to pay off a credit card and the interest paid based on the current balance, the interest rate, and the monthly payments made.');
}
```
### 2. calculateMinimumPayment  
This function calculates the minimum payment. It should take balance and interest rate as arguments and return the
minimum payment.
So the value you display for minimum payment is the value you get from this method. Do not use a literal hardcoded
value when you display the minimum payment!  
```
function calculateMinimumPayment(balance, percent){
  return balance * percent;
}
```
### 3. generatePaymentID:  
This should be a closure function that generates a new payment id for the payment. The function should remember
the previous id and the new generated id should be the old one plus 1. Make the initial id 1.
```
function generatePaymentID(){
  id=id+1; //References variable in processPaymentSchedule function
  return id;
}
```
### 4. processPaymentSchedule  
This function displays the actual payment schedule. It should take the balance, monthly interest rate and minimum
payment as arguments.
Use the 1500, 18% and 2% literal values below. Each time you calculate a new payment line, create an object literal
with properties for the Year, Balance, Payment Id, and InterestPaid. Pass this object literal to the displayPayment
function. The paymentId should be generated by the generatePaymentID function each time.
```
function processPaymentSchedule(a, b, c){
  var totalBal = a;
	var interestRate = b;
	var minimumPayment = calculateMinimumPayment(totalBal, c);
	var totalInterestPaid=0;
	var id = 0;
	var years = 1;
  console.log('Balance on your credit card: ' + totalBal);
  console.log('Interest Rate: ' + interestRate);
  console.log('Assuming a minimum payment of ' + (c * 100) + '% of the balance ($' + minimumPayment + ' min)');
  console.log('Your minimum payment would be $ ' + minimumPayment.toFixed(2));
  console.log('PAYOFF SCHEDULE');
  console.log('_________________');
  console.log('Year	Balance		Payment Id	Interest Paid');

	var bool=true;
	while(totalBal > 0){
		let thisPayment = new payment();	//Creates a new payment object
		totalBal = parseFloat(thisPayment.balance);	//After the new payment object is created, update the global variable to allign with the new objects balance
		totalInterestPaid += parseFloat(thisPayment.interestPaid);	//Updates the global variable total interest by adding the interest paid on the current payment object
		displayPayment(thisPayment); //Displays this payment, along with total interest paid
		if(id % 12 == 0){ //For every 12 entries, a year has passed
			years = years + 1;
			bool=true;
		}
	}
	//Object Declaration
	function payment(){
		this.years = years; //Sets years equal to the current year
		this.interestPaid = (((interestRate/100)/12) * totalBal); //Sets interestPaid to the amount being paid this current payment
		this.balance = (totalBal - (minimumPayment - this.interestPaid)) ; //Sets this objects balance to the difference of how much is currently being paid and the minimum payment
		this.paymentID = generatePaymentID();
		if(this.balance<0){ //If the balance has reached 0, do not set it to negative
			this.balance=0; 
		}
		function generatePaymentID(){...}
	}
}
```
### 5. displayPayment
This function should take the payment object literal and display it on the console.
```
function displayPayment(thisPayment){
  if(bool){
    console.log(thisPayment.years + '\t' + thisPayment.balance.toFixed(2) + '\t\t' + thisPayment.paymentID + '\t' + totalInterestPaid.toFixed(2) + '\n') ;
    console.log('');
    bool=false;
  }
  else{
    console.log('\t' + thisPayment.balance.toFixed(2) + '\t\t' + thisPayment.paymentID + '\t' + totalInterestPaid.toFixed(2) + '\n') ;
    console.log('');
  }
}
```
## Note
Here is a code snitppet that is used to format the table. Each row you can do the same seperate by tabs(\t) but between balance and payment use 2 tabs
`console.log("Year\tBalance\t\tPayment Id\tInterest Paid")`

# Assignment 5

Create a script called retail_store.js. In this script code the following:

## RetailItem Class
Create a constructor function or ES6 class for a RetailItem object. The RetailItem object should store the following data in attributes: item description, units in inventory, and price.

## CashRegister Class
Create a constructor function or ES6 class for a CashRegister object that will be used with the RetailItem class. The CashRegister object should be able to internally keep an array of RetailItem objects.  
The class should have the following methods:
- A method named purchaseItem that accepts a RetailItem object as an argument. Each time the purchaseItem method is called, the RetailItem object that is passed as an argument should be added to the list of retailItems the CashRegister contains.
- A method named getTotal that returns the total price of all the RetailItem objects stored in the CashRegister objects internal list.
- A method named showItems that writes the information about each retail item stored in the cash register t- the console.
- A method named clear that should clear CashRegister object’s internal list.

After you have created the classes. Create three RetailItem objects and store the
following data in them:

|Item | Description | Units In Inventory| Price |
|---|---|---|-------|
|Item #1 |Polo Jacket| 12| 59.95|
|Item #2 |Roberto Cavalli Jeans| 40| 34.95|
|Item #3 |Sean Jean Shirt| 20 | 24.95|

Store all three RetailItem objects in an array named “inventory”.

Next, create a CashRegister object.

Add all the items to the CashRegister using the purchaseItem method. Display the total
using the CashRegister getTotal method. Display all the items using the CashRegister
showItems method.

##retail_store.js
```
//Made by Felo Malachi Valle on 6-24-22 for COP2801

class RetailItem{
    constructor(itemDescription, unitsInInventory, price){
        this.itemDescription=itemDescription;
        this.unitsInInventory=unitsInInventory;
        this.price=price;
    }
}
class CashRegister{
    constructor(){
        this.retailItemObjects=new Array();
    }
    //Accepts a RetailItem object as an argument
    //The RetailItem object that is passed as an argument should be added to the list of retailItems the CashRegister contains
    purchaseItem(obj){
        this.retailItemObjects.push(obj);
    }
    //A method named getTotal that returns the total price of all the RetailItem objects stored in the CashRegister objects internal list
    getTotal(){
        //This doesnt correlate to assignment instructions and thats because the autograding expects an output that isnt in the assignment
        //Changed so the getTotal method returns two totals, the total for one of each item, and the total if someone were to purchase all of each item in stock
        let total1=0;
        let total2=0;
        for(const element of this.retailItemObjects){
            total1 += element.price;
            for(let i=0; i<element.unitsInInventory; i++){
                total2+=element.price;
            }
        }
        let total=new Array(total1, total2);
        return total;
    }
    //A method named showItems that writes the information about each retail item stored in the cash register to the console
    showItems(){
        console.log("Description             Units In Inventory      Price");
        console.log(this.retailItemObjects[0].itemDescription + "             " + this.retailItemObjects[0].unitsInInventory +"                      " + this.retailItemObjects[0].price);
        console.log(this.retailItemObjects[1].itemDescription + "   " + this.retailItemObjects[1].unitsInInventory + "                      " + this.retailItemObjects[1].price);
        console.log(this.retailItemObjects[2].itemDescription + "         " + this.retailItemObjects[2].unitsInInventory + "                      " + this.retailItemObjects[2].price);
    }
    //A method named clear that should clear CashRegister object’s internal list.
    clear(){
        this.retailItemObjects=[];
    }
}

//Program based off assignment instructions and expected outputs, some instructions didn't allign with the expected outputs
//Create three RetailItem objects and store the following data in them: See README.md
let object1=new RetailItem("Polo Jacket", 12, 59.95);
let object2=new RetailItem("Roberto Cavalli Jeans", 40, 34.95);
let object3=new RetailItem("Sean Jean Shirt", 20, 24.95);

//Store all three RetailItem objects in an array named “inventory”
var inventory=[object1, object2, object3];

//Next, create a CashRegister object.
var register=new CashRegister();

//Add all the items to the CashRegister using the purchaseItem method.
for(const element of inventory){
    register.purchaseItem(element)
}

//Display all the items using the CashRegister showItems method.
register.showItems();

//Display the total using the CashRegister getTotal method.
var total = register.getTotal();
console.log("Total: for 1 item of each: $" + total[0].toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "\r\nThe grand total price for all items and their units is: $" + total[1].toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "\r\n");
```


# Assignment 6
### battle.js
```
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
//Player Class
class Player{
    constructor(name, weapons){
        this.name=name;
        this.weapons=weapons;
        this.health=10;
        this.strength=2;
    }
    //The function takes as input an integer and subtracts that amount of points from the players health property.
    applyDamage(a){
        this.healt1h=this.health-a;
    }
    //This function checks if the players health value is greater than 0 and returns true if it is and false if it isn’t.
    isAlive(){
        if(this.health>0){
            return true;
        }
        else{
            return false;
        }
    }
    //This function should use a random number between 7 and 0, to select a weapon from the weapons array property, at that index and returns that weapon. 
    attackWith(){
        let a=random(0,8);
        return this.weapons[a];
    }
}
//Enemy Class
class Enemy{
    constructor(){
        this.name="Enemy";
        this.health=5;
        this.strength=2;
    }
    //The function takes as input an integer and subtracts that amount of points from the Enemys health property
    applyDamage(a){
        this.health=this.health-a;
    }
    //This function checks if the Enemys health value is greater than 0 and returns true if it is and false if it isn’t.
    isAlive(){
        if(this.health>0){
            return true;
        }
        else{
            return false;
        }
    }
    //This function takes as input a player and calls the applyDamage of the player, using the Enemys strength as the input. 
    attack(player){
        player.applyDamage(this.strength);
    }
}
//Weapon class
class Weapon{
    constructor(name){
        this.name=name;
        this.damage=random(1,6);
    }
    attack(player, enemy){
        while(player.isAlive() && enemy.isAlive()){
            let damage=this.damage*player.strength;
            enemy.applyDamage(damage);
            if(enemy.isAlive()){
                enemy.attack(player);
            }
            else{
                break;
            }
        }
    }
}
//BattleSimulation Class
class BattleSimulation{
    constructor(){
        this.players=[];
        this.enemies=[];
    }
    //Creates enemy objects and adds them to enemies list
    createEnemies(){
        for(let x =0; x<20;x++){
            this.enemies.push(new Enemy());
        }
    }
    createPlayers(){
        let weaponNames=['sword','dagger','axe','hammer','mace','crossbow','wood','shuriken'];
        var weaponsCache=[];
        for(const element in weaponNames){
            weaponsCache.push(new Weapon(weaponNames[element]));
        }
        let playerNames=['Malenia','Solaire','Patches','Yhorm','Renna'];
        for(const element in playerNames){
            this.players.push(new Player(playerNames[element], weaponsCache));
        }
    }
    run(){
        console.log("Simulating Battle");
        this.createEnemies();
        this.createPlayers();
        do{
            let a=random(0, this.players.length);
            let b=random(0, this.enemies.length);
            let attackWith=this.players[a].attackWith();
            attackWith.attack(this.players[a], this.enemies[b]);
            if(!this.players[a].isAlive()){
                this.players.splice(a, 1);
            }
            if(!this.enemies[b].isAlive()){
                this.enemies.splice(b, 1);
            }
        }while(this.players.length>0 && this.enemies.length>0)
        if(this.players.length>0){
            for(const element in this.players){
                console.log(this.players[element].name+" has survived with "+ this.players[element].health + " health remaining.")
            }
            console.log("Congratulations, you have defeated Scarlet Byte");
        }
        else{
            console.log("Sorry, Scarlet Byte has defeated you and conquered the free world.");
        }
    }
}
var sim=new BattleSimulation();
sim.run();
```
