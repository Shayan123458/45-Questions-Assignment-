// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

let magiciansName = ["Ali","AinakWala","Rameez"]

function show_magicians(magiciansName:string[]){
    magiciansName.forEach(magiciansName => {
        console.log(magiciansName)
    });
}
show_magicians(magiciansName);
