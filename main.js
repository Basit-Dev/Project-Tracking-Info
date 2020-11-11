/* When the user clicks on the button, #foot between hiding and showing the dropdown content */

function myFunction() {

    
    document.getElementById("myDropdown").classList.toggle("show");
    var element = document.getElementById("body");
    element.classList.toggle("toggle_cta"); 


}  
  // Close the dropdown if the user clicks outside of it 
