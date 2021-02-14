//Data Load From API:
const dataLoadFromAPI = () => {
  const URL = `https://api.covid19api.com/summary`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => displayData(data));
};
dataLoadFromAPI();

//Display The Loading Data:
const displayData = (covidData) => {
  const tableData = document.getElementById("data");
  const showDate = document.getElementById("show-date");
  showDate.innerText = `Date: ${covidData.Date}`;
  tableData.innerHTML = `
  <td>${covidData.Global.NewConfirmed}</td>
  <td>${covidData.Global.TotalConfirmed}</td>
  <td>${covidData.Global.NewDeaths}</td>
  <td>${covidData.Global.TotalDeaths}</td>
  <td>${covidData.Global.NewRecovered}</td>
  <td>${covidData.Global.TotalRecovered}</td>
  `;
  displayCountriesData(covidData.Countries);
};

//Display Countries Data Information:
const displayCountriesData = (countriesData) => {
  // console.log(countriesData);
  const countriesInfo = document.getElementById("countries-info");
  countriesData.map((countryData) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <tr>
      <td>${countryData.Country}</td>
      <td>${countryData.NewConfirmed}</td>
      <td>${countryData.NewDeaths}</td>
      <td>${countryData.NewRecovered}</td>
      <td>${countryData.TotalConfirmed}</td>
      <td>${countryData.TotalDeaths}</td>
      <td>${countryData.TotalRecovered}</td>
    </tr>
    `;
    countriesInfo.appendChild(tr);
  });
};

//Refresh Global Button Works:
const refreshButton = document.getElementById("refresh-button");
refreshButton.addEventListener("click", () => {
  dataLoadFromAPI();
});