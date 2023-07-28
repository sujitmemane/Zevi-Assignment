import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SuggestionBox from './components/SuggestionBox/SuggestionBox';

function App() {
  const [showSuggestionBox, setShowSuggestionBox] = useState<boolean>(false);

  const setFocusHandler = (value: boolean) => {
    setShowSuggestionBox(value);
  };

  return (
    <div className="App">
      <h1 className='logo-heading'>Zevi</h1>
      <SearchBar onFocusChange={setFocusHandler} />
      {showSuggestionBox && <SuggestionBox />}
    </div>
  );
}

export default App;
