import {createContext, useState} from 'react';

export default AppContext = createContext({
  appDarkThemeVal: false,
  appDarkThemeFun: () => {},
});

export const AppContextProvider = ({children}) => {
  const [isDark, setIsDark] = useState(false);

  const DarkTheme = darkTheme => {
    setIsDark(darkTheme);
  };

  const values = {
    appDarkTheme: isDark,
    appDarkThemeFun: DarkTheme,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
