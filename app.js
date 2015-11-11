window.onload = function(){

  var submitButton = document.querySelector('form div:last-child input');
  var inputColors = document.querySelectorAll('input');
  var body = document.querySelector('body');
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

  function updateDayColors(){
    for (var i = 0; i < inputColors.length -1; i++) {
      var colorValue = inputColors[i].value;
      var day = inputColors[i].id
      dayColors[day] = colorValue;
    }
  }

  function addToLocalStorage(){
    data = JSON.stringify(dayColors);
    window.localStorage.colorData = data
  }

}
