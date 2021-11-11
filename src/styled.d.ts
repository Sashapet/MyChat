import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    mode: string;
    colors: AppColors;
    fonts: AppFonts;
  }
}

export interface AppColors {
  primary: string;
  secondary: string;
  black: string;
  white: string;
  red: string;
  black01: string;
  black02: string;
}
export interface AppFonts {
  Montserrat: MONTSERRAT;
  Poppins: POPPINS;
  size: {
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
    xxxl: number;
    x64: number;
  };
}

interface MONTSERRAT {
  MontserratBold: string;
  MontserratExtraBold: string;
  MontserratExtraLight: string;
  MontserratLight: string;
  MontserratMedium: string;
  MontserratRegular: string;
  MontserratSemiBold: string;
  MontserratThin: string;
}

interface POPPINS {
  PoppinsBold: string;
  PoppinsExtraBold: string;
  PoppinsExtraLight: string;
  PoppinsLight: string;
  PoppinsMedium: string;
  PoppinsRegular: string;
  PoppinsSemiBold: string;
  PoppinsThin: string;
}
