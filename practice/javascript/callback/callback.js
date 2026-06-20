function greet(name)
{
    console.log("hello "+name);
}
function pro(callback)
{
    callback("prerana");
}
pro(greet);

// processUser(greet)
//             |
//             v
// callback = greet
//             |
//             v
// callback("Prerana")
//             |
//             v
// greet("Prerana")
//             |
//             v
// console.log("Hello Prerana")

// A callback function in JavaScript is a
//  function that is passed as an argument to
//   another function and is executed later.

// What happens step by step?
// greet function is created.
// processUser function is created and expects a parameter called callback.
// processUser(greet) is called.
// The greet function is passed to processUser as the callback.
// Inside processUser, this line runs: