
// function loadCountries() {
//     fetch('https://restcountries.eu/rest/v2/all')
//         .then(res => res.json())
//         .then(data => console.log(data))
// };

const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};

loadCountries();

const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        // const p = document.createElement('p');
        // const h3 = document.createElement('h3');
        div.classList.add('country');
        countriesDiv.appendChild(div);
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // p.innerText = country.capital;
        // div.appendChild(p);
        // console.log(country);
    });
};

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountriesDetail(data[0]))
    // console.log(url);
}

const displayCountriesDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h5>${country.name}</h5>
    <p>Population: ${country.population}</p>
    <img width="200px" src="${country.flag}">
    `
}


