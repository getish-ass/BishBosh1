let listInput = document.querySelector('#inList');
let listBtn = document.querySelector('#btn');
let listP = document.querySelector('#pList');

var todoList = [];
let count = 0;
listBtn.addEventListener('click', function(e){
    
    
    todoList.push(listInput.value);
    console.log(todoList);

    document.querySelector('#disList').innerHTML += `<li id="pList">${todoList[count]}</li>`;

     count++;
})

//listInput.addEventListener('mouseover', function(e){
//    document.querySelector('#inList').style.color = 'black';
//})
listP.addEventListener('mouseenter', function(e){
    console.log('I am in th window');
})
