import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import countriesJSON from './countries.json';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setCountries(countriesJSON);
    setIsFetching(false);
  }, []);

  if (isFetching === true) {
    return <h3>... buscando</h3>;
  }

  return (
    <div className="App">
      <Navbar />
      <div style={{display: "flex"}}>

      <CountriesList countries={countries} />
      <Routes>
        <Route path="/:id" element={<CountryDetails countries={countries} />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
