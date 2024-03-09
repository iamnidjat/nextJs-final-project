import React from "react";

interface ButtonStyles {
  background: string;
  padding: string;
  borderRadius: string;
  borderColor: string;
  color: string;
  cursor?: string;
  outline?: string;
  border?: string;
}

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  styles: ButtonStyles;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  styles,
}) => {
  return (
    <button style={styles} onClick={onClick}>
      {label}
    </button>
  );
};

export default CustomButton;
