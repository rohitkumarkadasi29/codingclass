var days = ["sunday", "monday", "tuesday", "thusday", "friday", "saturday"]

for (let i = 0; i < days.length; i++) {
    const element = days[i]
    console.log("element", element)
}
let cond = days.includes("wendnesday")
if (cond) {
    console.log("===>", true);
}
else {
    console.log("===>", false);
}

var name = "";
var i = 0;
while (i < 10) {
    let name = "the value is" + i;
    i++
    console.log("name===>", name)
}

var i = 0;
do {
    let name1 = "the value is" + i;
    i++;
    console.log("name1", name1);
} while (i < 5);


let friut = "grapes"

switch (friut) {
    case "banana":
        console.log("it returns banana");
        break;
    case "orange":
        console.log("it returns oarange");
        break;
    case "apple":
        console.log("it returns apple");
        break;
    case "mango":
        console.log("it returns mangor");
        break;
    default:
        console.log("i dont have any fruit")


}