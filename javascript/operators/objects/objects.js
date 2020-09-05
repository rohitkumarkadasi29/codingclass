

const person = {
    name: "rohit", age: "20"
}

person["degree"] = "BCA";
console.log("======>", person);




const persondetails = {
    name: "rohit kumar",
    addres: {
        Hno: "2-25",
        streetNo: 10,
        city: "Hyderabad",

    }
}
console.log("...",persondetails.addres.city);

const list = ["narender", "rohit", 26, false];

console.log("array==.", list[0]);

const studentList = [
    {name:"rohit", age:20, location:"mettuguda"},
    {name:"narender", age:27, location:"Uppal"},
    {name:"ashish", age:28, location:"usa", subject:[
        "maths", "social", "telugu"
    ]},
    {name:"bunny", age:14, location:"tharnaka"}
]
console.log("list..",studentList[2].subject[2]);


const employeesdetails = {
    name:"rajesh",
    studentList : [
        {name:"rohit", age:20, location:"mettuguda"},
        {name:"narender", age:27, location:"Uppal"},
        {name:"ashish", age:28, location:"usa", subject:[
            "maths", "social", "telugu"
        ]},
        {name:"bunny", age:14, location:"tharnaka", relatives:[
            {name:"suresh"}
        ]
    }
    ]


}

console.log("details...",employeesdetails.studentList[3].relatives[0].name);




