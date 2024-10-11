// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission

//     const recaptchaResponse = grecaptcha.getResponse();
//     if (recaptchaResponse.length === 0) {
//         alert('Please complete the reCAPTCHA.');
//         return;
//     }

//     // Create a FormData object to send the form data
//     const formData = new FormData(this);
//     formData.append('g-recaptcha-response', recaptchaResponse); // Append reCAPTCHA response

//     // Use fetch to send form data to Formspree
//     fetch(this.action, {
//         method: 'POST',
//         body: formData,
//     })
//     .then(response => {
//         if (response.ok) {
//             alert('Message sent successfully!');
//             this.reset(); // Reset the form
//             grecaptcha.reset(); // Reset reCAPTCHA
//         } else {
//             alert('Error sending message. Please try again.');
//         }
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         alert('Error sending message. Please try again.');
//     });
// });
