let x1 = [{a:10,b:20},{c:30,d:40}]
for(var data of x1)
{
    for (var key in data) {
        console.log(key,data[key]);
    }
   console.log(" ")
    
}

var d ={"a":10,"b":20}
var d1={"c":30,"d":40}
console.log(d["a"],d["b"])