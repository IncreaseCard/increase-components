export const colors = {
  white: '#FFF',
  alabaster: '#FAFAFA',
  iron: '#E6E7E8',
  alto: '#DBDBDB',
  silverGray: '#D3D3D3',
  silverSand: '#B6B9B9',
  silverChalice: '#A3A3A3',
  dustyGray: '#9B9B9B',
  doveGray: '#737373',
  wizardGray: '#58585B',
  mineShaft: '#333',
  mineShaftDark: '#222',
  alizarinCrimson: '#E31F24',
  aquaHaze: '#F2F6F7',
  atlantis: '#8CC63F',
  fiord: '#3C4E64',
  frost: '#E3F3D6',
  fruitSalad: '#4CAE4C',
  mustard: '#FFDF63',
  oceanGreen: '#28B579',
  pictonBlue: '#3AA6DD',
  squirtleBlue: '#135EAC',
  valencia: '#D43F3A',
  subtleWhite: 'rgba(255, 255, 255, 0.25)',
  subtleShadow: 'rgba(0, 0, 0, 0.05)',
  mediumShadow: 'rgba(0, 0, 0, 0.26)',
  darkShadow: 'rgba(0, 0, 0, 0.6)',
  //  Used in calendar.scss
  increaseLightBlue: '#2CA8DF',
  increaseOrange: '#F79C31'
}
export const defaultTheme = {
  colors: {
    primary: colors.increaseLightBlue,
    primaryFontColor: colors.white,
    secondary: colors.increaseOrange,
    secondaryFontColor: colors.white,
    danger: colors.alizarinCrimson,
    dangerFontColor: colors.white,
    ghost: 'transparent',
    white: colors.white,
    warning: colors.mustard,
    // Fonts
    fontBright: colors.white,
    fontNormal: colors.silverGray,
    fontBold: colors.dustyGray,
    subtleShadow: colors.subtleShadow,
    mediumShadow: colors.mediumShadow,
    darkShadow: colors.darkShadow,
    // Sections
    borderColor: colors.silverGray
  },
  typography: {
    bodyFontFamily: '"Roboto", sans-serif',
    titleFontFamily: '"Roboto", sans-serif',
    bodyFontSizes: [],
    bodyFontHeights: [],
    // Based on powers of 1.3
    headingFontSizes: ['3.7rem', '2.85rem', '2.2rem', '1.7rem', '1.3rem', '1rem'],
    // Based on a 0.4 x 0.4 rem grid
    headingLineHeights: ['4.8rem', '4.4rem', '3.2rem', '3.2rem', '2.8rem', '2.8rem']
  }
};

export default defaultTheme;
