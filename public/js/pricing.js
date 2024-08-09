// const pricing = async (event) => {
//   event.preventDefault();

//   const pricingLink = document.querySelector('#pricingLink');
//   pricingLink.onlClick ({
//     const response = await fetch('/api/pricing', {
//       method: 'POST'
//      }) 
//   })

 // }

// const pricing = async (event) => {
//   event.preventDefault();

//   const pricingLink = document.querySelector('#pricingLink');
//   pricingLink.onClick = async () => {
//     try {
//       const response = await fetch('/api/pricing', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         }       
//       });

//       if (response.ok) {
//         // Redirect to a different page upon successful fetch
//         window.render()
//       } else {
//         throw new Error('Failed to fetch project page');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
// };

// // Call the pricing function when the page loads or when needed
// pricing();

const pricing = async () => {
  try {
    const response = await fetch('/api/pricing', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const compData = await response.json();
      // Render the compensation data to the Handlebars template
      // Example: document.querySelector('#compensationContainer').innerHTML = yourRenderedData;
    } else {
      throw new Error('Failed to fetch compensation data');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

// Attach the event listener to the pricing link
document.addEventListener('DOMContentLoaded', () => {
  const pricingLink = document.querySelector('#pricingLink');
  pricingLink.addEventListener('click', pricing);
});