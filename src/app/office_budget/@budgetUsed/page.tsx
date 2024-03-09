"use client";
import React, { useEffect, useState } from "react";
import { getRandomNumber } from "../../salaryDefinition/@graphics/page";
import GreenBudgetIcon from "@/app/icons/GreenBudgetIcon";

const OfficeBudgetBudgetUsed = () => {
  const [percent, setPercent] = useState<any>();

  useEffect(() => {
    const myPercent = getRandomNumber(1, 5); 
    setPercent(myPercent);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "30px",
        }}
      >
        <div>
          <div
            style={{
              color: "#272525",
              fontWeight: "800",
              fontSize: "25px",
              marginBottom: "10px",
            }}
          >
            {percent} %
          </div>
          <div>Budget % used</div>
        </div>
        <GreenBudgetIcon></GreenBudgetIcon>
      </div>
    </div>
  );
};

export default OfficeBudgetBudgetUsed;
