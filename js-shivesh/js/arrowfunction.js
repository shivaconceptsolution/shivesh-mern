const sum = (x,y)=>x+y;

const sum1 = (x,y)=>{
    let z=x+y;
    if(z%2==0)
    {
        console.log('even');
    }
    else
    {
        console.log('odd');
    }
}
console.log(sum(1000,200))
sum1(1000,200)