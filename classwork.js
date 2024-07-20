let users = [{
    name: 'John',
    age: 13
},
{
    name: 'Mark',
    age: 56
},
{
    name: 'Rachel',
    age: 45
},
{
    name: 'Nate',
    age: 67
},
{
    name: 'Jeniffer',
    age: 65
},
{
    name: 'Eshmat',
    age: 17
}
];


// users.forEach((item, index) => {
//     if (item.age < 18) {
//         users.splice(index, 1, {
//             ...item,
//             name: "Toshmat",
//             citizen: "uzb",
//             caution:"u're  too young"
//         })
//     }

// });
// console.log(users);

// let new_arr = users.filter((item) =>  !item.caution )
// console.log(new_arr);

// const numbers = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// Map va reverse [ [3,2,1], [6,5,4], [9,8,7] ]

// numbers.map(item => [item.reverse()] );
// console.log(numbers); 

// let hat = "Salom Ahmadboy biz sizni yangi ishni korib hayratda qoldik, va sizni masheniklar kechasiga lutfan taklif etamiz"
// let res = hat.replaceAll("sizni", "bizni");

// console.log(res);
// console.log(hat.split("sizni").join("bizni"));

// String.prototype.findVowels = function () {
//     let vowels = ["a", "e", "i", "o", "u"];

//     for (let i of this) {
//         if (vowels.includes(i.toLowerCase())) {
//             return true
//         }
//     }
//     return false

// }
// console.log("wsorAhj".findVowels());

// Task 43

// let str = "he@llo! w0rld#"

// String.prototype.sanitizeString = function (...symbols) {
//     let arr = []
//         for (const item of this) {
//             if (!symbols.includes(item)) {
//                 arr.push(item)

//             }
//         }
//     return arr.join("")
//     }

// console.log(str.sanitizeString("!", "@", "#", "$", "&")); // "hello0rld"

// Task 45

// function firstUniqueElement(arr) {
//  let new_arr = arr.filter(item => arr.indexOf(item) == arr.lastIndexOf(item))
//  return new_arr[0]
// }

// console.log(firstUniqueElement([2, 3, 4, 2, 3, 5, 4])); // 5


function ConstructorFn(name, age) {
    this.name = name
    this.age = age
    this.sayHello = function () {
        return `Hi! my name is ${this.name} and i am ${this.age} years old`
    }

}

const user = new ConstructorFn("Manolize", 65)
// const admin = new ConstructorFn("Albert",78)
// console.log(user.sayHello());
// console.log(admin);


class MyClass {
    constructor(citizen, lang) {
        this.citizen = citizen
        this.lang = lang

    }
    sayCitizen() {
        return this.citizen
    }
}
// const obj = new MyClass("Spain","Spanish")
// console.log(obj.sayCitizen());
// console.log(user.sayCitizen());


// Task 1

