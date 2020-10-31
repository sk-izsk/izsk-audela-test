export interface CustomTheme {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    thirdColor: string;
    white: string;
    red: string;
    black: string;
  };
  fontProperties: {
    textFontSize: number;
    headerFontSize: number;
    fontFamily: string;
  };
  spacing: (value: number) => number;
}

const theme: CustomTheme = {
  colors: {
    primaryColor: '#009688',
    secondaryColor: '#00695c',
    thirdColor: '#80cbc4',
    red: '#ff334b',
    white: '#fff',
    black: '#000000',
  },
  fontProperties: {
    textFontSize: 16,
    headerFontSize: 36,
    fontFamily: 'Open Sans,Montserrat, Fira Sans, Lato, Roboto',
  },
  spacing: (value: number) => 8 * value,
};

export { theme };
