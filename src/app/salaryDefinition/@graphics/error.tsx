"use client";
import React from "react";

const GraphicsErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default GraphicsErrorBoundary;