export interface Theme {
  primary: string;
  secondary: string;
  highlight: string;
  warn: string;
  light: string;
  lightGrey: string;
  grey: string;
  darkGrey: string;
  dark: string;
}

export interface PropsWithTheme {
  theme: Theme;
}

export interface Cell {
  hasMine: boolean;
  isVisible: boolean;
  isFlagged: boolean;
  neighborMines: number;
  x: number;
  y: number;
}

