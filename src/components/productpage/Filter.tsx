import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { useState } from "react";

interface FilterOption {
  label: string;
  name: string;
  id: string;
}

interface FilterProps {
  title: string;
  options: FilterOption[];
  selectedFilters: Record<string, boolean>;
  onFilterChange: (name: string, isChecked: boolean) => void;
}

const Filter: React.FC<FilterProps> = ({
  title,
  options,
  selectedFilters,
  onFilterChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleFilter = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    onFilterChange(name, checked);
  };

  return (
    <div className="my-4">
      <div
        className="flex flex-row items-center justify-between cursor-pointer bg-black text-white px-3 py-3 rounded"
        onClick={toggleFilter}
      >
        <h1 className="text-xl">{title}</h1>
        {isOpen ? (
          <BsFillArrowUpCircleFill size={25} />
        ) : (
          <BsFillArrowDownCircleFill size={25} />
        )}
      </div>
      {isOpen && (
        <div>
          {options.map((option) => (
            <div
              key={option.id}
              className="bg-[#ebf2fa] rounded  cursor-pointer flex space-x-2 px-3 py-2 my-1"
            >
              <input
                type="checkbox"
                name={option.name}
                id={option.id}
                checked={selectedFilters[option.name] || false}
                onChange={handleOptionChange}
                className="cursor-pointer"
              />
              <label htmlFor={option.id} className="cursor-pointer">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
