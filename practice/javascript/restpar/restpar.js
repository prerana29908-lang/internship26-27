//rest parameter is a parameter in which it can 
//accept any number of arguments into the function and store it into array

//so,here rest is collecting multiple values into single array
//and spread is expand single array intp multiple values

//rest: multiple values->one array(collect)
//spread : one array->multiple values(expand)

// function add(...num)
// {
//     console.log(num);
    function sum(...addition)
    {
        console.log(addition);
    }
// }
sum(10+20+30);
// add(10,20,30,);

const numbers=[10,20,30,40];
console.log(...numbers);