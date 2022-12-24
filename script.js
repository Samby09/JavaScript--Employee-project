const userData = [
    { id: 1, name : "John", age : "18", profession: "developer" } ,
    { id: 2, name : "Jack", age : "20", profession: "developer" } ,
    { id: 3, name : "karen", age : "19", profession: "admin" } ,
]

userData.map(function (item) {
    item.age = Number(item.age);
})

let result = document.getElementById("result");
let dropdown = document.getElementById("dropdown");
let btn = document.getElementById("filterBtn");
 
function filterByProfession() {
    
    result.innerHTML = "";

    
    let dropdownValue = dropdown.value;
    console.log(dropdownValue);

    if (dropdownValue == "profession") {
        alert("Please select a profession");
        return;
    }

    userData.forEach((item) => {
        if (item.profession === dropdownValue) {
            let div = document.createElement("div");
            div.innerText = item.id + ".  Name:" + item.name + "    Profession:" + item.profession + "    Age:" + item.age;
            result.append(div);
        }
    })

}

btn.addEventListener("click", filterByProfession)


let userData1 = document.getElementById("userVal");
let name = document.getElementById("input-name");
let profession = document.getElementById("input-profession");
let age = document.getElementById("input-name");
let addBtn = document.getElementById("addBtn");

function addNewUser(){
userData1 = [{name , profession, age}];
return UserData = [...userData,...userData1];
}

addBtn.addEventListener("click", addNewUser)