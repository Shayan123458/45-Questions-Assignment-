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
console.log("Sorry! I can invite only two people for dinner!");
console.log("Sorry! ".concat(Guest[6], " I Cannot Invite You For Dinner!!"));
Guest.pop();
console.log(Guest);
console.log("Sorry! ".concat(Guest[5], " I Cannot Invite You For Dinner!!"));
Guest.pop();
console.log(Guest);
console.log("Sorry! ".concat(Guest[4], " I Cannot Invite You For Dinner!!"));
Guest.pop();
console.log(Guest);
console.log("Sorry! ".concat(Guest[3], " I Cannot Invite You For Dinner!!"));
Guest.pop();
console.log(Guest);
console.log("Sorry! ".concat(Guest[2], " I Cannot Invite You For Dinner!!"));
Guest.pop();
console.log(Guest);
console.log("Mr ".concat(Guest[0], " And Mr ").concat(Guest[1], " You Both Are Still Invited For A Dinner!!"));
Guest.pop();
console.log(Guest);
Guest.pop();
console.log(Guest);
console.log("I Actually Have An Empty List!!");
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise 16.
//  Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure
//  you actually have an empty list at the end
// of your program.
