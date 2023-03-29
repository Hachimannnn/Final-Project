function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const feedbackData = {
      name: name,
      email: email,
      message: message
    };
    
    localStorage.setItem('feedback', JSON.stringify(feedbackData));

    location.replace('content.html');
  }
