function outer()
{
    return function inner()
    {
        console.log("inner is returned");
    }
}
const res=outer();
res();

//Here,what actually happened the outer() function is created
//Then,into that one more inner() is created
//After that,outer() is stored into res
//Then,res() is called
//means the final output is "inner is returned"