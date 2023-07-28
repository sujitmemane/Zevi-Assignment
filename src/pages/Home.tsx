import React,{useState} from 'react'
import SearchBar from '../components/home/SearchBar';
import SuggestionBox from '../components/home/SuggestionBox';

const Home = () => {
    const [showSuggestionBox, setShowSuggestionBox] = useState<boolean>(false);

  const setFocusHandler = (value: boolean) => {
    setShowSuggestionBox(value);
  };
  console.log(showSuggestionBox)

  return (
    <div> <h1 className='logo-heading'>Zevi</h1>
    <SearchBar onFocusChange={setFocusHandler} suggestionBox = {showSuggestionBox} />
    {showSuggestionBox && <SuggestionBox />}</div>
  )
}

export default Home 