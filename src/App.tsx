import Router from 'components/Router';
import Summary from 'components/Summary';
import PortfolioDataProvider from 'contexts/PortfolioDataProvider';

import './App.css';

function App() {
  return (
    <div className='app'>
      <PortfolioDataProvider>
        <Summary />
        <Router />
      </PortfolioDataProvider>
    </div>
  );
}

export default App;
