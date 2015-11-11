window.onload = function(){

  var submitButton = document.querySelector('form div:last-child input');
  var inputColors = document.querySelectorAll('input');
  var body = document.querySelector('body');
  var today = new Date(Date.now()).getDay()

  var dayColors = {};

  getDayColorsFromLocalStorage()

  submitButton.addEventListener("click", function(event){
    event.preventDefault();

    updateDayColors(dayColors, inputColors);

    setColors();

    addToLocalStorage(dayColors);
  })

  function setColors(){
    var todaysColor = dayColors[today];
    body.style.backgroundColor = todaysColor;
  }

  function getDayColorsFromLocalStorage(){
    if (window.localStorage.colorData) {
      var colorData = JSON.parse(window.localStorage.colorData);
      var todaysColor = colorData[today];
      body.style.backgroundColor = todaysColor;
    }
  }

  function updateDayColors(dayObject, inputs){
    for (var i = 0; i < inputs.length -1; i++) {
      var colorValue = inputs[i].value;
      var day = inputs[i].id
      dayObject[day] = colorValue;
    }
  }

  function addToLocalStorage(data){
    data = JSON.stringify(data);
    window.localStorage.colorData = data
  }

}
