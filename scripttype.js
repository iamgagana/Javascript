//prints as string
const inputYear = '1991';
console.log(inputYear + 18);

//converting string to a number
const inputYear1 = '1991';
console.log(Number(inputYear1), inputYear1);
console.log(inputYear1 + 18);
console.log(Number(inputYear) + 18);
console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23));

//Tyep coercion
console.log('I am' + 23 + 'years old');
console.log('23' - '10' - 3);

//here n it takes as 11 in first line bcz it will be string and the second n will be integer
let n = '1' + 1;
n = n - 1;
console.log(n);