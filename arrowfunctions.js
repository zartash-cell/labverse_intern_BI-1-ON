// arrow functions

// normal function k syntax meise function remove karke simple ()=>{}
// const mydetail=( name,age,study) =>{
//     return {
//         age:20,
//     name:"zartash",
//     study:"Software Engineer"
//     };
// };
// console.log(mydetail()) ;
// Example: Using the passed parameters
const mydetail2= (name, age, study) => {
    return {
        name: name,
        age: age,
        study: study
    };
};

const person1 = mydetail2("Alice", 25, "Data Scientist");
console.log(person1);
// Output: { name: 'Alice', age: 25, study: 'Data Scientist' }

// Shorthand for object literals when key and value variable names are the same:
// const mydetail2Shorthand = (name, age, study) => {
//     return { name, age, study };
// };
const person2 = mydetail2("Bob", 30, "Web Developer");
console.log(person2);
// Output: { name: 'Bob', age: 30, study: 'Web Developer' }