import React from "react";

interface CustomButtonProps {
  backgroundColor: string;
  label: string;
  labelColor: string;
  paddingHorizontal: number;
  paddingVertical: number;
  borderRadius: number;
  borderColor: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  backgroundColor,
  label,
  labelColor,
  paddingHorizontal,
  paddingVertical,
  borderRadius,
  borderColor,
  onClick,
}) => {
  return (
    <button
      style={{
        background: backgroundColor,
        padding: `${paddingVertical}px ${paddingHorizontal}px`,
        borderRadius: `${borderRadius}px`,
        borderColor: borderColor,
        color: labelColor,
        cursor: 'pointer', 
        outline: 'none', 
        border: 'none', 
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;

