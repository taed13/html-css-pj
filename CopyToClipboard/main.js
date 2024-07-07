$(document).ready(function () {
  // Make two functions to add and remove the class in the span
  function add() {
    $(".copied").addClass("bounce-effect");
  }
  function remove() {
    $(".copied").removeClass("bounce-effect");
  }

  // Call the functions and copy the text to button click
  $(".copy-btn").click(function () {
    $("#textField").select();
    document.execCommand("copy");
    add();
    setTimeout(remove, 1000);
  });
});
