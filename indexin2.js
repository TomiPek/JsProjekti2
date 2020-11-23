
// Maailman tilastot etusivulle ensimmäiseksi näkyviin
function total() {
  // Osoite josta data haetaan
  var osoite = "https://api.covid19api.com/world/total";
  // Olin nimeäminen XML http requestia varten
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", osoite, true);
  xmlhttp.send();

// Määritellään mitä vastauksen saamisen jälkeen tapahtuu
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      jsonObj = JSON.parse(xmlhttp.responseText);

      // parsitun tiedon sijainti
      document.getElementById("eka").innerHTML =
 
      // Haetaan kaikkien tautitapauksien tiedon sijainti.
        "Total cases: " +
        jsonObj.TotalConfirmed;

        document.getElementById("toka").innerHTML =
   
        // Parantuneet
          "Recovered: " +
          jsonObj.TotalRecovered;

          document.getElementById("neljas").innerHTML =

        // Kuolleet
          "Total Death cases: " +
          jsonObj.TotalDeaths;
  }
}
  }
  // Funktio maa kohtaista kenttää varten
function countrySearch() {
  // Muuttuja haettua maan nimeä varten
  var maa = document.getElementById("haku").value;
  // Liitetään maan nimi, jotta saadaan oikean maan nimi hakua varten
  var osoite2 = "https://api.covid19api.com/total/country/" + maa;
  var xmlhttp = new XMLHttpRequest();
  // requestia varten uusi osoite
  xmlhttp.open("GET", osoite2, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      data = JSON.parse(xmlhttp.responseText);

  // Muuttujat maa kohtaista tietoa varten
  var yht =" ";
  var kuolleet =" ";
  var parantuneet =" ";
  var aktiiviset =" ";
  
  // looppi jossa haetaan viimeiset tiedot
  for (var i = 0; i < data.length-1; i++) {
    
  }
  // Viimeisen arovn lisääminen muuttujaan
  yht += data[i].Confirmed;
  kuolleet +=data[i].Deaths;
  parantuneet +=data[i].Recovered;
  aktiiviset +=data[i].Active;

  // Lisätään tieto laatikoihin
  document.getElementById("eka").innerHTML = "Total cases:" + yht;
  document.getElementById("toka").innerHTML = "Recovered:" + parantuneet;
  document.getElementById("kolmas").innerHTML = "Active:" + aktiiviset;
  document.getElementById("neljas").innerHTML = "Deaths:" + kuolleet;
    }
}
}
// summary dataa varten funktion määrittely uudesta osoitteesta
function summaryData() {
  var summary = "https://api.covid19api.com/summary";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", summary, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      summaryJson = JSON.parse(xmlhttp.responseText);

      // Taulukko funktion kutsu
      summaryTable(summaryJson);
    }
  }
}
// Käytetään edellistä parsittua dataa taulukon luomista varten
function summaryTable(summaryJson) {
  var summaryData = summaryJson;
  // Taulukon luomista varten table tagin määrittely
  var taulukko = "<table>";
  // Taulukon kentille otsikot, olisi voinut myös käyttää normaaleja th tageja, mutta mielestäni h5 on suoraan sopivan kokoinen kenttä
  taulukko += "<tr><td><h5>Country</h5></td><td><h5>Country Code</h5></td><td><h5>New Deaths</h5></td><td><h5>Total Deaths</h5></td><td><h5>New Confirmed</h5></td><td><h5>Total Confirmed</h5></td>";

  // Looppi tiedon keräämista, jossa otetaan talteen ainoastaan data joka ylittää miljoonan tautitapauksen määrän
  for (var i = 0; i < summaryData.Countries.length; i++) {
    if(summaryData.Countries[i].TotalConfirmed > 1000000) {

    // Taulukon luomista ja kenttiin datan lisäys
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

// Toinen taulun luominen kaikkien maiden dataa varten
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
// Edellisen parsitun datan käyttäminen taulukko funktion luomista varten
function summaryTable2(summaryJson) {
  var summaryData2 = summaryJson;
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