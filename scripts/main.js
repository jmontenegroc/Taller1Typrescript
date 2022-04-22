import { series } from "./src/data.js";
function showSeriesTable(data) {
    var body = document.getElementById("seriesbody");
    data.forEach(function (value) {
        var values = document.createElement("tr");
        values.innerHTML = "<td>".concat(value.id, "</td>\n        <td>").concat(value.name, "</td>\n        <td>").concat(value.channel, "</td>\n        <td>").concat(value.seasons, "</td>");
        body.appendChild(values);
    });
}
function avg(data) {
    var div = document.getElementById("table");
    var average = 0;
    var count = 0;
    data.forEach(function (value) {
        average += value.seasons;
        count++;
    });
    average /= count;
    var text = document.createElement("h2");
    text.innerHTML = "Seasons average = ".concat(average);
    div.appendChild(text);
}
showSeriesTable(series);
avg(series);
