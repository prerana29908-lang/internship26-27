// const names=["apple","cherry","guava","pomegarnate"];
// const[first,second,third,fourth]=names;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);


// const [name,age=18]= ["prerana"];
// console.log(name);
// console.log(age);

// const [first,...others]=[1,2,3,4,5,6,7,9,9,9];
// console.log(first);
// console.log(others);

const[first,...others]=["prerana","akshar","aditi" ];
console.log(first);
console.log(others);

let a="monali";
let b="prerana";

[a,b]=[b,a];
console.log("at first position: "+a);
console.log("at second position: "+b);