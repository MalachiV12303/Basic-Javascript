//Made by Felo Malachi Valle for COP2801 on 6-16-22
function displayWelcome(){
	console.log('This program will determine the time to pay off a credit card and the interest paid based on the current balance, the interest rate, and the monthly payments made.');
    
}
function processPaymentSchedule(a, b, c){
	var totalBal = a;											// a is '1500' total balance
	var interestRate = b;										// b is '18' interest rate
	var minimumPayment = calculateMinimumPayment(totalBal, c);	// c is '0.02' percent for minimum payment
	var totalInterestPaid=0;									//Used for tracking the total interest paid
	var id = 0;													//PaymentID counter
	var years = 1;												//Years counter
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
	//Display payment function nested inside of processPaymentSchedule so it has access to totalInterestPaid
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
	//Calculate minimum payment function
	function calculateMinimumPayment(balance, percent){
		return balance * percent;
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
		function generatePaymentID(){
			id=id+1; //References variable in processPaymentSchedule function
			return id;
		}
	}
}
displayWelcome();
processPaymentSchedule(1500, 18, 0.02);
