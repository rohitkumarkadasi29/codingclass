var str = "i am learning js";
var res = str.charAt(3);
console.log("charAt",res);

var res2 = str.charCodeAt(7);
console.log("charCodeAt",res2);

var str1 = " and strings";
var res3 = str.concat(str1);
console.log("concat",res3);

var res4 = res3.endsWith("s");
console.log("endsWith",res4);

var res5 = String.fromCharCode(65);
console.log("fromCharCode",res5);

var res6 = str.includes("on");
console.log("includes",res6);

var res7 = str.indexOf("g");
console.log("indexOf",res7);

var res8 = str1.lastIndexOf("s");
console.log("lastIndexOf",res8);

var res9 = res3.startsWith("i");
console.log("stratsWith",res9);

var res10 = res3.slice(0,5);
console.log("slice",res10);

var res11 = str1.length;
console.log("length",res11);

var str2 = "acbcd";
var str3 = "ba";
var res12 = str2.localeCompare(str3);
console.log("localeCompare",res12);

var res13 = res3.match(/ing/g);
console.log("match",res13);

var res14 = str.repeat(2);
console.log("repeat",res14);

var res15 = str.replace("js","javascript");
console.log("replace",res15);

var res16 = str.search("learning");
console.log("search",res16);

// split
var res17 = str1.split();
console.log("split",res17);

var res18 = str1.split(" ");
console.log("split",res18);

var res19 = str1.split("");
console.log("split",res19);

var res20 = str1.split("n");
console.log("split",res20);

// split end

var res21 = str.substr(2,5);
console.log("substr",res21);

var res22 = str.substring(2,10);
console.log("substring",res22);

var res23 = str.toLocaleLowerCase();
console.log("toLocaleLowerCase",res23);

var res24 = str.toLocaleUpperCase();
console.log("toLocaleUpperCase",res24);

var res25 = str.toLowerCase();
console.log("toLowerCase",res25);

var res26 = str.toUpperCase();
console.log("toUpperCase",res26);

var res27 = str.toString();
console.log("toString",res27);

var res28 = str.valueOf();
console.log("valueOf",res28);

var res29 = str1.trim();
console.log("trim",res29);




// prototype  valueof tostring