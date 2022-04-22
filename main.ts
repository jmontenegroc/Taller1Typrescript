import { Serie } from "./serie.js";
import {series} from "./src/data.js"


function showSeriesTable(data: Serie[]) :void
{
    let body:HTMLElement = document.getElementById("seriesbody")!;
    data.forEach(function (value): void{
        let values = document.createElement("tr")
        values.innerHTML =`<td>${value.id}</td>
        <td>${value.name}</td>
        <td>${value.channel}</td>
        <td>${value.seasons}</td>`
        body.appendChild(values);
    });
}
function avg(data:Serie[]): void
{
    let div:HTMLElement = document.getElementById("table")!;
    let average: number= 0;
    let count: number= 0;
    data.forEach(function (value): void
    {
        average+=value.seasons
        count++;
    })
    average/=count;
    let text = document.createElement("h2");
    text.innerHTML = `Seasons average = ${average}`
    div.appendChild(text);
}
showSeriesTable(series);
avg(series);