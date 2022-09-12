/**Getting Dom element in the variables */
var navigation_wrapper = document.querySelector('.navigation-wrapper');
var lines = document.getElementById('lines');
/**End of getting Dom Element in the variables */

//Function to toggle the Class Name in the menu
lines.addEventListener('click',()=>{
    navigation_wrapper.classList.toggle('change');
});