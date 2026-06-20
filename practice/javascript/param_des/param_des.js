const girl={
    name:"prerana",
    age:17
};
function pre(obj)
{
    console.log("name:"+obj.name);
    console.log("age:"+obj.age);
}
pre(girl);

//girl object
//    ↓
// pre(girl)
//    ↓
// obj = girl
//    ↓
// obj.name → "prerana"
// obj.age  → 17
//    ↓
// Output:
// name:prerana
// age:17
