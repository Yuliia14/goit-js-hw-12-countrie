import renderCountryCard from './renderCountryCard'

export default function fetchCountries(searchQuery) {
let countryName = searchQuery.target.value;
const BASE_URL = 'https://restcountries.eu/rest/v2/name';

  return fetch(`${BASE_URL}/${countryName}`)
    .then(response => response.json())
    .then(renderCountryCard)
    .catch(error => console.log(error))
}