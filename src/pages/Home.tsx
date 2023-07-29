import { useState } from "react";
import { SearchBar, SuggestionBox } from "../components/index";

const Home = () => {
  const [showSuggestionBox, setShowSuggestionBox] = useState<boolean>(false);

  const setFocusHandler = (value: boolean) => {
    setShowSuggestionBox(value);
  };
  console.log(showSuggestionBox);

  return (
    <div>
      <h1 className="py-4 text-3xl absolute right-8 text-white">Zevi</h1>
      <SearchBar
        onFocusChange={setFocusHandler}
        suggestionBox={showSuggestionBox}
      />
      {showSuggestionBox && <SuggestionBox />}
    </div>
  );
};

export default Home;
