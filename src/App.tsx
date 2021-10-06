import React from 'react';
import { Balance } from './Components/Balance';
import { Header } from './Components/Header';
import { History } from './Components/History';
import { Income } from './Components/Income';
import { NewTransaction } from './Components/NewTransaction';
import { GlobalProvider } from './Context API/Context';
import './Style/style.css'
import './Style/income.css'
import './Style/history.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from "./Routes/Routes";
    
function App() {
  return (
    <GlobalProvider>
  
    <div className="App">
      <Header/> 
      <div className="container">
      <Router>
        <Balance/>
        <Income/>
        <History/>
        <NewTransaction/>
        </Router>
      </div>
    </div>
    </GlobalProvider>
  );
}
    
export default App;
