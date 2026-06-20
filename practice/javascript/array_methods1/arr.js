// ##########   pushhhhhhh  ###############

let array=[1,2,3,4,5,6,7];
let name="prerana";
array.push(8);
console.log(array);//In the case of push the element is added at end

// ##########   popppppp   ###############
array.pop();
console.log(array);//element remove from end

//##############    unshift and shift    ################
array.unshift(11);
console.log(array);//element added at beginning

array.shift();
console.log(array);//removed from beginning


// ##########   concat  ###############
console.log(array.concat(name));//used to add element in array


// #########Splice#############
console.log(array.slice(1,4));
array.splice(2,1,11);//(start_index,delete_element_count,replace element)
console.log(array);


// ##########Join############
console.log(array.join("-"));//"-" joins to element
// console.log(name.join("pawar"));


// ##########Index and lastindeof()#############
console.log(array.indexOf(2));
console.log(array.lastIndexOf(4));//checks index of number from last


//Includes()
console.log(array.includes(2));//checks that if that element is present or not 
//gives ans in boolean format


// ########## For each ###############
let array2=[10,20,30,40,50];
array2.forEach((value,index)=>{ //value->current value
                                //index->current index
console.log(value,index);
});

let names=["pre","raj","adu"];
names.forEach((value,index)=>{
    console.log(value,index);
});


//Map function
let res=array2.map(e=>e*2);
console.log(res);

// let even=array2.filter(num=>num%2===0);
// console.log(even);

//only returns that element which satisfying the con
// let numbers = [1,2,3,4,5,6];

// let even = numbers.filter(num => num % 2 === 0);

// console.log(even);

//find method returns first element which satisfying the consdition
// let result=numbers.find(e=>e>3);
// let result=numbers.findIndex(e=>e>3);//returns index of that element
// console.log(result);

let numbers = [2,4,6];
// let even = numbers.some(num => num % 2 === 0);
// console.log(even);

let even = numbers.every(num => num % 2 === 0);
console.log(even);

