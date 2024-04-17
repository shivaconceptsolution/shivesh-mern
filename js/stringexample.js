var x='welcome'
var c=0
var v=0
console.log(String.fromCharCode(48))
console.log('a'.charCodeAt())
for(var item of x)
{
  
    switch(item)
    {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        v++;
        break;
        default:
        c++;
        break;
    }
}

console.log('total consonent is ',c,'total vowel is ',v)