const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-Container");
function addTask(){
    if(inputBox.value === ''){
    alert("write here");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = ""
}