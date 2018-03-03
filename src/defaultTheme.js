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
  black: '#000',
  alizarinCrimson: '#B52727',
  aquaHaze: '#F2F6F7',
  atlantis: '#8CC63F',
  fiord: '#3C4E64',
  frost: '#E3F3D6',
  fruitSalad: '#4CAE4C',
  mustard: '#FFDF63',
  oceanGreen: '#27B579',
  pictonBlue: '#3B86FF',
  squirtleBlue: '#135EAC',
  valencia: '#FF6565',
  subtleWhite: 'rgba(255, 255, 255, 0.25)',
  subtleShadow: 'rgba(0, 0, 0, 0.05)',
  mediumShadow: 'rgba(0, 0, 0, 0.26)',
  darkShadow: 'rgba(0, 0, 0, 0.6)',
  //  Used in calendar.scss
  increaseLightBlue: '#2CA8DF',
  increaseGreen: '#00BB00',
  increaseGrey: '#EDEDED',
  orange: '#F79B31',
}
export const defaultTheme = {
  colors: {
    primary: {
      blue: colors.increaseLightBlue,
      green: colors.increaseGreen,
    },
    secondary: {
      orange: colors.orange,
      green: colors.oceanGreen,
      blue: colors.pictonBlue,
      darkBlue: '#223368',
      red: colors.alizarinCrimson,
      lightRed: colors.valencia
    },
    black: colors.black,
    gray: colors.increaseGrey,
    ghost: 'transparent',
    white: colors.white,
    // TODO: Fonts
    subtleShadow: colors.subtleShadow,
    mediumShadow: colors.mediumShadow,
    darkShadow: colors.darkShadow,
    // Sections
    borderColor: colors.gray
  },
  typography: {
    bodyFontFamily: '"Roboto", sans-serif',
    titleFontFamily: '"Roboto", sans-serif',
    bodyFontSizes: ['15px', '13px'],
    bodyLineHeights: ['21px', '19px'],
    // Based on powers of 1.3
    headingFontSizes: ['2.85rem', '2.2rem', '1.7rem', '1.3rem', '1rem', '0.75rem'],
    // Based on a 0.4 x 0.4 rem grid
    headingLineHeights: ['4.4rem', '3.2rem', '3.2rem', '2.8rem', '2rem', '1.6rem']
  }
};

export default defaultTheme;
