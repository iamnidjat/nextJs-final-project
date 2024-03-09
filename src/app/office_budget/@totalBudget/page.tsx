"use client";
import ArrowUpIcon from "@/app/icons/ArrowUpIcon";
import React, { useEffect, useState } from "react";
import { getRandomNumber } from "../../salaryDefinition/@graphics/page";
import BlueBudgetIcon from "@/app/icons/BlueBudgetIcon";

const OfficeBudgetTotalBudget = () => {
  const [number, setNumber] = useState<any>();
  const [percent, setPercent] = useState<any>();

  useEffect(() => {
    const myNumber = getRandomNumber(1000000, 10000000);
    const myPercent = getRandomNumber(1, 5);
    setNumber(
      myNumber.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
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
             ₦‎ {number}
          </div>
          <div>Total budget balance</div>
        </div>
        <BlueBudgetIcon></BlueBudgetIcon>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ArrowUpIcon></ArrowUpIcon>
        <div>{percent} % more than last month</div>
      </div>
    </div>
  );
};

export default OfficeBudgetTotalBudget;
