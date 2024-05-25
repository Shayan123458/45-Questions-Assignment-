// Large by default with a message that reads I love TypeScript. Make a large shirt and a
// Shirts: Modify the make_shirt() function so that shirts are large
// medium shirt with the default message, and a shirt of any size with a different
// message.
 
function make_shirt(size:string="Large",message:string="I Love Typescript"){
    console.log(`Making A T-Shirt Of ${size} Size With A Message ${message} Printed On It`);
}
make_shirt()
make_shirt("Medium");
make_shirt("Small","Divide into Coding")