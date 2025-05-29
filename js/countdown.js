document.addEventListener('DOMContentLoaded', function() {
    var hoursDisplay = document.getElementById('hours');
    var minutesDisplay = document.getElementById('minutes');
    var secondsDisplay = document.getElementById('seconds');
  
    var endTime = localStorage.getItem('endTime');
    if (!endTime) {
      var now = new Date();
      endTime = new Date(now.getTime() + 24 * 60 * 60 * 1000).getTime(); // Set end time to 24 hours from now
      localStorage.setItem('endTime', endTime);
    }
  
    function updateTimer() {
      var now = new Date().getTime();
      var timeLeft = endTime - now;
  
      var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      hoursDisplay.textContent = padZero(hours);
      minutesDisplay.textContent = padZero(minutes);
      secondsDisplay.textContent = padZero(seconds);
    }
  
    function padZero(num) {
      return (num < 10 ? '0' : '') + num;
    }
  
    updateTimer(); // Update timer immediately on page load
    setInterval(updateTimer, 1000);
  });
  