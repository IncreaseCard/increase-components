import { Country } from './Country';

const SidebarLinks = {};

SidebarLinks.default = [
  {
    label: 'Más Productos',
    url: 'https://platform.increase.app/',
    blank: false
  },
  {
    label: 'Ajustes',
    url: 'https://platform.increase.app/settings/',
    blank: false
  },
  {
    label: 'Blog',
    url: 'https://www.increasecard.com/blog/',
    blank: true
  },
  {
    label: 'Comunidad',
    url: 'https://www.facebook.com/groups/ComunidadIncrease/',
    blank: true
  }
];

SidebarLinks[Country.ECUADOR] = [
  {
    label: 'Ajustes',
    url: 'https://platform.increase.app/settings/',
    blank: false
  }
];

// This will change soon, as we define proper links for each country.
SidebarLinks[Country.ARGENTINA] = [...SidebarLinks.default];
SidebarLinks[Country.CHILE] = [...SidebarLinks.default];
SidebarLinks[Country.URUGUAY] = [...SidebarLinks.default];
SidebarLinks[Country.COLOMBIA] = [...SidebarLinks.default];
SidebarLinks[Country.PARAGUAY] = [...SidebarLinks.default];

SidebarLinks[Country.DOMINICANA] = [...SidebarLinks[Country.ECUADOR]];

export function getSidebarLinks(countryName) {
  return countryName && SidebarLinks[countryName]
    ? SidebarLinks[countryName]
    : SidebarLinks.default;
}
