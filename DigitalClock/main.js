$(document).ready(function () {
  function showTime() {
    // To get current time/date
    var date = new Date();

    // Make variables to get hours, minutes, and seconds
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    // AM, PM settings
    var session = "AM";

    // Conditions for time behavior
    if (hours == 0) {
      hours = 12;
    }
    if (hours >= 12) {
      session = "PM";
    }
    if (hours > 12) {
      hours = hours - 12;
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Set the variable to span
    $("#hours").text(hours);
    $("#min").text(minutes);
    $("#sec").text(seconds);
    $("#period").text(session);

    // To change time in every seconds
    setTimeout(showTime, 1000);
  }

  // Call the function
  showTime();
});
