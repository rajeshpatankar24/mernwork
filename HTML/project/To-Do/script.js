const inputBox = document.getElementById("input-box");
const listContainer = document.getElementsByid("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("you must enter something");
    }else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");// create a element name span tag
        span.innerHTML = "\u00d7";// cross icon
        li.appendChild (span);

    }
    inputBox.value = "";
    savaData()

}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "li"){
        e,target.classList.toggle("Checked");
        savaData()
    }else if (e.target.tagName === "span"){
        e.target.parentElment.remove();
        savaData()

    }
},false);

function savaData(){
     lacalStorage.setItem("data",listContsiner.innerHTML);
}
function showTask(){
    listConatainer.innerHTML = lacalStorage.getItem("data");
}
showTask();