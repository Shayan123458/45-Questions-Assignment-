var Guest = ["Aashir", "Salman", "Hamza", "Ali"];
console.log("Mr ".concat(Guest[0], ", You Are Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[3], ", You Are Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[1], ", You Are Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[2], ", You Are Invited For A Dinner!!"));
console.log("Unfortunately ".concat(Guest[1], " Is Not Coming Due To Some Reason!"));
Guest[1] = "Ahmed";
console.log(Guest);
console.log('in replacement');
console.log("Mr ".concat(Guest[1], ", You Are Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[0], ", You Are Still Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[2], ", You Are Still Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[3], ", You Are Still Invited For A Dinner!!"));
console.log("Hey Dear Guests! , I Found A Bigger Dinner Table, So Now More Space Is Available!!!");
Guest.unshift("Mustafa");
console.log(Guest);
Guest.splice(2, 0, "Abdullah");
console.log(Guest);
Guest.push("Asad");
console.log(Guest);
console.log("Mr ".concat(Guest[0], ", You Are Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[2], ", You Are Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[1], ", You Are Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[4], ", You Are Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[3], ", You Are Invited For A Dinner!!"));
console.log("Mr ".concat(Guest[5], ", You Are Invited For A Dinner!!"));
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
