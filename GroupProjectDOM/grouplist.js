// Part 1: Adding To Do List 

// -----Get ELements By ClassName---- //

// Bottom of Border Color: Header
var header = document.getElementById('header-title');
header.style.borderBottom = 'solid 4px grey'            // border

// Adding Color to List Items

     // All List Items Grey
var items = document.getElementsByClassName('list-group-item');
items[1].style.backgroundColor = 'lightgrey';    // makes single list item background color
items[3].style.backgroundColor = 'lightgrey';


/*
for(var i=0; i < items.length; i++) {
    items[i].style.backgroundColor = 'lightgrey';
}
*/

// Allow list items to appear on screen from 'bootstrap'
var items = document.getElementsByClassName('list-group');  // for list
console.log(items);

// Part 3: Delete Buttons

var doList = document.getElementById('list');   // for <ul> 

// Create an Event to remove items      // Part 1
doList.addEventListener('click', removeItem);       // Part 2 is on line (cannot remove items without 2nd step)


/*
// Add to List
function addList(element) {
    element.preventDefault();

    // Get value for new <input> item .value
    var newInput = document.getElementById('new-item').value;     // input 'id' attribute

    // Create new <li> element
    var list = document.createElement('list')
    
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
const parentUL = document.querySelector('ul');
let button = document.getElementById('bu');

button.addEventListener('click', function(event) { 
    let newLI = document.createElement('list');
    newLI.innerHTML = prompt("Enter to do:");
    parentUL.appendChild(newLI);
});


// Remove list      // Part 2
        // REMINDER: Reload page and list will re-appear.
function removeItem(element) {
    if(element.target.classList.contains('delete')) {
        if(confirm('Do you want to remove this item?')){
            var list = element.target.parentElement;    // parentElement (list item), child is the (remove button)
            doList.removeChild(list);   // doList(parent), list(child)
        }
    }
}

// Create an Event to remove items      // Part 2
doList.addEventListener('click', removeItem); 