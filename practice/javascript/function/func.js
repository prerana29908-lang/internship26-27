// const addition = ()=>{
//     return 2+3;
// }
// const result=addition();
// console.log(result);
// const addition = (num1,num2)=>{
//     return num1+num2;
// }
// const result=addition(10,20);
// console.log(result);

// const mul=function(a,b)
// {
//     return a*b;
// }
// console.log(mul(10,20));

function type(item)
{
    const fruits=["apple","banana","cherry"];
    const flowers=["rose","sunflower","lily"];

    if(fruits.includes(item.toLowerCase()))
    {
        return "this is fruit";
    }else if(flowers.includes(item.toLowerCase()))
    {
        return "this is flower";
    }else {
        return "unknown item";
    }

}
console.log(type("apple"));
console.log(type("rose"));
