// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var dateSelect = d3.select("#datetime")
var filterButton = d3.select("fitler-btn")
var resetButton = d3.select("#reset-btn")

function cTable(data) {
    tbody.html("");
    data.forEach((sighting) => {
        var row = tbody.append("tr")
        Object.entries(sighting).forEach(function([key, value]) {
            console.log(key, value);
            var addVal = row.append("td")
            addVal.text(value);
        })
    })
}

function clickButton() {

}