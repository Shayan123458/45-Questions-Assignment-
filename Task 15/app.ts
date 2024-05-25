let Guest = ["Aashir","Salman","Hamza","Ali"];
console.log(`Mr ${Guest[0]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[3]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[1]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[2]}, You Are Invited For A Dinner!!`);
console.log(`Unfortunately ${Guest[1]} Is Not Coming Due To Some Reason!`);
Guest[1]="Ahmed";
Guest =["Aashir","Ahmed","Hamza","Ali"];
console.log('in replacement')
console.log(`Mr ${Guest[1]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[0]}, You Are Still Invited For A Dinner!!`);
console.log(`Mr ${Guest[2]}, You Are Still Invited For A Dinner!!`);
console.log(`Mr ${Guest[3]}, You Are Still Invited For A Dinner!!`);









// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.
