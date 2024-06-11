import {createContext, useState} from 'react';

export const ThemeContext = createContext({
  themeModeHandler: () => {},
});

export const ThemeContextProvider = ({children}) => {
  const [lightDarkTheme, setLightDarkTheme] = useState('Light');

  const themeModeHandler = themeMode => {
    setLightDarkTheme(themeMode);
    return lightDarkTheme;
  };

  const valuesLinking = {
    themeModeHandler: themeModeHandler,
  };

  return (
    <ThemeContext.Provider value={valuesLinking}>
      {children}
    </ThemeContext.Provider>
  );
};
