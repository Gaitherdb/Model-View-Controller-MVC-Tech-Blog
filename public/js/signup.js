const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  console.log(password.length)
    if (name && email && password && password.length >= 8) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    } else {
        alert("Make sure your name and email are correct and your password is at least 8 characters long.")
    }
  };

  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  