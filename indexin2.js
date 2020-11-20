
function total() {
  var osoite = "https://api.covid19api.com/world/total";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", osoite, true);
  xmlhttp.send();


  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      jsonObj = JSON.parse(xmlhttp.responseText);

      document.getElementById("eka").innerHTML =
 
        "Total cases: " +
        jsonObj.TotalConfirmed;

        document.getElementById("toka").innerHTML =
   
          "Recovered: " +
          jsonObj.TotalRecovered;

          document.getElementById("neljas").innerHTML =
   
          "Total Death cases: " +
          jsonObj.TotalDeaths;
  }
}
  }
function countrySearch() {
  var maa = document.getElementById("haku").value;
  var osoite2 = "https://api.covid19api.com/total/country/" + maa;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", osoite2, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      jsonObj = JSON.parse(xmlhttp.responseText);
      taulukko(jsonObj);
    }
  };
}
function taulukko(jsonObj) {
  var data = jsonObj;
  var yht =" ";
  var kuolleet =" ";
  var parantuneet =" ";
  var aktiiviset =" ";
  
  for (var i = 0; i < data.length-1; i++) {
    
  }
  yht += data[i].Confirmed;
  kuolleet +=data[i].Deaths;
  parantuneet +=data[i].Recovered;
  aktiiviset +=data[i].Active;


  document.getElementById("eka").innerHTML = "Total cases:" + yht;
  document.getElementById("toka").innerHTML = "Recovered:" + parantuneet;
  document.getElementById("kolmas").innerHTML = "Active:" + aktiiviset;
  document.getElementById("neljas").innerHTML = "Deaths:" + kuolleet;

}

function summaryData() {
  var summary = "https://api.covid19api.com/summary";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", summary, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      summaryJson = JSON.parse(xmlhttp.responseText);

      summaryTable(summaryJson);
    }
  }
}

function summaryTable(summaryJson) {
  var summaryData = summaryJson;
  var taulukko = "<table>";
  taulukko += "<tr><td><h5>Country</h5></td><td><h5>Country Code</h5></td><td><h5>New Deaths</h5></td><td><h5>Total Deaths</h5></td><td><h5>New Confirmed</h5></td><td><h5>Total Confirmed</h5></td>";

  for (var i = 0; i < summaryData.Countries.length; i++) {
    if(summaryData.Countries[i].TotalConfirmed > 1000000) {

    
    taulukko += "<tr>";
    taulukko += "<td>" + summaryData.Countries[i].Country + "</td>";
    taulukko += "<td>" + summaryData.Countries[i].CountryCode + "</td>";
    taulukko += "<td>" + summaryData.Countries[i].NewDeaths + "</td>";
    taulukko += "<td>" + summaryData.Countries[i].TotalDeaths + "</td>";
    taulukko += "<td>" + summaryData.Countries[i].NewConfirmed + "</td>";
    taulukko += "<td>" + summaryData.Countries[i].TotalConfirmed + "</td>";

    taulukko += "</tr>";
  }
}
  document.getElementById("xy").innerHTML = taulukko;

}

function summaryData2() {
  var summary = "https://api.covid19api.com/summary";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", summary, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      summaryJson = JSON.parse(xmlhttp.responseText);

      summaryTable2(summaryJson);
    }
  }
}

function summaryTable2(summaryJson2) {
  var summaryData2 = summaryJson2;
  var taulukko = "<table>";
  taulukko += "<tr><td><h5>Country</h5></td><td><h5>Country Code</h5></td><td><h5>New Deaths</h5></td><td><h5>Total Deaths</h5></td><td><h5>New Confirmed</h5></td><td><h5>Total Confirmed</h5></td>";
  for (var i = 0; i < summaryData2.Countries.length; i++) {
    taulukko += "<tr>";
    taulukko += "<td>" + summaryData2.Countries[i].Country + "</td>";
    taulukko += "<td>" + summaryData2.Countries[i].CountryCode + "</td>";
    taulukko += "<td>" + summaryData2.Countries[i].NewDeaths + "</td>";
    taulukko += "<td>" + summaryData2.Countries[i].TotalDeaths + "</td>";
    taulukko += "<td>" + summaryData2.Countries[i].NewConfirmed + "</td>";
    taulukko += "<td>" + summaryData2.Countries[i].TotalConfirmed + "</td>";

    taulukko += "</tr>";
  
}
  document.getElementById("xy").innerHTML = taulukko;

}  