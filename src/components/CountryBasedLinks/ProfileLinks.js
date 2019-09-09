import { Country } from './Country';

const ProfileLinks = {};

ProfileLinks.default = [
  {
    label: 'Ayuda y Soporte',
    url: 'https://soporte.increasecard.com/hc/es',
    blank: true
  },
  {
    label: 'Comunidad Increase',
    url: 'https://www.facebook.com/groups/ComunidadIncrease/',
    blank: true
  },
  {
    label: 'Novedades',
    url: 'https://increase.app/blog',
    blank: true
  }
];

ProfileLinks[Country.ECUADOR] = [];
ProfileLinks[Country.DOMINICANA] = [];

export function getProfileLinks(countryName) {
  return countryName && ProfileLinks[countryName]
    ? ProfileLinks[countryName]
    : ProfileLinks.default;
}
