function signupHanlder() {
    var firstname = document.getElementById("firstname")
    var lastname = document.getElementById("lastname")
    // var username = document.getElementById("username"); 
    // var password = document.getElementById("password"); 


    var details = {
        firstname: firstname.value,
        lastname: lastname.value,
        username: username.value
    }
    console.log("details==>", details)

    // document.getElementById("details") = details
    // alert(`firstname is ${firstname.value}, lastname is ${lastname.value} username is ${username.value} and that password is ${password.value}`)
}



function logInData() {

    var data = [
        { username: "narender", password: "narender@123" },
        { username: "rohit", password: "rohit@123" },
        { username: "ashish", password: "ashish@123" },
        { username: "rajesh", password: "rajesh@123" },
    ]
    var username = document.getElementById("username");
    var password = document.getElementById("password");


    // console.log("username==>", username.value)
    // console.log("password==>", password.value)

    // var logInInfo = {
    //     username : username.value,
    // }

    if (data.find(item => item.username === username.value)) {
        alert(`details matched ${username.value}`);
    }
    else {
        alert("details not matched");
    }



}


function getIncrement() {

    var value = parseInt(document.getElementById("number").value)
    value += 1;
    document.getElementById('number').value = value
    // var i=0;
    // i++
    // document.getElementById("add",i);
}

function getDecrement() {
    var value = parseInt(document.getElementById("number").value)
    value = isNaN(value) ? 0 : value
    console.log("value", value)
    if (value > 0) {
        value -= 1;
        document.getElementById("number").value = value;
    }

}


const form = document.getElementById('form');
const name = document.getElementById('name');
const list = document.getElementById('list');
var namesList = []


function generateId() {
    return Math.floor(Math.random() * 10000000);
}

function addToCard(e) {
    e.preventDefault();
    let updatedName = {
        id: generateId(),
        name: name.value
    }
    namesList.push(updatedName)
    Addelements(updatedName)
    console.log("namesList", namesList)

}

function Addelements(updatedName) {
    console.log("updatedanme==>", updatedName)
    const item = document.createElement("li")
    item.innerHTML = `
    ${updatedName.name} <span><button onclick="removeHanlder(${updatedName.id})">X</button></span>
    `
    list.appendChild(item)
}

function removeHanlder(id) {
    console.log("idd===>", id)
    namesList = namesList.filter(name => name.id !== id)
    initialFunction()

}
function initialFunction() {
    list.innerHTML = ""
    namesList.forEach(Addelements)

}

function clearAll() {
    console.log("clear")
    namesList = []

    initialFunction()
}
initialFunction()
form.addEventListener('submit', addToCard)