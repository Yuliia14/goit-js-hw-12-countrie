import getRefs from './refs'
const refs = getRefs()

export default function makeMarkup(html) {
  refs.countryList.insertAdjacentHTML('beforeend', html);
}