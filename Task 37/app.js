// Large by default with a message that reads I love TypeScript. Make a large shirt and a
// Shirts: Modify the make_shirt() function so that shirts are large
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("Making A T-Shirt Of ".concat(size, " Size With A Message ").concat(message, " Printed On It"));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Divide into Coding");
