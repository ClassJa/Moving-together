// console.log("Hi")
// const loginHandler = async (event) => {
//     event.preventDefault();

//     const email = document.querySelector('#email').value.trim();
//     const password = document.querySelector('#password').value.trim();

//     if (email && password) {
//         const response = await fetch('/api/users/login', {
//           method: 'POST',
//           body: JSON.stringify({ email, password }),
//           headers: { 'Content-Type': 'application/json' },
//         });
    
//         if (response.ok) {
//           document.location.replace('/');
//           res.render('/welcome-back')
//         } else {
//           alert('Failed to log in');
//         }
//     }
// };

// document.querySelector('.sign-up').addEventListener('submit', {
//   loginHandler
  
// });

