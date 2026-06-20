//Blockscope
// let and const used in the case of blockscope
// and accessible only within blocks{} not outside of it
// if (true)
// {
//     let name = "Prerana";
//     const age = 17;

//     console.log(name); // Prerana
//     console.log(age);  // 17
// }

// console.log(name); // Error
// console.log(age);  // Error

// if (true) {
//     let fruit = "apple";
//     console.log(fruit); // apple
// }

// console.log(fruit); // Error: fruit is not defined

// if (true)
// {
//     let fruits = "banana";
//     console.log(fruits);
// }
// console.log(fruits);

// function greet()
// {
//     var age=18;
// //     console.log(age);
// }
// console.log(age);

//functionscope
// function test() {
//     if (true) {
//         var x = 10;
//         let y = 20;
//     }

//     console.log(x); // 10
//     console.log(y); // Error
// }

// test();