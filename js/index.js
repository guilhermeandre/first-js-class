/* Exercise 1 */

let jobTitle;
let geographicLocation;
let annualSalary;
let companyName;

jobTitle = "Web Developer";
geographicLocation = "Toronto, Ontario";
annualSalary = "100k/ year";
companyName = "Humber College"; 

console.log(`You will be a ${jobTitle} in ${geographicLocation}, making $${annualSalary} for ${companyName}`);

/* Exercise 2 */

let currentYear;
let userBirthdayYear;

currentYear = 2020;
userBirthdayYear = 1992;
actualAge = currentYear - userBirthdayYear;

console.log(`The user is ${actualAge} years old`);

/* Exercise 3 */

let currentAge;
let deathAge;
let snacksDailyAmount;
let totalSnacks;

currentAge = 27;
deathAge = 87;
snacksDailyAmount = 5;
annualSnacks = 365 * snacksDailyAmount 
totalSnacks = (deathAge - currentAge) * annualSnacks;

console.log (`You will need ${totalSnacks} snacks to last you until the ripe old age of ${deathAge}`);

/* Exercise 4 */ 

let radius;
let circumference;
let area;
let π;

radius = 14;
π = 3.14159;

circumference = 2 * π * radius;
area = π * (radius*radius);

console.log(`The circumference is ${circumference}`);
console.log(`The area is ${area}`);


/* Exercise 5 */

let celsius;
let fahrenheit;

celsius = 30;
fahrenheit = (celsius * 9/5) + 32;

console.log(`The ${celsius} temperature in celsius is the same as ${fahrenheit} in Fahrenheit`);

fahrenheit = 90;
celsius = (fahrenheit - 32) * 5/9;

console.log(`The ${fahrenheit} temperature in Fahrenheit is the same as ${celsius} in Celsius`);