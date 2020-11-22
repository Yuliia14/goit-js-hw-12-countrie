import getRefs from './refs'

import clearInput from './clearInput';
import noticeError from './noticeError';
import makeMarkup from './makeMarkup';
import countryCardTpl from '../templates/country.hbs';
import countryCardListTpl from '../templates/list.hbs';

const refs = getRefs();

export default function renderCountryCard(countries) {

  refs.countryList.innerHTML = '';
  if (countries.length > 10) {
    noticeError()
    clearInput()
  }
  else if(countries.length === 1){
    clearInput()
    const markup = countryCardTpl(countries);
    makeMarkup(markup);
  }
  else if (countries.length >= 2 && countries.length <= 10) {
    clearInput()
    const markupList = countryCardListTpl(countries)
    const countriesAll = countries.map(name => countryCardListTpl(name)).join(' ');
    makeMarkup(markupList);
  }
  
  else if (countries.length === 0){
    clearInput()
  };
}
