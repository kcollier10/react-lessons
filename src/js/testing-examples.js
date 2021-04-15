// these console.logs are messy - the expect function helps us clean those up and avoid writing console.log each time
// console.log(2 === add(1 + 1));
// console.log(3 === add(1 + 2));
// console.log(3 === add(-1 + 4));
expect(2, add(1,1));
expect(3, add(1,2));
expect(10, add(-15,5));
expect(900, add(1000, "-100"));
expect(25, add("30", "-5"));
expect(16, sq(4));
expect(0, sq(0));
expect(36, sq(-6));
expect("100", sq(10));
expect(100, sq("10"));
// multiplication operator IS doing behind-the-scenes stuff, but we don't want to rely on that
expect("kristen", name("kristen"));
expect(16, sumOfSquares(4, 0));
expect(29, sumOfSquares(5, 2));

// if we return 2 here, the test is not actually covering all bases, nor is it dynamic for others
// function add(x, y) {
//     return 2;
// }

function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function sq(num) {
    return parseInt(num * num);
    // or parseInt(n) * parseInt(n);
}

function name(personName) {
    return personName;
}
// looks strikingly similar to getters and setters

function sumOfSquares(num1, num2) {
    return add(sq(num1), sq(num2));
}
// refactored this to use previous functions, rather than doing parseInt() on each number again
// refactored again to use add() function
// we know that code for sq() passed, so why not use it??
// code reusability helps with number of lines

function expect (expected, actual) {
    console.log(expected + "==" + actual, expected === actual);
}

// HOW CAN I BREAK MY CODE?? the magic question
// what if a user puts in a string instead of a number?
expect(4, add(1, "3"));
// let's use a .parseInt() in our add function to account for these errors EARLY - this is where that speed in development starts
// adding the parseInt will account for strings, and thus, we have added extra coverage!




