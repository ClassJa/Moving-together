// const accepJBtn = document.querySelector('#jobSignUpBtn')

// accepJBtn.addEventListener("click", async () => {
//     const jobId = button.dataset.id; // Get the job_id from the button's data attribute
//     console.log(jobId)
//     const jobStatus = true; // Set the job status value to be sent

//     try {
//       const updateResponse = await fetch(`/api/jobs/${jobId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ job_status: jobStatus })
//       });

//       if (updateResponse.ok) {
//         console.log('Job status updated successfully!');
//         location.reload(); // Reload the page to reflect the changes on the client side
//       } else {
//         console.error('Failed to update job status.');
//       }
//     } catch (error) {
//       console.error('Error updating job status:', error);
//     }
// });
