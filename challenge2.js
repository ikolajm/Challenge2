// Array of numbers 1-10, odd numbers are an array, even numbers are another array

let original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let odd = [];

let even = [];

original.forEach(function (number) {
    if (number % 2 === 0) {
        even.push(number);
    } else {
        odd.push(number);
    }
}); 

console.log(odd, even);