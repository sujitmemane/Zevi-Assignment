import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import {ImCross } from 'react-icons/im'


interface SearchBarProps {
  onFocusChange: (value: boolean) => void;
  suggestionBox : boolean
}

const SearchBar: React.FC<SearchBarProps> = ({ onFocusChange,suggestionBox }) => {
  const [searchString, setSearchString] = useState<string>('');
 

  const handleFocus = () => {
    onFocusChange(!suggestionBox); 
  };

  

  return (
    <div className='search-container'>
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
       
      />
      <button>
     { suggestionBox ? <ImCross size={30} onClick = {handleFocus}  /> :   <FiSearch size={30} onClick = {handleFocus} />}
      </button>
    </div>
  );
};

export default SearchBar;
