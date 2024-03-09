"use client";
import React, { useEffect, useState } from "react";
import { getRandomNumber } from "../@graphics/page";
import BlueIcon from "@/app/icons/BlueIcon";
import ArrowUpIcon from "@/app/icons/ArrowUpIcon";

const SalaryDefinitionNetSalary = () => {
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
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "30px",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <div
              style={{
                color: "#272525",
                fontWeight: "800",
                fontSize: "25px",
                marginBottom: "10px",
              }}
            >
              {number}
            </div>
            <div>Net Salary this month</div>
          </div>
          <BlueIcon></BlueIcon>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ArrowUpIcon></ArrowUpIcon>
          <div>{percent} % more than last month</div>
        </div>
      </div>
    </div>
  );
};

export default SalaryDefinitionNetSalary;
