function updateDisplay(newValue){
    //find the display box

   var display = document.getElementById('display');

    var validInput = true;
      
    switch (newValue){
        case '': 
            display.innerHTML = '';
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
             display.innerHTML += newValue;
             break;
        case '+':
        case '-':
        case '*':
        case '/':
            //if the current content in display box ends with 
            // + - * / then 
                // do nothing
            if (display.innerHTML.endsWith('+') || display.innerHTML.endsWith('-') || display.innerHTML.endsWith('*') || display.innerHTML.endsWith('/')){
                break;
            }
            display.innerHTML += newValue;
            break;
        case '=':
            let results = eval(display.innerHTML);
            
            display.innerHTML = results;
            break;
        default:
            break; 
            
            
    }

  



}
function getResults(){
    var problem = document.getElementById('display');

        

        problem.innerHTML = math.evaluate(problem);

        display.innerHTML = problem;
}