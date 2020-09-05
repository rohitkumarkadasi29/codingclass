// push method

var names = ["suresh","rohit","narender"];
document.getElementById("push").innerHTML=names;
function getNames(){
    names.push("ashish");
document.getElementById("push").innerHTML=names;

}

// pop method

var flowers = ["rose","lotus","sunflower"];
document.getElementById("pop").innerHTML= flowers;

function getFlowers(){
    flowers.pop();
    document.getElementById("pop").innerHTML= flowers;

}

// shift & un-shift methods

var cars = ["rolls royce","jeep","BMW"];
document.getElementById("shift").innerHTML= cars;

function getCars(){
    cars.shift();
    document.getElementById("shift").innerHTML= cars;

}


var bikes = ["hero","bajaj","honda"];
document.getElementById("unShift").innerHTML= bikes;

function getBikes(){
    bikes.unshift("bmw");
    document.getElementById("unShift").innerHTML= bikes;

}

// concat

var frutes = ["appel","banana","orange"];
var dryfrutes = ["dates","kaju","badam"];

function getFrutes(){
    var result = frutes.concat(dryfrutes);
    document.getElementById("concat").innerHTML=result;
}



var numbers = [2,10,5,7,8,9];

function getResult(){
    var newNum = numbers.map(item => item);
    console.log("map",newNum);
}

var newNames =["rohit","narender","rajesh"];

function getNewNames(){
    var nameList = newNames.map(item => item);
    console.log("map=====>",nameList);
}

var studentInfo = [
    {name:"rohit",id:01,address:"mettuguda"},
    {name:"narender",id:02,address:"uppal"},
    {name:"ashish",id:03,address:"USA"}
]

function studInfo(){
    var studentlist = studentInfo.map(list => list.name);
    console.log("map...",studentlist);
}


var newnumbers = [2,10,5,7,8,9];

function getFilter(){
    var newListnumbers = newnumbers.filter(item => item >5)
    console.log("newlistnmber", newListnumbers)
}

var record = ["rohit","narender","ashish","rohit"]; 

function getRecord(){ debugger
    var recordList = record.filter(item => item==="rohit");
    console.log("recordList", recordList);
}

var information = [
    {name:"rohit",id:01,address:"mettuguda"},
    {name:"rohit",id:01,address:"mettuguda"},
    {name:"narender",id:02,address:"uppal"},
    {name:"narender",id:02,address:"uppal"},
    {name:"ashish",id:03,address:"USA"},
    {name:"ashish",id:03,address:"USA"}
]

function getInformation(){
  var newInfomation =   information.filter(item =>(item.address ==="mettuguda"))
  console.log("newinformation", newInfomation)
}

getInformation();


var companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];


  var companysort = companies.sort((a,b) => b.start-a.start);
  console.log("sortdata",companysort);

  var companyinfo = companies.filter(item => item.start===1999);
  console.log("comapnylist",companyinfo);

  var companyinf = companies.filter(item => item.start>1999);
  console.log("comapnylist===============",companyinf);

var add = information.concat(companies);
console.log("add",add);

var newdata = add.filter(item => item.name==="rohit");
console.log("newdata",newdata.map(item =>item.address));

var comdata = companies.filter(item => item.category==="Auto");
console.log("category",comdata);


var data = companies.find(item => item.start<"1999");
console.log("find",data);


var Data = companies.slice(3,5);
console.log("slice",Data); 


var namesdata = ["suresh","rohit","pavan","mani"];

function getDetails(){
    var editdata = namesdata.splice(1,0,"sathish");
console.log("splice",editdata);
}


var indiacities = ["hyderabad", "banglore", "mumbai", "chennai", "pune"]
document.getElementById("spliceMethod").innerHTML = indiacities;

function getCitiesList() {
    indiacities.splice(2, 1, "kolkata");
    document.getElementById("spliceMethod").innerHTML = indiacities;
}


var numerics = [1,2,5,7,3,8,6];

var num = numerics.length
console.log("lengthof",num)
// var sortMethod = numerics.sort()
// console.log("sort",sortMethod.reverse());

// var asc = numerics.sort((a,b) => a -b);
// console.log("asc===>", asc)


// var dsc = numerics.sort((a,b) => b -a);
// console.log("dsc===>", asc)

function getIndex(){
    var findindexnumber = numerics.findIndex(item => item<7);
console.log("find",findindexnumber);
}


function getIndexOf(){
    var findindexnumber2 = indiacities.join("**");
console.log("indexOf",findindexnumber2);
}




var numeric = [1,2,5,7,3,8,6];

var resultof = numeric.push(9);
console.log("push",resultof);

var showpop = numeric.pop();
console.log("pop",showpop);

var showshift = numeric.shift();
console.log("shift",showshift);


var showunshift = numeric.unshift(10);
console.log("unshift",showunshift);


var showconcat = numeric.concat(indiacities);
console.log("concat",showconcat);

var showmap = showconcat.map(item => item);
console.log("map",showmap);

var showfilter = showconcat.filter(item => item==="banglore");
console.log("filter",showfilter);


var numex = [1,2,5,7,3,8,6];
var showslice = numex.slice(0,3);
console.log("slice",showslice);


document.getElementById("showsplice").innerHTML=indiacities;

function getShowSplice(){
    var showsplice = indiacities.splice(3,0,"aaaa");
    document.getElementById("showsplice").innerHTML=showsplice;
}


var showfind = companies.find(item => item.category==="Finance");
console.log("showfind",showfind);


var showfindindex = numeric.findIndex(item => item>5);
console.log("showfindindex",showfindindex);

var showindexof = numeric.indexOf(5);
console.log("showindexof",showindexof);

var showjoin = numeric.join("--");
console.log("showjoin",showjoin);

var showincludes = numeric.includes(0);
console.log("showincludes",showincludes);

var showlastindex = indiacities.lastIndexOf("hyderabad");
console.log("showlastindex",showlastindex);

var showlength = numeric.length;
console.log("showlength",showlength);

var showsort = numeric.sort((a,b) => a-b);
console.log("showsort",showsort);
console.log("showsort",showsort.reverse());



//  filter find findindex 
// var values = [1,2,5,7,3,8,6];
// var ex = values.firstIndex(item => item>5);
// console.log("exfilter",ex);


// reduce()

var digits = [1,3,2,5,6,7];
var resultdigit = digits.reduce((total,dig) => total + dig, 10);
console.log("reduce",resultdigit);
