import { Country } from './Country';

const SidebarLinks = {
  prod: {},
  staging: {}
};

const Env = {
  STAGING: 'staging',
  PROD: 'prod'
};

SidebarLinks.prod.default = [
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

SidebarLinks.staging.default = [
  {
    label: 'Más Productos',
    url: 'https://platform.staging.increase.app/',
    blank: false
  },
  {
    label: 'Ajustes',
    url: 'https://platform.staging.increase.app/settings/',
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

SidebarLinks.prod[Country.ECUADOR] = [
  {
    label: 'Ajustes',
    url: 'https://platform.increase.app/settings/',
    blank: false
  }
];

SidebarLinks.staging[Country.ECUADOR] = [
  {
    label: 'Ajustes',
    url: 'https://platform.staging.increase.app/settings/',
    blank: false
  }
];

// This will change soon, as we define proper links for each country.
SidebarLinks[Env.PROD][Country.ARGENTINA] = SidebarLinks.prod.default;
SidebarLinks[Env.PROD][Country.CHILE] = SidebarLinks.prod.default;
SidebarLinks[Env.PROD][Country.URUGUAY] = SidebarLinks.prod.default;
SidebarLinks[Env.PROD][Country.COLOMBIA] = SidebarLinks.prod.default;
SidebarLinks[Env.PROD][Country.PARAGUAY] = SidebarLinks.prod.default;

SidebarLinks[Env.PROD][Country.DOMINICANA] = SidebarLinks.prod[Country.ECUADOR];

SidebarLinks[Env.STAGING][Country.ARGENTINA] = SidebarLinks.staging.default;
SidebarLinks[Env.STAGING][Country.CHILE] = SidebarLinks.staging.default;
SidebarLinks[Env.STAGING][Country.URUGUAY] = SidebarLinks.staging.default;
SidebarLinks[Env.STAGING][Country.COLOMBIA] = SidebarLinks.staging.default;
SidebarLinks[Env.STAGING][Country.PARAGUAY] = SidebarLinks.staging.default;

SidebarLinks[Env.STAGING][Country.DOMINICANA] = SidebarLinks.staging[Country.ECUADOR];

export function getSidebarLinks(countryName, env = 'prod') {
  return countryName && SidebarLinks[env][countryName]
    ? SidebarLinks[env][countryName]
    : SidebarLinks[env].default;
}
