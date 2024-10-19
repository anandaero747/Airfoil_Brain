document.getElementById("uploadForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById("fileInput");
    formData.append("file", fileInput.files[0]);

    const response = await fetch("https://your-backend-service-url.com/upload", {
        method: "POST",
        body: formData,
    });

    const data = await response.json();
    displayResults(data);
});

function displayResults(data) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h2>Results</h2>
        <img src="${data.cl_plot_url}" alt="Cl Plot">
        <img src="${data.cd_plot_url}" alt="Cd Plot">
        <img src="${data.cm_plot_url}" alt="Cm Plot">
        <a href="${data.csv_url}" download="coefficients.csv">Download Coefficients</a>
    `;
}

