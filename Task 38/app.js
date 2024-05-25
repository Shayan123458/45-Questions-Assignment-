// Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country
function describe_city(Cities, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(Cities, " Is In ").concat(country));
}
describe_city("Karachi");
describe_city("Hyderabad");
describe_city("Shingai", "China");
