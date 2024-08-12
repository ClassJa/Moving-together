console.log("Hi")
const signupHandler = async (event) => {
    event.preventDefault();

    const f_name = document.querySelector('#f_name').value.trim();
    const l_name = document.querySelector('#l_name').value.trim();
    const z_code = document.querySelector('#z_code').value.trim();
    const is_worker = document.querySelector('#checkbox').checked;
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (f_name && l_name && z_code && email && password) {
        const response = await fetch('/api/users/', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          if(is_worker){
            document.location.replace('/api/jobs/');
          } else{
            document.location.replace('/api/projects/');
          }
        } else {
          alert('Failed to log in');
        }
    }
};


document.querySelector('.sign-up').addEventListener('submit', { 
  signupHandler
});

