// We declare the function with the exact name "fromEuroToDollar"
const fromDollarToYen = function() {
    // Convert the given valueInEuro to dollars
    
    let total = 1 / 1.07 * 156.5;
    // return the dollar value
    return total;
}

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromDollarToYen }