import { series } from "./Data.js";
const tableBody = document.getElementById("series-body");
const averageRow = document.getElementById("average-row");
const card = document.getElementById("card-detail");
const cardImg = document.getElementById("card-img");
const cardTitle = document.getElementById("card-title");
const cardText = document.getElementById("card-text");
const cardLink = document.getElementById("card-link");
function showSeries() {
    series.forEach((serie) => {
        var _a;
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${serie.id}</td>
      <td class="text-primary" style="cursor:pointer;">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        // Evento click
        (_a = row.querySelector("td:nth-child(2)")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            showSerieDetail(serie);
        });
        tableBody.appendChild(row);
    });
}
function getAverageSeasons() {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / series.length;
}
function showAverage() {
    const average = getAverageSeasons();
    averageRow.textContent = `Seasons average: ${average.toFixed(2)}`;
}
function showSerieDetail(serie) {
    card.style.display = "block";
    cardImg.src = serie.image;
    cardTitle.textContent = serie.name;
    cardText.textContent = serie.description;
    cardLink.href = serie.website;
}
showSeries();
showAverage();
