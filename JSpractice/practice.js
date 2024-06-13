/*
    write function to check if the number you've passed in is equals to 100 or sum of 2 numbers is 100
*/
var answer = function (num1, num2) {
    if (num1 === 100 || num2 === 100 || (num1 + num2) === 100) {
        return true;
    }
    else {
        return false;
    }
};

console.log(answer(200, 100));

/*
    Write a Javascript program to get the file extension.
*/

const fileExtension = (filename) => filename.slice(filename.lastIndexOf('.'));

const filename = window.location.href
console.log(fileExtension(filename));
console.log(filename);

/* 
    write a javascript program to replace every character in a gven string with the character following it in the alphabet
*/

const moveCharsForward = (str) =>
    str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

console.log(moveCharsForward('abdul'));


const moveCharFoward = (str) => {
    var newstr = "";
    for (i = 0; i < str.length; i++) {
        var newChars = String.fromCharCode(str.charCodeAt(i) + 1);
        newstr += newChars
    }
    return newstr;  
};

console.log(moveCharFoward('abdul'));
