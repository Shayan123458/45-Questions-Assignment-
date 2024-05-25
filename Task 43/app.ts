// Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

// Define a function to make magicians great
function makeGreat(magicians: string[]): string[] {
    // Create a new array to store the modified names
    const greatMagicians: string[] = [];

    // Iterate over each magician's name
    for (const magician of magicians) {
        // Add "the Great" to each magician's name and push it to the new array
        greatMagicians.push(`${magician} the Great`);
    }

    // Return the new array with modified names
    return greatMagicians;
}

// Define a function to show magicians
function showMagicians(magicians: string[]): void {
    // Iterate over each magician's name and log it
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Define an array of magician names
const magicians: string[] = ["Ali", "AinakWala", "Rameez"];

// Call makeGreat() with a copy of the array of magician names
const greatMagicians: string[] = makeGreat([...magicians]);

// Call showMagicians() with the original array
console.log("Original Magicians:");
showMagicians(magicians);

// Call showMagicians() with the array containing "the Great" added to each magician's name
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
