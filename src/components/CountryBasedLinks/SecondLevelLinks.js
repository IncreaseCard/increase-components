import { Help } from '../../icons/icons';

const SecondLevelLinks = {};

SecondLevelLinks.default = [
  {
    logo: Help,
    name: 'Centro de ayuda',
    text: 'Resolución de problemas y procedimientos',
    url: 'https://soporte.increasecard.com/hc/es'
  }
];

export function getSecondLevelLinks(countryName) {
  return countryName && SecondLevelLinks[countryName]
    ? SecondLevelLinks[countryName]
    : SecondLevelLinks.default;
}
