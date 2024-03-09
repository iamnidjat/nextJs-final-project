import React, { ChangeEvent } from "react";

interface InputStyles {
  padding: string;
  borderRadius: string;
  borderColor: string;
}

interface CustomInputProps {
  placeholder: string;
  onChange: any;
  styles: InputStyles;
  value: any;
}

const CustomInputText: React.FC<CustomInputProps> = ({
  placeholder,
  styles,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={styles}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default CustomInputText;
