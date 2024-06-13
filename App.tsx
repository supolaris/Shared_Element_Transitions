import {NativeStack} from './src/routes/NativeStack';
import {AppContextProvider} from './src/contexts/AppContext';

const App = () => {
  return (
    <AppContextProvider>
      <NativeStack />
    </AppContextProvider>
  );
};

export default App;
