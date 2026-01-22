import Router from 'components/Router';
import Summary from 'components/Summary';
import AppDataProvider from 'contexts/AppDataProvider';

import './App.css';

function App() {
  return (
    <div className='app'>
      <AppDataProvider>
        <Summary />
        <Router />
      </AppDataProvider>
    </div>
  );
}

export default App;
