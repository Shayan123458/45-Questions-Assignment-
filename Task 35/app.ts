// Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!

let Animals =  ["Cat","Lion","Wolf"];
for (let i =0; i<Animals.length; i++){
    console.log(Animals[i])
}
//common characterstic
for (let s =0;s<Animals.length; s++){
    console.log(`A ${Animals[s]} Is A Herbivore`)
}
console.log("All Animals Are Herbivores")