import React from "react";

const CustomLabel = ({
  label,
  height,
  weight,
  color,
}: {
  label: string;
  height: number;
  weight: number;
  color: string;
}) => {
  return (
    <div style={{ height: `${height}px`, color: color, fontWeight: weight }}>
      {label}
    </div>
  );
};

export default CustomLabel;
