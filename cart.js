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

//write a CALLBACK
//Use reduce array method
//Calculate the sum of all the food

const total = cart.reduce((acc, curr) => acc + curr.price, 0 )
//console.log(total);

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
function calcFinalPrice(cartTotal, couponValue, tax) {
    let finalPrice = (cartTotal * tax) + cartTotal - couponValue;
return (finalPrice)
}
//console.log(calcFinalPrice(12.99, 5, .06))

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
    TEXT ANSWER HERE

    Customer Name = This will be the customer name, Want to be able to see data
        specific to each customer. This will be a string, this is a string because
        I want it to be letters like "First name Last name" 
    Customer visits = This will be how many times the customer has visited our store.
        This will be used to help with the average $ spent per visit, and to track if customers
        return to our store. This will be a number. I want to view how many times the customer
        visited as a number
    Total $ spent = this will be how much money the customer has spent as a sum of all visits combined.
        This will help us track who is our most loyal customers and if they like the products we offer.
        This will be a number, I want to see the total dollars spent by each customer as a number
    AVG $ spent =  this will be the average dollars each customer has spent per visit. This sill help
        with projections, trends, and play a big factor in business decisions. 
    Loyalty Points = this will be how many loyalty points the customer has earned. The formula for loyalty
        points is 1 point for every $10 spent. This is to reward customer for being loyal to us.
        This will be a number. We want to see how many loyalty points the customer currently has as a number

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerProfile = {
    customer_name: "Derek Pistorius",
    customer_visits: 14,
    totalDollarsSpent: 450,
    avgDollarsSpent: 32.14,
    loyaltyPoints: 3,
}
 console.log(customerProfile)