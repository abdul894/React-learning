// /*
//     write function to check if the number you've passed in is equals to 100 or sum of 2 numbers is 100
// */
// var answer = function (num1, num2) {
//     if (num1 === 100 || num2 === 100 || (num1 + num2) === 100) {
//         return true;
//     }
//     else {
//         return false;
//     }
// };

// console.log(answer(200, 100));

// /*
//     Write a Javascript program to get the file extension.
// */

// const fileExtension = (filename) => filename.slice(filename.lastIndexOf('.'));

// const filename = window.location.href
// console.log(fileExtension(filename));
// console.log(filename);

// /* 
//     write a javascript program to replace every character in a gven string with the character following it in the alphabet
// */

// const moveCharsForward = (str) =>
//     str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

// console.log(moveCharsForward('abdul'));


// const moveCharFoward = (str) => {
//     var newstr = "";
//     for (i = 0; i < str.length; i++) {
//         var newChars = String.fromCharCode(str.charCodeAt(i) + 1);
//         newstr += newChars
//     }
//     return newstr;  
// };

// console.log(moveCharFoward('abdul'));


// /* 
//     write a JS program to get the current date.
// */

// const fromatDate = (date = new Date()) => {
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;

// }

// console.log(fromatDate());


// /* 
//     javascript program to create a new string adding NEW! in front of a given string. if the string begins with NEW! already then return the orignal.

// */

// const addNew = (str) => 
//     str.indexOf('New!') === 0 ? str :  `New! ${str}`;

// console.log(addNew('New! Offer'));

// /* 
//     custom map function!
// */

// function customMap(array, cb) {
//     const newArray = [];
//     for(i = 0; i < array.length; i++) {
//         newArray.push(cb(array[i]));
//     }
//     return newArray;
// }

// const result = customMap([1, 2, 3, 4], (x) => x * 2);

// console.log(result);

// function customFilter(array, cb) {
//     const newArray = [];
//     for(i = 0; i < array.length; i++) {
//         if(cb(array[i]) === true ) {
//             newArray.push(array[i])
//         }
//     }
//     return newArray;
// }

// const result1 = customFilter(["apple", "mango", "pineapple", "banana"], (el) => el.includes('apple'));

// console.log(result1);

var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

