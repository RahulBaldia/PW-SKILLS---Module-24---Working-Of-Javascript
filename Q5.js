{
    // Attempt to log the value of `x` before it is initialized
    try {
        console.log(x); // This will throw a ReferenceError
    } catch (error) {
        console.error("Error:", error.message); // ReferenceError: Cannot access 'x' before initialization
    }

    let x = 10; // `x` is declared and initialized here
    
    console.log(x); // This will log 10, after initialization
}
