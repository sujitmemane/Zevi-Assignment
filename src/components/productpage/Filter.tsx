import { AiOutlineArrowDown } from "react-icons/ai";
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
    <div>
      <div onClick={toggleFilter}>
        <h1>{title}</h1>
        <AiOutlineArrowDown size={30} />
      </div>
      {isOpen && (
        <div>
          {options.map((option) => (
            <div key={option.id}>
              <input
                type="checkbox"
                name={option.name}
                id={option.id}
                checked={selectedFilters[option.name] || false}
                onChange={handleOptionChange}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
