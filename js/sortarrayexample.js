let arr = []
arr.push(12)
arr.push(4)
arr.push(45)
arr.push(78)
arr.push(89)
arr.push(6)
console.log(arr.find((item)=> item==42))
console.log(arr.findIndex((item)=> item==89))
console.log(arr.findIndex((item)=> item%2!=0))
let arr1 = [[1,2],[3,4]]
let data = arr1.flat()
console.log(data)
/*let arr1 = arr.slice(0,Math.floor(arr.length/2))
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