// Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//  Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a 
//  report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let usernames =["Farzan","Shayan","Sufwan","Wardan","Zeeshan","Admin"];

for (let user of usernames){
    if (user == "Admin"){
        console.log("Hello admin, would you like to see a report?")
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
}