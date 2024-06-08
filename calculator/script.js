let input = document.getElementById("input-box");
let button = document.querySelectorAll("button");
let operation = "";
for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', (event) =>{
        if(event.target.innerHTML == '='){
            operation = eval(operation);
            input.value = operation;
        }
        else if(event.target.innerHTML == 'AC'){
            operation = "";
            input.value = operation;
        }
        else if(event.target.innerHTML == 'DEL'){
            operation = operation.substring(0, operation.length - 1);
            input.value = operation;
        }
        else{
            operation += event.target.innerHTML;
            input.value = operation;
        }
    });
}