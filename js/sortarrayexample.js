let arr = []
arr.push(2)
arr.push(4)
arr.push(4)
arr.push(2)
arr.push(8)
arr.push(6)
//arr.reduce((item)=> item>10)
const sum = arr.reduce((total, currentValue) => total + currentValue, 1);

console.log(sum); // Output: 15
const sumWithIndex = arr.reduce((total, currentValue, currentIndex) => total + (currentValue * currentIndex), 0);
console.log(sumWithIndex); // Output: 40

arr.copyWithin(3,1,3)
console.log(arr)

const allEven = arr.every(num => num % 2 === 0);
console.log(allEven); // Output: false

/*console.log(arr.find((item)=> item==42))
console.log(arr.findIndex((item)=> item==89))
console.log(arr.findIndex((item)=> item%2!=0))
let arr1 = [[1,2],[3,4]]
let data = arr1.flat()
console.log(data)
let arr1 = arr.slice(0,Math.floor(arr.length/2))
let arr2 = arr.slice(Math.floor(arr.length/2),arr.length)
let arr3 = arr.filter(x=>x%2==0)
console.log(arr3)
//arr.push(57)
//arr.pop()
//arr.shift()
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]<arr[j])
        {
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
    console.log(arr[i])
    
}
console.log('using predefine function')
arr.sort().reverse().forEach((item)=>console.log(item))*/

