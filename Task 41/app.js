// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
var magiciansName = ["Ali", "AinakWala", "Rameez"];
function show_magicians(magiciansName) {
    magiciansName.forEach(function (magiciansName) {
        console.log(magiciansName);
    });
}
show_magicians(magiciansName);
