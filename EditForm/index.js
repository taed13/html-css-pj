// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnSave = document.getElementById("save");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";

  // get data of form
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  console.log("1. take data from form: ", name, email);

  // set data to form of modal
  document.getElementById("nameModal").value = name;
  document.getElementById("emailModal").value = email;
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

btnSave.onclick = function () {
  event.preventDefault();

  var nameModal = document.getElementById("nameModal").value;
  var emailModal = document.getElementById("emailModal").value;

  console.log("2. take data from modal: ", nameModal, emailModal);

  document.getElementById("name").value = nameModal;
  document.getElementById("email").value = emailModal;

  modal.style.display = "none";
};
