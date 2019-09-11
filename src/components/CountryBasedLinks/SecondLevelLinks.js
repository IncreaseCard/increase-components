import { Help } from '../../icons/icons';
import { Country } from './Country';

const SecondLevelLinks = {};

SecondLevelLinks.default = [
  {
    logo: Help,
    name: 'Centro de ayuda',
    text: 'Resolución de problemas y procedimientos',
    url: 'https://soporte.increasecard.com/hc/es'
  }
];

SecondLevelLinks[Country.ECUADOR] = [];
SecondLevelLinks[Country.DOMINICANA] = [];

export function getSecondLevelLinks(countryName) {
  return countryName && SecondLevelLinks[countryName]
    ? SecondLevelLinks[countryName]
    : SecondLevelLinks.default;
}
