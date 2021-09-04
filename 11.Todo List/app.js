// The Javascript Functionality For the Todo App // 

// Step 1 : Grab all the Required Elements : 


let inputElement = document.querySelector(".form-control");   // input element

let button = document.querySelector(".btn");   // submit button

let form = document.forms[0];  // form element

let listElement = document.querySelector(".list-group");   // ul element
 
let totalTask = document.getElementById("task");  // task manager


let taskList = [];


function deleteItem(e) {
    let del = e.target.parentElement.parentElement.textContent;
    let index = taskList.indexOf(del);
    if (index !== -1){
        taskList.splice(index, 1);
    }
    populateList();
}


function populateList() {

    listElement.innerHTML = "";

    taskList.forEach(function(item) {

        // create an new <li> </li> Element.
            let newLi = document.createElement("li");
            newLi.classList.add("list-group-item");
            newLi.classList.add("bg-light");
           

        // create an new TextNode element for text.
            let textNode = document.createTextNode(item);
        
        // Append the child(textNode) to parent(<li>);
            newLi.appendChild(textNode);

        // create an anchor link : 
            newAnchor = document.createElement("a");
            newAnchor.classList.add("btn");
            newAnchor.classList.add("btn-outline-danger");
            newAnchor.classList.add("btn-sm");
            newAnchor.classList.add("m-1");
            newAnchor.setAttribute("role","button");


        // create delete icon to the list here 
            newIcon = document.createElement("i");
            newIcon.classList.add("far");
            newIcon.classList.add("fa-trash-alt");


        // Delete the <li> element when anchor delete button is clicked.

            newAnchor.addEventListener("click", (e) => deleteItem(e));

        // Append the child(newIcon) to parent (newAnchor)
            newAnchor.appendChild(newIcon);
        
        // append the child (i) to the parent (anchor) 
            newLi.appendChild(newAnchor);


        // Adding the li to UL
            listElement.appendChild(newLi);
    });

        totalTask.innerText = taskList.length;
        inputElement.value = "";
}
    // Function Calling.... 

        populateList();

        function checkEmpty(s) {
            let str = s.trim();
            return str.length>0
        }


        function addTask() {
            if (inputElement.value && checkEmpty(inputElement.value) && !taskList.includes(inputElement.value)){
                taskList.push(inputElement.value);
                populateList();
            }
            inputElement.value = "";
        }
                
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            addTask();
        });





