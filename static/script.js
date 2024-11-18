document.getElementById("experiment-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Fetch form data
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;
    const step_num = document.getElementById("step_num").value;

    // Make a POST request to run the experiment
    fetch("/run_experiment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ start: start, end: end, step_num: step_num }),
    })
        .then((response) => response.json())
        .then((data) => {
            const resultsDiv = document.getElementById("results");
            const datasetImg = document.getElementById("dataset-img");
            const parametersImg = document.getElementById("parameters-img");

            // Append a timestamp to force the browser to load new images
            const timestamp = new Date().getTime();

            if (data.dataset_img) {
                datasetImg.src = `${data.dataset_img}?t=${timestamp}`;
                datasetImg.style.display = "block";
            }

            if (data.parameters_img) {
                parametersImg.src = `${data.parameters_img}?t=${timestamp}`;
                parametersImg.style.display = "block";
            }

            resultsDiv.style.display = "block";
        })
        .catch((error) => console.error("Error running experiment:", error));
});