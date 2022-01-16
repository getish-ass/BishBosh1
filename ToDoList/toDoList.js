let listInput = document.querySelector('#inList');
let listBtn = document.querySelector('#btn');
let listP = document.querySelector('#pList');
let bodyEvent = document.querySelector('#bodyId');
const items = document.querySelector('#disList');
var todoList = [];

listBtn.addEventListener('click', function(e){
    //this functions create list element and render it to the page   
    // create li and enter the user input value as list content
    var node = document.createElement('li');
    var textnode = document.createTextNode(listInput.value);
    node.appendChild(textnode);
    //add list to the todoList array
    todoList.push(node);
    //render the list element to the page
    items.appendChild(node);
    listInput.value = '';
    
      
})
//this function mark the list by changing text color and strike through
items.addEventListener('click', (e) => e.target.classList.add('text-primary', 'text-decoration-line-through'));

//this function removes an element from the list
items.addEventListener('dblclick', function(e){
    
   let x = e.target.textContent;
   // remove the element from todoList
   todoList.forEach(element => {
      if(element.textContent === x){
         let index = todoList.indexOf(element);
          todoList.splice(index, 1);
          console.log(todoList);
      }
      //remove the list element from the page
      e.target.remove();
  });   
})

