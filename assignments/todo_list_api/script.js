let button = document.querySelector("#download");
let completedDiv = document.querySelector(".completed");
let inProgress = document.querySelector(".inProgress");
button.addEventListener("click", getApi)
function getApi(){
  fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(data => renderdata(data))
}

function renderdata(data){
    for(var i=0; i<data.length; i++){
        var elem = data[i];
        if (elem.completed===false){
            let tag = document.createElement('p')
            let text = elem.title;
            tag.innerHTML = text;
            inProgress.appendChild(tag);

        }
        else if (elem.completed===true){
            let tag = document.createElement('p')
            let text = elem.title;
            tag.innerHTML = text;
            completedDiv.appendChild(tag);

        }

    }


}