// Part 1: Adding To Do List 

// -----Get ELements By ClassName---- //

//grabbing variables 
var header = document.getElementById('header-title');

//style
header.style.borderBottom = 'solid 4px grey'             // Bottom of Border Color: Header

// Adding Color to List Items

    // All List Items Grey
var items = document.querySelector('#list-unordered');///items[1].style.backgroundColor = 'lightgrey';    // makes single list item background color
//items[3].style.backgroundColor = 'lightgrey';
console.log(items);   // log in variable      // parent is 'items' var (variable)
/*
for(var i=0; i < items.length; i++) {
    items[i].style.backgroundColor = 'lightgrey';
}
*/
let newInput = document.querySelector('#new-item');     // input 'id' attribute
console.log(newInput );
console.log(newInput);
// Create new <li> element



// Allow list items to appear on screen from 'bootstrap'
// var items = document.getElementsByClassName('list-group');  // for list
// console.log(items);

// Part 3: Delete Buttons

// var doList = document.getElementById('list');   // for <ul> 
let addButton = document.querySelector('#add-button');

addButton.addEventListener('click', function(event){
   console.log(event.target, event.currentTarget);

    let newLI = document.querySelector('li.list-group-item');
    newLI.innerHTML = prompt("Enter to do:");
    parentUL.appendChild(newLI);
    console.log("hi")
    alert('clicked!')


})



// Create an Event to remove items      // Part 1


/*    
    // Add .class
    list.className = 'list-group-item';
    
    // Add text node[array list] with input
    list.appendChild(document.createTextNode(newInput));     // allows user to input text, and input box is cleared out once 'Add' button is clicked

// Add text is cont'd below until line 68

    // (1) Create a delete button & (2) add new item to list

        // 1. Delete Button
    var del = document.createElement('button'); // when user clicks on button, it is removed

        // 1a. Add Classes to Delete Button
    del.className = 'btn btn-danger btn-sm float-right delete';

        // 1b. Append text node (logo/symbol/name) inside of button
    del.appendChild(document.createTextNode('-'));

        // 1c. Append(add) button to list (right-align)
    list.appendChild(del);

        // 2. Add new item to list
    doList.appendChild(list);   // will be added to bottom of 'to do list'


// End of Add to List    
}

*/

// Leo's Code

var parentUL = document.querySelector('ul.list-unordered');
let button = document.getElementById('bu');
console.log(parentUL)
button.addEventListener('click', function(event) { 
    console.log(event.target, event.currentTarget);

    let newLI = document.querySelector('li.list-group-item');
    newLI.innerHTML = prompt("Enter to do:");
    parentUL.appendChild(newLI);
    console.log("hi")
});


// Remove list      // Part 2
        // REMINDER: Reload page and list will re-appear.
// function removeItem(element) {
//     if(element.target.classList.contains('delete')) {
//         if(confirm('Do you want to remove this item?')){
//             var list = element.target.parentElement;    // parentElement (list item), child is the (remove button)
//             doList.removeChild(list);   // doList(parent), list(child)
//         }
//     }
// }

// Create an Event to remove items      // Part 2
//doList.addEventListener('click', removeItem); 

      // Part 2 is on line (cannot remove items without 2nd step)