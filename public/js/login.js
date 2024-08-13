const loginHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#ret-email').value.trim();
    const password = document.querySelector('#ret-password').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/welcomeBack');
        } else {
          alert('Failed to log in');
        }
    }
};

// document.querySelector('.login').addEventListener('submit', loginHandler);
document.querySelector('.form-format').addEventListener('submit', loginHandler);

