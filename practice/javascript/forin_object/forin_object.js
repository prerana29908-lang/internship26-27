// const person = {
//   name: "Prerana",
//   age: 22,
//   city: "Nagpur"
// };

// for (let key in person) {
//   console.log(person[key]);
// }
// console.log(Object.keys(person));

// const city={
//     name:"nasik"

// };
// for (let key in city)
// {
//     console.log(city[key]);
// }
const person = {
  name: "Prerana",
  age: 22,
  city: "Nagpur"
};

for (let key of Object.keys(person)) {
  console.log(key, ":", person[key]);
}