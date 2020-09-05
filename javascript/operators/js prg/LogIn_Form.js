var form = document.getElementById("form");
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var username = document.getElementById("username");
var list = document.getElementById("list");
var logInInfo = document.getElementById("logInInfo");
var userInfo = []
var tableList = []

function getId() {
    return Math.floor(Math.random() * 100000000);
}

function addToUserInfo(e) {
    e.preventDefault();
    var updatedlist = {
        id: getId(),
        firstname: firstname.value,
        lastname: lastname.value,
        username: username.value
    }
    console.log("userdata", updatedlist);
    userInfo.push(updatedlist)
    tableList.push(updatedlist)
    addData(updatedlist)
    tableContainer(updatedlist);
    console.log("userInfo", userInfo)
}

function addData(updatedlist) {
    console.log("updatedlist==>", updatedlist)
    var item = document.createElement("li")
    item.innerHTML = `${updatedlist.firstname}<br>${updatedlist.lastname}<br>${updatedlist.username}
    <span><button onclick="remover(${updatedlist.id})" class="listRemover">x</button></span> `
    list.appendChild(item)
}

function tableContainer(updatedlist){
    var tableInfo = document.createElement("tr")
    tableInfo.innerHTML=`
    <td class="list-item">${updatedlist.firstname}</td>
    <td>${updatedlist.lastname}</td>
    <td>${updatedlist.username}</td>
    <td><button onclick="recordRemover(${updatedlist.id})" class="btnRemover">x</button></td>
    `
    logInInfo.appendChild(tableInfo)
}

function recordRemover(id){
    tableList = tableList.filter(item => item.id !== id)
    console.log("tableList..",tableList);
    initalFunction()
}

function clearTable(){
    tableList = []
    initalFunction()
    console.log("cleartable..",tableList)
}

function remover(id) {
    console.log("idd..", id)
    userInfo = userInfo.filter(item => item.id !== id)
    console.log("user===>", userInfo)
    initalFunction()
}


function initalFunction() {
    list.innerHTML = ""
    logInInfo.innerHTML=""
    userInfo.forEach(addData)
    tableList.forEach(tableContainer)
}

function removeAll(){
    userInfo = []
    initalFunction()
    console.log("==>",userInfo)
}

initalFunction()

form.addEventListener('submit', addToUserInfo)


