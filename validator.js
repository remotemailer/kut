document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorOutput = document.getElementById("errorOutput");

    // Clear any previous error messages
    errorOutput.innerHTML = "";

    // Validate credentials
    if (username === "babiecassie70@yahoo.com" && password === "Daniel123@") {
      alert("Login successful!");
      window.location.assign("./dashboard.html"); //change this to URL after hosting

      // Close modal on successful login
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("loginModal")
      );
      modal.hide();
    } else {
      errorOutput.innerHTML = "Incorrect username or password.";
    }
  });
