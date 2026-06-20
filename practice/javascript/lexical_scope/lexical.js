let name="prerana";
function outer()
{
    console.log(name);
}
function inner()
{
    let name="raj";
    outer();
}
inner()
//Here two functions are there outer() and inner()
//what actually happened here?
//outer() is defined in global scope
//so lexical scope means javascript is not looking for 
//where your function is called
//it checked its scope and we know that,scope is global
//so it executes "prerana" not "raj"