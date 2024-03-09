import React from "react";

interface OptionStyles {
  padding: string;
  borderRadius: string;
  borderColor: string;
}

interface CustomOptionProps {
  options: Option[];
  onChange: any;
  styles: OptionStyles;
  value: any;
}

const CustomOption: React.FC<CustomOptionProps> = ({
  options,
  styles,
  value,
  onChange,
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={styles}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomOption;
