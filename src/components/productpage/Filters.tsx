import React, { useState, useEffect } from "react";
import Filter from "./Filter";

const brandOptions = [
  { label: "Mango", name: "mango", id: "mango" },
  { label: "H & M", name: "hm", id: "hm" },
];

const priceRangeOptions = [
  { label: "Under 500", name: "und500", id: "und500" },
  {
    label: "Above 500 and Under 3000",
    name: "abv500und3000",
    id: "abv500und3000",
  },
];

const ratingOptions = [
  { label: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️", name: "fivestar", id: "fivestar" },
  { label: "⭐️ ⭐️ ⭐️ ⭐️", name: "fourstar", id: "fourstar" },
  { label: "⭐️ ⭐️ ⭐️", name: "threestar", id: "threestar" },
  { label: "⭐️ ⭐️", name: "twostar", id: "twostar" },
  { label: "⭐️", name: "onestar", id: "onestar" },
];

interface selectedFiltersInterface {
  [key: string]: boolean;
}

interface FiltersProps {
  getFilters: (selectedFilters: selectedFiltersInterface) => void;
}

const Filters: React.FC<FiltersProps> = ({ getFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, boolean>
  >({});

  const handleFilterChange = (name: string, isChecked: boolean) => {
    setSelectedFilters((prevSelectedFilters) => ({
      ...prevSelectedFilters,
      [name]: isChecked,
    }));
  };

  useEffect(() => {
    getFilters(selectedFilters);
  }, [selectedFilters]);

  console.log(selectedFilters);

  return (
    <div>
      <h1 className="text-2xl">Search Results</h1>
      <Filter
        title="Brand"
        options={brandOptions}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
      />
      <Filter
        title="Price Range"
        options={priceRangeOptions}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
      />
      <Filter
        title="Rating"
        options={ratingOptions}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default Filters;
