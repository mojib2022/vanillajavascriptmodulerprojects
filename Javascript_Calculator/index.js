//Assigning the dom element to the result variable 
var result = document.getElementById('result');


// Display Function to display the user inputs as well as result in the text box
function display(str){
    result.value +=str;
}
//End of Display function 


//clear function to clear the user input field as well result field
function clr(){
    result.value = '';
}
//End of Clear Function 


// Calculation function 
function calculate(){
    var value = result.value;
    result.value = eval(value);
}
//End of Calculator function 
