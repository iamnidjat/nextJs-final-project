import React from "react";

const CustomOption = ({
  options,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  borderRadius,
  borderColor,
  value,
  onChange,
}: {
  options: Option[];
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
  borderRadius: number;
  borderColor: string;
  value: any;
  onChange: any;
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
        borderColor: borderColor,
        borderRadius: borderRadius,
      }}
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
