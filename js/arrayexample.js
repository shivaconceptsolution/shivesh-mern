let x = ["C","CPP","DS","Java","ioS","Android"]
for(var data of x)
{
    console.log(data)
}
for(var index in x)
{
    console.log(x[index])
}
for(let i=0;i<x.length;i++)
{
    console.log(x[i])
}

x.forEach((value)=>{
    console.log(value)
})