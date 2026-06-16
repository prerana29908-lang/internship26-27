// const users = [
//   {
//     userid: 1,
//     user_name: "Yatin",
//     gender: "male"
//   },
//   {
//     userid: 2,
//     user_name: "siddesh",
//     gender: "male"
//   },
//   {
//     userid: 3,
//     user_name: "shivani",
//     gender: "female"
//   }
// ];

// const [
//   { user_name: user1_username, userid },,{ gender: user3_gender }] = users;

// console.log(user1_username);
// console.log(user3_gender);
// console.log(userid);

// const obj1={
//     key1:"value1",
//     key2:"value2"
// };

// const obj2={
//     key3:"value3",
//     key4:"value4"
// };

// const obj_new={...obj1,...obj2};
// console.log(obj_new);

const users=[
    {
        // name:per,
        age:22
    },
    {
        name:Adi,
        age:21
    },
    {
        name:ishu,
        age:17
    },
    {
        name:ishu,
        age:19
    },

];
const [{name:age},,{name:age_2},,]=users;
// console.log(name_1);
console.log(age);
console.log(age_2);