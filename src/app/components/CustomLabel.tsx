import React from "react";

interface LabelStyles {
  height: string;
  fontWeight: string;
  color: string;
}

interface CustomLabelProps {
  styles: LabelStyles;
  label: string;
}

const CustomLabel:React.FC<CustomLabelProps> = ({
  label,
  styles,
}) => {
  return (
    <div style={styles}>
      {label}
    </div>
  );
};

export default CustomLabel;
