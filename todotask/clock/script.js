function startClock() {
    var hourHand = document.querySelector(".hour-hand");
    var minuteHand = document.querySelector(".minute-hand");
    var secondHand = document.querySelector(".second-hand");
  
    function rotateClockHands() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
  
      var hourRotation = (hours + minutes / 60) * 360 / 12;
      var minuteRotation = (minutes + seconds / 60) * 360 / 60;
      var secondRotation = (seconds + now.getMilliseconds() / 1000) * 360 / 60;
  
      hourHand.style.transform = `rotate(${hourRotation}deg)`;
      minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
      secondHand.style.transform = `rotate(${secondRotation}deg)`;
    }
  
    rotateClockHands();
    setInterval(rotateClockHands, 1000);
  }
  
  startClock();
  