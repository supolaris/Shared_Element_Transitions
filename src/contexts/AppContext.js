import {createContext, useState} from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
  const [lightDarkTheme, setLightDarkTheme] = useState('Light');

  const themeModeHandler = themeMode => {
    setLightDarkTheme(themeMode);
  };

  const valuesLinking = {
    lightDarkTheme,
    themeModeHandler,
  };

  return (
    <ThemeContext.Provider value={valuesLinking}>
      {children}
    </ThemeContext.Provider>
  );
};
