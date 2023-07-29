import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SearchBarProps {
  onFocusChange: (value: boolean) => void;
  suggestionBox: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onFocusChange,
  suggestionBox,
}) => {
  const [searchString, setSearchString] = useState<string>("");

  const handleFocus = (event: any) => {
    event.preventDefault();
    if (searchString.length === 0) {
      toast.error("Please Input");
    }
    if (searchString.length !== 0) {
      onFocusChange(!suggestionBox);
    }
  };

  return (
    <div>
      <div className="mx-auto pt-24 ">
        <form className="flex flex-row items-center justify-center  space-x-2">
          <input
            type="text"
            value={searchString}
            placeholder="Search"
            onChange={(e) => setSearchString(e.target.value)}
            className="px-20 rounded  py-3 outline-none"
          />
          <button className="px-3 py-4 ">
            {suggestionBox ? (
              <ImCross size={20} onClick={handleFocus} color="white" />
            ) : (
              <FiSearch size={30} onClick={handleFocus} color="white" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
