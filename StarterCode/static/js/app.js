// from data.js
var tableData = data;
var tbody = d3.select("tbody");

function initializeTable() {
    tbody.html("");
    tableData.forEach((sighting) => {
        var row = tbody.append("tr")
        Object.entries(sighting).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        })
    })
}

function filterButton() {
    d3.event.preventDefault();
    var dateTime = d3.select("#datetime");
    var userInput = dateTime.property("value");
    var filteredData = data;
    if (userInput) {
        filteredData = filteredData.filter(sighting => sighting.datetime == userInput)
    }
    tbody.html("");
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr")
        Object.entries(sighting).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        })
    })
}

var button = d3.select("#filter-btn");
button.on("click", filterButton);

initializeTable(tableData);

//var filter = d3.select("#filter-btn");

//filter.on("click", function () {
    //d3.select("tbody").html("");
    //d3.preventDefault();
    //var dateTime = d3.select("#datetime").property("value");
    //console.log(datetime);
    //var filteredData = tableData.filter(record => record.datetime === dateTime);
    //console.log(filteredData)
    //filteredData.forEach((sighting) => {
        //var row = tbody.append("tr")
        //Object.entries(sighting).forEach(function ([key, value]) {
            //console.log(key, value);
            //var cell = row.append("td");
            //cell.text(value);
        //})
    //})
//})