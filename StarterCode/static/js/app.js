// from data.js
var tableData = data;
var tbody = d3.select("tbody");

function createTable(data) {
    tbody.html("");
    data.forEach((sighting) => {
        var row = tbody.append("tr")
        Object.entries(sighting).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        })
    })
}

var filter = d3.select("#filter-btn");

filter.on("click", function () {
    d3.select("tbody").html("");
    d3.preventDefault();
    var dateTime = d3.select("#datetime").property("value");
    console.log(datetime);
    var filteredData = tableData.filter(record => record.datetime === dateTime);
    console.log(filteredData)
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr")
        Object.entries(sighting).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        })
    })
})