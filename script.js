const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jonas = "I'm" + " " + firstName + ',a' + " " + (year - birthYear) + " " + 'year old' + job + '!';
console.log(jonas);
/*this one we have declared string but the format is not comfortable so we are using string template
with template literals we can write a string in a more normal way and then basically insert the variables directly into the string and then they will simply be replaced
so basically a template literals can assemble multiple pieces into one final string*/
const jonasNew = `Im ${firstName} , a ${year - birthYear} year old ${job}! `
console.log(jonasNew);
