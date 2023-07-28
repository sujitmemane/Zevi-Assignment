import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './searchbar.css';

interface SearchBarProps {
  onFocusChange: (value: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onFocusChange }) => {
  const [searchString, setSearchString] = useState<string>('');
 

  const handleFocus = () => {
  
    onFocusChange(true); 
  };

  const handleBlur = () => {

    onFocusChange(false); 
  };

  return (
    <div className='search-container'>
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button>
        <FiSearch size={30} />
      </button>
    </div>
  );
};

export default SearchBar;
