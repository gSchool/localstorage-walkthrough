window.onload = function(){

  var submitButton = document.querySelector('form div:last-child input');
  var inputColors = document.querySelectorAll('input');
  var body = document.querySelector('body');

  // returns day of the week, with 0 being Sunday, 1 being Monday, 2 being Tuesday, etc
  var today = new Date(Date.now()).getDay()

  var dayColors = {};

  getDayColorsFromLocalStorage()

  submitButton.addEventListener("click", function(event){
    event.preventDefault();
    updateDayColors();
    setColors();
    addToLocalStorage();
  })

  function setColors(){
    // set the background color to todays color
  }

  function getDayColorsFromLocalStorage(){
    // check if window.localStorage.colorData is not undefined
    // JSON.parse the colorData
    // Updated the background color to todays color using the today as the key
  }

  function updateDayColors(){
    // loop through the input boxes that are type color
    // Get their values and ids
    // Add it to the dayColors object where the key is the id of each input i.e. monday's input id="1"
  }

  function addToLocalStorage(){
    // stringify the dayColors object
    // save it to localStorage as window.localStorage.colorData
  }

}
