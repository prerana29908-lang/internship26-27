const name="prerana";
for(const char of name)
{
    console.log(char);
}
// const name = "Prerana";

// A string "Prerana" is stored in the variable name.

// name → "Prerana"
// Step 2

// The for...of loop starts:

// for (const char of name)

// Since a string is iterable, JavaScript goes through it one character at a time.

// Internally, it's like:

// Iteration	char
// 1	"P"
// 2	"r"
// 3	"e"
// 4	"r"
// 5	"a"
// 6	"n"
// 7	"a"
// Step 3

// For each iteration:

// console.log(char);

// runs.

// First iteration
// char = "P";
// console.log(char);

// Output:

// P
// Second iteration
// char = "r";
// console.log(char);

// Output:

// r

// And so on...

// What JavaScript is doing behind the scenes

// You can think of it like this:

// const name = "Prerana";

// console.log(name[0]); // P
// console.log(name[1]); // r
// console.log(name[2]); // e
// console.log(name[3]); // r
// console.log(name[4]); // a
// console.log(name[5]); // n
// console.log(name[6]); // a

// The for...of loop automatically accesses 
// each character one by one, so you don't have 
// to write the indexes yourself.

// Final Output
// P
// r
// e
// r
// a
// n
// a

// Key point: In for (const char of name), 
// char is a new variable created for each iteration
// , and it stores
//  the current character from the string.