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