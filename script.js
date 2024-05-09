const age = 19;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log(`Sarah can start driving License`);
}

const age1 = 15;
if (age1 >= 18) {
    console.log(`Sarah can start driving license`);
} else {
    const yearleft = 18 - age1;
    console.log(`Sarah is too young wait another ${yearleft} years:`);
}

const birthYear = 2021;
let century;
if (birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}
console.log(century);