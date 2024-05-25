let Guest = ["Aashir","Salman","Hamza","Ali"];
console.log(`Mr ${Guest[0]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[3]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[1]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[2]}, You Are Invited For A Dinner!!`);
console.log(`Unfortunately ${Guest[1]} Is Not Coming Due To Some Reason!`);
Guest[1]="Ahmed";
console.log(Guest)
console.log('in replacement')
console.log(`Mr ${Guest[1]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[0]}, You Are Still Invited For A Dinner!!`);
console.log(`Mr ${Guest[2]}, You Are Still Invited For A Dinner!!`);
console.log(`Mr ${Guest[3]}, You Are Still Invited For A Dinner!!`);
console.log(`Hey Dear Guests! , I Found A Bigger Dinner Table, So Now More Space Is Available!!!`);
Guest.unshift("Mustafa");
console.log(Guest);
Guest.splice(2,0,"Abdullah");
console.log(Guest)
Guest.push("Asad");
console.log(Guest);
console.log(`Mr ${Guest[0]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[2]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[1]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[4]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[3]}, You Are Invited For A Dinner!!`);
console.log(`Mr ${Guest[5]}, You Are Invited For A Dinner!!`);
