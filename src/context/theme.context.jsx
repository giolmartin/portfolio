import React, { createContext, useState, useContext } from 'react';

const themes = {
  //TODO: Add colors when I decide on a color scheme for the site and the implementation.
  light: {
    primary: '',
    secondary: '',
    background: '',
    accent: '',
    text: '',
    hover: '',
    secondary_text: '',

    fonts: {
      heading: 'Raleway, sans-serif',
      body: 'Roboto, sans-serif',
      special: 'Lora, serif',
    },
  },
  dark: {
    primary: '#F1FAEE', // Honeydew (off-white)
    secondary: '#E63946', // Scarlet Red
    background: '#2B2D42', // Space Cadet (dark gray)
    accent: '#A8DADC', // Powder Blue
    text: '#FFFFFF', // White
    hover: '#457B9D', // Celadon Blue
    secondary_text: '#F4F4F2', // Anti-flash White
    highlight: '#FCA311', // Orange Web
    warning: '#E85D04', // Orange (RYB)
    success: '#2A9D8F', // Persian Green

    //Opaque colors
    opaque_primary: 'rgba(241, 250, 238, 0.2)', // Honeydew (off-white)
    opaque_secondary: 'rgba(230, 57, 70, 0.1)', // Scarlet Red
    opaque_background: 'rgba(43, 45, 66, 0.2)', // Space Cadet (dark gray)
    opaque_accent: 'rgba(168, 218, 220, 0.2)', // Powder Blue
    opaque_text: 'rgba(255, 255, 255, 0.2)', // White
    opaque_hover: 'rgba(69, 123, 157, 0.2)', // Celadon Blue
    opaque_secondary_text: 'rgba(244, 244, 242, 0.2)', // Anti-flash White
    opaque_highlight: 'rgba(252, 163, 17, 0.2)', // Orange Web
    opaque_warning: 'rgba(232, 93, 4, 0.2)', // Orange (RYB)
    opaque_success: 'rgba(42, 157, 143, 0.2)', // Persian Green

    fonts: {
      heading: 'Raleway',
      body: 'Roboto',
      special: 'Lora',
    },
  },
};

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// dark: {
//   primary: '#8ECAE6', // Blue Green
//   secondary: '#219EBC', // Metallic Seaweed
//   background: '#023047', // Oxford Blue
//   accent: '#FFB703', // Marigold
//   text: '#FB8500', // Orange Web
//   hover: '#FFC6FF', // Shimmering Blush
//   secondary_text: '#FF4C29', // Vermilion
//   highlight: '#FFADAD', // Melon
//   warning: '#FFD6A5', // Peach
//   success: '#CAFFBF', // Tea Green
//   opaque_primary: 'rgba(142, 202, 230, 0.2)',
// }

// dark: {
//   primary: '#A2D2FF', // Baby Blue Eyes
//   secondary: '#FFAFCC', // Nadeshiko Pink
//   background: '#22223B', // Russian Violet
//   accent: '#9D8189', // Old Lavender
//   text: '#CDB4DB', // Thistle
//   hover: '#BDE0FE', // Beau Blue
//   secondary_text: '#FFCDB2', // Unbleached Silk
//   highlight: '#FEC89A', // Peach Puff
//   warning: '#FFD6A5', // Peach
//   success: '#FFB5A7', // Light Coral
//   opaque_primary: 'rgba(162, 210, 255, 0.2)',
// }

// dark: {
//   primary: '#FFD60A', // Mikado Yellow
//   secondary: '#005F73', // Skobeloff
//   background: '#0A9396', // Polished Pine
//   accent: '#94D2BD', // Opal
//   text: '#E9D8A6', // Dutch White
//   hover: '#EE9B00', // Yellow Orange
//   secondary_text: '#CA6702', // Burnt Sienna
//   highlight: '#BB3E03', // Russet
//   warning: '#AE2012', // Firebrick
//   success: '#9B2226', // Japanese Carmine
//   opaque_primary: 'rgba(255, 214, 10, 0.2)',
// }

// dark: {
//   primary: '#F72585', // Byzantine
//   secondary: '#B5179E', // Purple (Munsell)
//   background: '#3A0CA3', // Persian Blue
//   accent: '#4CC9F0', // Vivid Sky Blue
//   text: '#7209B7', // Blue Violet
//   hover: '#4361EE', // Ultramarine Blue
//   secondary_text: '#4895EF', // Cornflower Blue
//   highlight: '#4CC9F0', // Vivid Sky Blue
//   warning: '#3F37C9', // Dark Cornflower Blue
//   success: '#3A0CA3', // Persian Blue
//   opaque_primary: 'rgba(247, 37, 133, 0.2)',
// }

// dark: {
//   primary: '#F94144', // Bittersweet
//   secondary: '#F3722C', // Rajah
//   background: '#F8961E', // Orange Pantone
//   accent: '#F9C74F', // Maize
//   text: '#90BE6D', // Pistachio
//   hover: '#43AA8B', // Keppel
//   secondary_text: '#577590', // Queen Blue
//   highlight: '#277DA1', // Star Command Blue
//   warning: '#F9844A', // Sandy Brown
//   success: '#4D908E', // Polished Pine
//   opaque_primary: 'rgba(249, 65, 68, 0.2)',
// }

// dark: {
//   primary: '#E63946', // Scarlet Red
//   secondary: '#F1FAEE', // Honeydew (off-white)
//   background: '#2B2D42', // Space Cadet (dark gray)
//   accent: '#A8DADC', // Powder Blue
//   text: '#FFFFFF', // White
//   hover: '#457B9D', // Celadon Blue
//   secondary_text: '#F4F4F2', // Anti-flash White
//   highlight: '#FCA311', // Orange Web
//   warning: '#E85D04', // Orange (RYB)
//   success: '#2A9D8F', // Persian Green
//   opaque_primary: 'rgba(230, 57, 70, 0.2)',
// }
