
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
        const p = document.createElement('p');
        const h3 = document.createElement('h3');
        div.classList.add('country');
        countriesDiv.appendChild(div);
        h3.innerText = country.name;
        div.appendChild(h3);
        p.innerText = country.capital;
        div.appendChild(p);
        console.log(country);
    })
}




