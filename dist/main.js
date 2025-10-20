import { series } from "./Data.js";
const tableBody = document.getElementById("series-body");
const averageRow = document.getElementById("average-row");
// --- Mostrar series ---
function showSeries() {
    series.forEach((serie) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        tableBody.appendChild(row);
    });
}
// --- Calcular promedio de temporadas ---
function getAverageSeasons() {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / series.length;
}
// --- Mostrar promedio ---
function showAverage() {
    const average = getAverageSeasons();
    averageRow.textContent = `Promedio de temporadas: ${average.toFixed(2)}`;
}
// --- Llamar funciones ---
showSeries();
showAverage();
