let jobType = "loadOnly";

document.getElementById("jobType").addEventListener("change", function () {
  // Hide all elements initially
  document.getElementById("loadOnly").style.display = "none";
  document.getElementById("unloadOnly").style.display = "none";
  document.getElementById("fullMove").style.display = "none";

  jobType = this.value;
  // Show the relevant form elements based on selection
  if (jobType === "loadOnly") {
    document.getElementById("loadOnly").style.display = "block";
  } else if (jobType === "unloadOnly") {
    document.getElementById("unloadOnly").style.display = "block";
  } else if (jobType === "fullMove") {
    document.getElementById("fullMove").style.display = "block";
  }
});

function jobSubmit(event) {
  event.preventDefault();

  //variables via queryselector -6 variables
  const zipcodeLoad =
    document.querySelector(`#${jobType} #zipcodeLoad`)?.value || "";
  const numberWorkersLoad =
    document.querySelector(`#${jobType} #numberWorkersLoad`)?.value || "";
  const rateWorkersLoad =
    document.querySelector(`#${jobType} #rateWorkersLoad`)?.value || "";

  const zipcodeUnload =
    document.querySelector(`#${jobType} #zipcodeUnload`)?.value || "";
  const numberWorkersUnload =
    document.querySelector(`#${jobType} #numberWorkersUnload`)?.value || "";
  const rateWorkersUnload =
    document.querySelector(`#${jobType} #rateWorkersUnload`)?.value || "";
console.log(zipcodeLoad)
console.log(zipcodeUnload)
  const load = {
    job_type: "Load",
    number_workers: numberWorkersLoad,
    cost_per_worker: rateWorkersLoad,
    zipcode: zipcodeLoad,
  };

  const unload = {
    job_type: "Unload",
    number_workers: numberWorkersUnload,
    cost_per_worker: rateWorkersUnload,
    zipcode: zipcodeUnload,
  };
  const promises = [];

  if (load.zipcode.length > 0) {
    promises.push(
      fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(load),
      })
    );
  }

  if (unload.zipcode.length > 0) {
    promises.push(
      fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(unload),
      })
    );
  }
  Promise.all(promises)
    .then(() => {
      location.replace("/jobs");
    })
    .catch((err) => console.error(err, "Please Try Again."));
}

document
  .querySelector(".create-job-format")
  .addEventListener("submit", jobSubmit);
