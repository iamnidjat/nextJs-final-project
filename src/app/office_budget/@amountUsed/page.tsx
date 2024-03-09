"use client";
import React, { useEffect, useState } from "react";
import { getRandomNumber } from "../../salaryDefinition/@graphics/page";
import BrownBudgetIcon from "@/app/icons/BrownBudgetIcon";

const OfficeBudgetAmountUsed = () => {
  const [number, setNumber] = useState<any>();

  useEffect(() => {
    const myNumber = getRandomNumber(1000000, 10000000);
    setNumber(
      myNumber.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
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
            ₦‎ {number}
          </div>
          <div>Amount used, YTD</div>
        </div>
        <BrownBudgetIcon></BrownBudgetIcon>
      </div>
    </div>
  );
};

export default OfficeBudgetAmountUsed;
