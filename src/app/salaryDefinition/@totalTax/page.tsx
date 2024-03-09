"use client";
import React, { useEffect, useState } from "react";
import { getRandomNumber } from "../@graphics/page";
import ArrowDownIcon from "@/app/icons/ArrowDownIcon";
import PurpleIcon from "@/app/icons/PurpleIcon";

const SalaryDefinitionTotalTax = () => {
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
            <div>Total tax this month</div>
          </div>
          <PurpleIcon></PurpleIcon>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ArrowDownIcon></ArrowDownIcon>
          <div>{percent} % less than last month</div>
        </div>
      </div>
    </div>
  );
};

export default SalaryDefinitionTotalTax;
