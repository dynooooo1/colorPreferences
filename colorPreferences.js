// Initialize an array to store favorite colors
let favoriteColors = [];

// Function to prompt the user for a color and add it to the array
function addColor() {
    // Prompt the user to enter a color
    let color = prompt("Enter a color you like:");

    // Check if the input is valid (not null or empty)
    if (color) {
        // Add the new color to the array
        favoriteColors.push(color.trim());
        
        // Print the updated array to the console
        console.log("Updated favorite colors: ", favoriteColors);
    } else {
        console.log("No color entered. Please try again.");
    }
}

// Allow the user to enter three initial colors
console.log("Let's add your favorite colors!");

// Loop to get three colors from the user
for (let i = 0; i < 3; i++) {
    addColor();
}

// Ask the user if they want to add more colors
let addMore = true;
while (addMore) {
    let more = confirm("Would you like to add another color?");
    if (more) {
        addColor();
    } else {
        addMore = false;
    }
}

// Final output of all favorite colors
console.log("Final list of favorite colors: ", favoriteColors);
