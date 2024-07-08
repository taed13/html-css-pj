$(document).ready(function () {
  $(".input-field").focusout(function () {
    // Make floating label more accureate
    var inputValue = $(this).val();
    if (inputValue === "") {
      $(this).removeClass("has-value");
    } else {
      $(this).addClass("has-value");
    }
  });
});
