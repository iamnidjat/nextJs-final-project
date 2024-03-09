"use client";
import React, { useEffect, useState } from "react";
import { getRandomNumber } from "../../salaryDefinition/@graphics/page";
import PurpleBudgetIcon from "@/app/icons/PurpleBudgetIcon";

const OfficeBudgetTotalBalance = () => {
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
          <div>Total Annual Budget</div>
        </div>
        <PurpleBudgetIcon></PurpleBudgetIcon>
      </div>
    </div>
  );
};

export default OfficeBudgetTotalBalance;
