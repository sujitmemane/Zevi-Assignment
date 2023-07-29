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
    if (searchString.length === 0 && !suggestionBox) {
      toast.error("Please Input");
      return;
    }

    onFocusChange(!suggestionBox);

    setSearchString("");
  };

  return (
    <div>
      <div className="mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-24 xl:pt-32">
        <form className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-2">
          <input
            type="text"
            value={searchString}
            placeholder="Search"
            onChange={(e) => setSearchString(e.target.value)}
            className="w-full sm:w-auto px-6 py-3 rounded outline-none text-lg"
          />
          <button
            type="button"
            className="px-4 py-3 sm:py-3 bg-blue-500 rounded"
          >
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
