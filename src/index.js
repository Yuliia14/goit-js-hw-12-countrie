import './css/common.scss';
import countryCardTpl from './templates/country.hbs'
// export default { fetchCountries };

const refs = {
  countryList: document.querySelector('.county-list'),
  inputFormEl: document.querySelector('.input-form'),
};

refs.inputFormEl.addEventListener('input', onSearch);

function onSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchQuery = form.value;

  fetchCountries(searchQuery)
  .then(renderCountryCard)
  .catch(error => console.log(error))
}

function fetchCountries(countryName) {
const BASE_URL = 'https://restcountries.eu/rest/v2/name';

  return fetch(`${BASE_URL}/${countryName}`)
    .then(response => response.json())
}

function renderCountryCard(country) {
  const markup = countryCardTpl(country);
    refs.countryList.innerHTML = markup;
}