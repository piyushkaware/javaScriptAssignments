var data = document.querySelector("input[name='todo_input']");
var submit = document.querySelector('button');
var filldata = document.querySelector('.todos');
var count = 0;

submit.addEventListener('click', function () {
    // console.log(data.value)
    var tag = document.createElement('p');
    var text = data.value;
    tag.append(text);
    tag.setAttribute('key', count);
    filldata.append(tag);
    count += 1;
})

filldata.addEventListener("click", removebtn);
function removebtn(e) {
    console.log(e.target.innerText);
    filldata.removeChild(e.target);
    
}

    // var eachpara = document.querySelectorAll('p')

    // eachpara.forEach(para=>{
    //     para.addEventListener('Onclick',function(e){
    //         console.log(para)
    //     })
    // })
