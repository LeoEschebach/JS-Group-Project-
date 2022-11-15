const parentUL = document.querySelector('ul');
let button = document.querySelector("button");

button.addEventListener('click', function(event) { 
    let newLI = document.createElement('li');
    newLI.innerHTML = prompt("Enter to do:");
    parentUL.appendChild(newLI);
});

