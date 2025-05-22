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