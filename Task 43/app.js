// Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define a function to make magicians great
function makeGreat(magicians) {
    // Create a new array to store the modified names
    var greatMagicians = [];
    // Iterate over each magician's name
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        // Add "the Great" to each magician's name and push it to the new array
        greatMagicians.push("".concat(magician, " the Great"));
    }
    // Return the new array with modified names
    return greatMagicians;
}
// Define a function to show magicians
function showMagicians(magicians) {
    // Iterate over each magician's name and log it
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Define an array of magician names
var magicians = ["Ali", "AinakWala", "Rameez"];
// Call makeGreat() with a copy of the array of magician names
var greatMagicians = makeGreat(__spreadArray([], magicians, true));
// Call showMagicians() with the original array
console.log("Original Magicians:");
showMagicians(magicians);
// Call showMagicians() with the array containing "the Great" added to each magician's name
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
