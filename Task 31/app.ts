// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
let users = ["Farzan","Shayan","Sufwan","Wardan","Zeeshan","Admin"];
if (users.length == 0){
    console.log("We need to find some users!")
}
// • Remove all of the usernames from your array, and make sure the correct message is printed.
else {
    users=[]
    console.log(`All Users Have Been Removed ${users.length}`)
}