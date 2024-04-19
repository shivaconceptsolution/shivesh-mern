var stu = new Map();
stu.set("rno","1001");
stu.set("sname","xyz");
stu.set("branch","cs");
stu.set("fees",45000);
for(var key of stu.keys())
{
    console.log(key + " " + stu.get(key) + "\n");
}
var stu1 = new Map();
stu1.set("rno",["1001","1002","1003"]);
stu1.set("sname",["xyz","abc","mno"]);
stu1.set("branch","cs");
stu1.set("fees",45000);
console.log(stu1)
for(var key of stu1.keys())
{
    console.log(key + " " + stu1.get(key) + "\n");
}

