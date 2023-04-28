import { fonts } from './fonts';

export interface Theme {
  name: string;
  background: string;
  text: string;
  overlay: string;
  primary: string;
  secondary: string;
  accent: string;
  after: string;
  before: string;
  afterTrail: string;
  fonts: typeof fonts;
}

const lightTheme: Theme = {
  name: 'light',
  background: '#F9E8D1',
  text: '#2C2C2C',
  overlay: 'rgba(44, 44, 44, 0.75)',
  primary: '#D4A373',
  secondary: '#6BADA7',
  accent: '#E71D36',
  after: '#9B59B6',
  before: '#C0392B',
  afterTrail: '#EADBB2',
  fonts: fonts,
};

const darkTheme: Theme = {
  name: 'dark',
  background: '#2C2C2C',
  text: '#EADBB2',
  overlay: 'rgba(234, 219, 178, 0.75)',
  primary: '#D4A373',
  secondary: '#6BADA7',
  accent: '#E71D36',
  after: '#682C61',
  before: '#F1C40F',
  afterTrail: 'rgba(44, 44, 4, 1)',
  fonts: fonts,
};

export { lightTheme, darkTheme };

const options = {
  option1: {
    light: { after: '#F7CA18', before: '#B85D1C' },
    dark: { after: '#F39C12', before: '#D35400' },
  },
  option2: {
    light: { after: '#E74C3C', before: '#3498DB' },
    dark: { after: '#C0392B', before: '#2980B9' },
  },
  option3: {
    light: { after: '#2ECC71', before: '#E67E22' },
    dark: { after: '#27AE60', before: '#D35400' },
  },
  option4: {
    light: { after: '#9B59B6', before: '#34495E' },
    dark: { after: '#8E44AD', before: '#2C3E50' },
  },
  option5: {
    light: { after: '#95A5A6', before: '#F1C40F' },
    dark: { after: '#7F8C8D', before: '#F39C12' },
  },
  option6: {
    light: { after: '#1ABC9C', before: '#F2784B' },
    dark: { after: '#16A085', before: '#E47127' },
  },
  option7: {
    light: { after: '#6C7A89', before: '#36D7B7' },
    dark: { after: '#4B6584', before: '#2BBEAA' },
  },
  option8: {
    light: { after: '#E08283', before: '#87D37C' },
    dark: { after: '#CA625A', before: '#6DAF72' },
  },
  option9: {
    light: { after: '#913D88', before: '#F7DC6F' },
    dark: { after: '#682C61', before: '#F1C40F' },
  },
  option10: {
    light: { after: '#4183D7', before: '#D2527F' },
    dark: { after: '#2574A9', before: '#D24D57' },
  },
};
