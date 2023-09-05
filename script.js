

window.addEventListener("scroll", function() {
    var nav = document.querySelector(".navbar");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });




 




  document.getElementById("sendMessageBtn").addEventListener("click", function(event) {
    event.preventDefault();

    // Get the input fields and textarea
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageTextarea = document.getElementById("message");

    // Check if the name input is empty
    if (nameInput.value.trim() === "") {
      nameInput.style.border = "1px solid red";
    } else {
      nameInput.style.border = "1px solid #ccc"; // Reset border if not empty
    }

    // Check if the email is valid using a simple regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailInput.style.border = "1px solid red";
    } else {
      emailInput.style.border = "1px solid #ccc"; // Reset border if valid email
    }

    // Check if the message textarea is empty
    if (messageTextarea.value.trim() === "") {
      messageTextarea.style.border = "1px solid red";
    } else {
      messageTextarea.style.border = "1px solid #ccc"; // Reset border if not empty
    }

    // Prevent form submission if any of the fields are empty or the email is invalid
    if (nameInput.value.trim() === "" || !emailPattern.test(emailInput.value.trim()) || messageTextarea.value.trim() === "") {
      return false;
    }

    // Form is valid, send the email
    sendEmail();

    // Optionally, you can use AJAX or other methods to send the form data to the server for further processing.
  });

  function sendEmail() {
    const recipientEmail = "roumaissabellahouel@gmail.com"; // Replace with your recipient email address
    const senderName = document.getElementById("name").value;
    const senderEmail = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    Email.send({
      To: recipientEmail,
      From: senderEmail,
      Subject: "Message from your website",
      Body: `Name: ${senderName}\nEmail: ${senderEmail}\nMessage: ${message}`,
    }).then(
      function (message) {
        console.log("Email sent successfully:", message);
        alert("Email sent successfully");
        // Optionally, you can reset the form fields after a successful submission.
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      },
      function (error) {
        console.error("Error sending email:", error);
        alert("Failed to send email");
      }
    );
  }




  // function sendEmail(){
  //   Email.send({
  //     Host : "smtp.gmail.com",
  //     Username : "roumaissabellahouel31@gmail.com",
  //     Password : "Roumaissa31@",
  //     To : 'roumaissabellahouel31@gmail.com',
  //     From : document.getElementById("email").value,
  //     Subject : "portfolio client ",
  //     Body : "And this is the body"
  // }).then(
  //   message => alert(message)
  // );
  // }

  // function sendEmail() {
  //   emailjs.init("roumaissabellahouel31@gmail.com"); // Replace "user_your_emailjs_user_id" with your Email.js user ID

  //   const emailParams = {
  //     to_email: 'roumaissabellahouel31@gmail.com', // Replace with your recipient email address
  //     from_email: document.getElementById("email").value,
  //     subject: "portfolio client",
  //     body: "And this is the body",
  //   };

  //   emailjs.send("your_emailjs_service_id", "your_emailjs_template_id", emailParams)
  //     .then(
  //       function(response) {
  //         console.log("Email sent:", response);
  //         alert("Email sent successfully");
  //       },
  //       function(error) {
  //         console.log("Email failed:", error);
  //         alert("Failed to send email");
  //       }
  //     );
  // }