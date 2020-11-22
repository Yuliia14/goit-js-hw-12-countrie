import './css/common.scss';
import { debounce } from 'lodash';
import getRefs from './js/refs'
import fetchCountries from '../src/js/fetchCountries'

const refs = getRefs();

refs.inputFormEl.addEventListener('input', _.debounce(fetchCountries, 500));