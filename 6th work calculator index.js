var h1 = document.getElementById("heading");

function handleclick(value) {
    if (h1.innerHTML == 0) {
        h1.innerHTML = value;
    } else {
        h1.innerHTML += value;
    }
}

function sum() {
    h1.innerHTML = eval(h1.innerHTML);
}

// Function to reset the calculator
function resetCalculator() {
    // Clear the display
    h1.innerHTML = 0;
    
    // Reset internal variables if needed
    // currentInput = ""; // Optional, if you use these variables elsewhere
    // result = 0; // Optional, if you use these variables elsewhere
    
    // Provide feedback in the console
    console.log("Calculator reset! Current Input:", currentInput, "Result:", result);
}

// Add event listener to the AC button
document.getElementById("ac-button").onclick = resetCalculator;
