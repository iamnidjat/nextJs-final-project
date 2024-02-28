"use client";
import React, { useEffect, useState } from "react";
import { getRandomNumber } from "../@graphics/page";
import BlueIcon from "@/app/icons/blueIcon";
import ArrowUpIcon from "@/app/icons/arrowUpIcon";

const SalaryDefinitionNetSalary = () => {
  const [number, setNumber] = useState<any>();
  const [percent, setPercent] = useState<any>();

  useEffect(() => {
    const myNumber = getRandomNumber(1000000, 10000000);
    const myPercent = getRandomNumber(1, 5);
    setNumber(myNumber);
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
          <div>
            <div
              style={{
                color: "#272525",
                fontWeight: "800",
                fontSize: "40px",
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
