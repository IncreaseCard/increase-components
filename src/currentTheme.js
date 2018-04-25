export const colors = {
  white: '#FFF',
  increaseGrey: '#EDEDED',
  grey: '#BCC1D0',
  black: '#000',
  tallPoppy: '#e31f24',
  bittersweet: '#FF6565',
  increaseGreen: '#00DD00',
  oceanGreen: '#28b579',
  increaseLightBlue: '#2CA8DF',
  dodgerBlue: '#3aa6dd',
  cello: '#243568',
  subtleShadow: 'rgba(0, 0, 0, 0.05)',
  mediumShadow: 'rgba(0, 0, 0, 0.3)',
  darkShadow: 'rgba(0, 0, 0, 0.5)',
  //  Used in calendar.scss
  orange: '#F79B31',
}
export const newTheme = {
  colors: {
    primary: {
      blue: colors.cello,
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
    bodyFontFamily: '"Open Sans", sans-serif',
    titleFontFamily: '"Open Sans", sans-serif',
    bodyFontSizes: ['16px', '13px'],
    bodyLineHeights: ['21px', '19px'],
    // Based on powers of 1.3
    headingFontSizes: ['2.85rem', '2.2rem', '1.7rem', '1.3rem', '1rem', '0.75rem'],
    // Based on a 0.4 x 0.4 rem grid
    headingLineHeights: ['3.45rem', '2.8rem', '2.3rem', '1.9rem', '1.6rem', '1.35rem']
  }
};

export default newTheme;
