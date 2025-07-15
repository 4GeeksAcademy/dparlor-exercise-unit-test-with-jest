// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


const { fromDollarToYen } = require('./app.js');

test('convert dollars to yen', () => {
    let yen = 1 / 1.07 * 156.5;
    let DollartoYen = 146.26
    //let Euro = 1.07
    //let Yen = 156.5
    //let Pound = 0.87

    //Dollar * Euro / Yen
    
    expect(yen).toBeCloseTo(146.26, 2);
});

