import { Serie } from "./Serie.js";
import { series } from "./Data.js";

const tableBody: HTMLElement = document.getElementById("series-body")!;
const averageRow: HTMLElement = document.getElementById("average-row")!;

const card: HTMLElement = document.getElementById("card-detail")!;
const cardImg: HTMLImageElement = document.getElementById("card-img") as HTMLImageElement;
const cardTitle: HTMLElement = document.getElementById("card-title")!;
const cardText: HTMLElement = document.getElementById("card-text")!;
const cardLink: HTMLAnchorElement = document.getElementById("card-link") as HTMLAnchorElement;

function showSeries(): void {
  series.forEach((serie) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${serie.id}</td>
      <td class="text-primary" style="cursor:pointer;">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    // Evento click
    row.querySelector("td:nth-child(2)")?.addEventListener("click", () => {
      showSerieDetail(serie);
    });
    tableBody.appendChild(row);
  });
}

function getAverageSeasons(): number {
  const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
  return totalSeasons / series.length;
}

function showAverage(): void {
  const average = getAverageSeasons();
  averageRow.textContent = `Seasons average: ${average.toFixed(2)}`;
}

function showSerieDetail(serie: Serie): void {
  card.style.display = "block";
  cardImg.src = serie.image;
  cardTitle.textContent = serie.name;
  cardText.textContent = serie.description;
  cardLink.href = serie.website;
}

showSeries();
showAverage();
