///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
let summedPrice = cart.reduce((accumulator, current) => {
    return accumulator + current.price;
},0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
let calcFinalPrice = (cartTotal, couponValue, tax) => {
    return cartTotal * (1 + tax) - couponValue
}
// console.log(calcFinalPrice(100,20,.06))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
 customer should be an object associated with a set of key/value pairs. "Name" (string) is how they will be addressed on the website and receipts/emails, "ID" (number) will be a unique ID used internally by the website/app, (number)  will be used to check and display which stores are closest to the customer, "Address" (string) will be needed if the customer would like their items shipped to them, "City" (string) and "State" (string) will also be needed for shipping.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {"Name": "Michael", "ID": 123456, "ZipCode": 48067, "Address": "27054 Woodward Ave", "City": "Royal Oak", "State": "MI"}
// console.log(customer)
// console.log(customer.ID)
// console.log(customer.Address)