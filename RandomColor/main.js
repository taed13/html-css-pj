$(document).ready(function () {
  $("#btn-generate").click(function () {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    $(".color-site").css("background-color", "#" + randomColor);

    $(".site-copy").css("color", "#" + randomColor);
    $(".site-copy").css("border-color", "#" + randomColor);

    $(".btn-copy").css("background-color", "#" + randomColor);

    $(".color-code").text("#" + randomColor);
  });

  $("#btn-copy").click(function () {
    var copyText = document.getElementById("color-code");
    alert(copyText.innerHTML);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  });
});
