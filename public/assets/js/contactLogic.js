$(document).ready(function() {
	
	var usernameInput = $('#nameInput'); 
	var emailInput = $('#emailInput');
  var messageInput = $('#messageInput');
  var messageForm = $('#createMessage');

	// Adding an event listener for when the form is submitted
  $(messageForm).on("submit", handleFormSubmit);

  // A function for handling what happens when the form creates a new message and it's submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the message if we are missing a name, email or message 
    if (!usernameInput.val().trim() || !emailInput.val().trim() || !messageInput.val().trim()) {
      alert("Please fill out all portions of the form to send a message.")
      return;
    }
    // Constructing a newMessage object to hand to the database
    var newMessage = {
      username: usernameInput
        .val()
        .trim(),
      email: emailInput
        .val()
        .trim(),
      message: messageInput
      	.val()
      	.trim(),
    };
    console.log(newMessage);
    submitMessage(newMessage);
  };

  // Submits a new message post and brings user to home page upon completion
  function submitMessage(message) {
    console.log(message);
    $.post("/admin/messages", message, function() {
      window.location.href = "/contact";
      alertUser();
    });
  }

  function alertUser() {
    alert("Thank you for contacting me! Your message has been sent successfully!")
  };
});