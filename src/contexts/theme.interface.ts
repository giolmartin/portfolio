import { fonts } from './fonts';
import { screenSize } from './screenSize';
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

  beforeTrail: string;
  afterTrail: string;

  navbar_underline_color: string;
  navbar_active_color: string;

  card_bg: string;
  card_center_hover: string;
  card_outside_hover: string;

  fonts: typeof fonts;
  screenSize: typeof screenSize;
}

const neonRainbow = {
  neon_pink: '#FF69B4',
  electric_orange: '#FF7F00',
  bright_yellow: '#FDFD00',
  neon_green: '#4CFF4C',
  electric_blue: '#00AEFF',
  neon_purple: '#BD88FF',
};

const rainbowVintage = {
  dusty_pink: '#D49A9A',
  burnt_orange: '#D66A4A',
  mustard_yellow: '#D1B971',
  moss_green: '#8AA98C',
  vintage_blue: '#6C8DAA',
  lavender: '#A685B7',
};

const neonRainbowRGBA = {
  neon_pink: 'rgba(255, 105, 180, 1)',
  electric_orange: 'rgba(255, 127, 0, 1)',
  bright_yellow: 'rgba(253, 253, 0, 1)',
  neon_green: 'rgba(76, 255, 76, 1)',
  electric_blue: 'rgba(0, 174, 255, 1)',
  neon_purple: 'rgba(189, 136, 255, 1)',
};

const rainbowVintageRGBA = {
  dusty_pink: 'rgba(212, 154, 154, 1)',
  burnt_orange: 'rgba(214, 106, 74, 1)',
  mustard_yellow: 'rgba(209, 185, 113, 1)',
  moss_green: 'rgba(138, 169, 140, 1)',
  vintage_blue: 'rgba(108, 141, 170, 1)',
  lavender: 'rgba(166, 133, 183, 1)',
};
const lightTheme: Theme = {
  name: 'light',

  background: '#F9E8D1',
  text: '#2C2C2C',

  overlay: 'rgba(44, 44, 44, 0.75)',
  primary: '#D4A373',

  secondary: '#6BADA7',

  accent: '#E71D36',

  after: rainbowVintage.burnt_orange,
  before: rainbowVintage.lavender,

  beforeTrail: rainbowVintage.dusty_pink,
  afterTrail: rainbowVintage.mustard_yellow,

  navbar_underline_color: rainbowVintage.moss_green,
  navbar_active_color: rainbowVintage.vintage_blue,

  card_bg: '#D8C79E',
  card_center_hover: 'rgba(214, 106, 74, 0.5)',
  card_outside_hover: 'rgba(214, 106, 74, 0.06)',

  screenSize: screenSize,
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

  after: neonRainbow.electric_orange,
  before: neonRainbow.neon_purple,

  afterTrail: 'rgba(44, 44, 4, 1)',
  beforeTrail: 'rgba(44, 44, 4, 1)',

  navbar_underline_color: neonRainbow.neon_green,
  navbar_active_color: neonRainbow.electric_blue,

  card_bg: '#3D3D3D',
  card_center_hover: 'rgba(189, 136, 255, 0.4)',
  card_outside_hover: 'rgba(189, 136, 255, 0.06)',

  screenSize: screenSize,
  fonts: fonts,
};

export { lightTheme, darkTheme };
