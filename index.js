/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/



function greet(strTime){
  const time = parseInt(strTime);
  
   if (time < 12)
   {
     return "Good Morning";
   }
   else if (time > 12 && time < 5)
   {
     return "Good Aftrnoon";
   }
}

function displayMessage(message){

}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
