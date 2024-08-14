
try {
    console.log(multiplyNumbers(5, 3)); 
} catch (error) {
    console.error("Error:", error.message); 
}


const multiplyNumbers = function (a, b) {
    return a * b;
};


console.log(multiplyNumbers(5, 3)); // Outputs: 15
