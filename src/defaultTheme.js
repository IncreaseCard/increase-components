export const colors = {
  white: '#FFF',
  increaseGrey: '#EDEDED',
  black: '#000',
  tallPoppy: '#B52727',
  bittersweet: '#FF6565',
  increaseGreen: '#00BB00',
  oceanGreen: '#27B579',
  increaseLightBlue: '#2CA8DF',
  dodgerBlue: '#3B86FF',
  cello: '#223368',
  subtleShadow: 'rgba(0, 0, 0, 0.05)',
  mediumShadow: 'rgba(0, 0, 0, 0.25)',
  darkShadow: 'rgba(0, 0, 0, 0.6)',
  //  Used in calendar.scss
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
      blue: colors.dodgerBlue,
      darkBlue: colors.cello,
      red: colors.tallPoppy,
      lightRed: colors.bittersweet
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
