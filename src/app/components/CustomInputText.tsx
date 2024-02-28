import React, { ChangeEvent } from "react";

const CustomInputText = ({
  placeholder,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  borderRadius,
  borderColor,
  value,
  onChange,
}: {
  placeholder: string;
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
    <input
      type="text"
      placeholder={placeholder}
      style={{
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
        borderColor: borderColor,
        borderRadius: borderRadius,
      }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default CustomInputText;
