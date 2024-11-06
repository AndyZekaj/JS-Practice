// Task 4
// Given the object below, add a new property to it called fullName.
// The property should combine the values from firstName and lastName, separated by a space.
// const person = {
//     firstName: "Jim",
//     lastName: "Jameson",
//     age: 37
// };
// Expected output:
// {
//     firstName: "Jim",
//     lastName: "Jameson",
//     age: 37,
//     fullName: "Jim Jameson"
// };

const person1 = {

    firstName: "Jim",
    lastName: "Jameson",
    age: 37
};

person1.fullName = person1.firstName + " " + person1.lastName;

console.log(person1);
