const namecontain = document.getElementById("namelist");
const addname = document.getElementById("addname");

addname.addEventListener("click", Addnewname);

function Addnewname(){
    let Name = document.getElementById('name').value;
    let nameColor = document.getElementById('color').value;

    if(Name != ""){
        const newname = document.createElement("li");
        newname.innerText = Name;

        namecontain.appendChild(newname).style.color = nameColor;
        document.getElementById('name').value = "";
    }
}
