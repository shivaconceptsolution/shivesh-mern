let s = 'welcome in shiva concept'
/*console.log(s.toUpperCase())
console.log(s.toLocaleLowerCase())
console.log(s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
console.log(s.replace(/^\w/, (match) => match.toUpperCase()))*/
console.log(s.indexOf("e"))
console.log(s.indexOf("e",3))
console.log(s.indexOf("e",7))
console.log(s.lastIndexOf("e",5))
console.log(s.charAt(8))
console.log(s.endsWith("t",15))
let email='ravi@gmail.c'
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(email.match(emailRegex))
{
    console.log('valid')
}
else
{
    console.log('invalid')
}

let username='ravigmailc'
const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/;
if(!username.match(specialCharacterRegex))
{
    console.log('valid')
}
else
{
    console.log('invalid')
}
console.log(s.search("e",5))
console.log(username.padStart(username.length+4,'MR. '))
console.log(username.padEnd(username.length+4,'*,?'))
