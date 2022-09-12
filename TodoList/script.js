//Initialise objects by getting the dom elements
const btn = document.querySelector('.btn');
const items = document.querySelector('.items');


//Function to add Tasks
btn.addEventListener('click',()=>{
    var newItem = document.createElement('li');
    newItem.classList.add('center');
    
    var newItemText = document.querySelector('.txt').value;
    var deleteIcon = document.createElement('i');

    
    deleteIcon.classList.add('fa');
    deleteIcon.classList.add('fa-trash-o');
    deleteIcon.addEventListener('click',del);
    
    newItem.innerHTML = newItemText;
    newItem.appendChild(deleteIcon);
    items.append(newItem);

})
// End of Add tasks function


//Delete Tasks Function
function del(e){
    const element = e.target;
    if(element.classList[0]=='fa')
    {
        element.parentElement.remove();
    }
}
//End of Delete Tasks Function




