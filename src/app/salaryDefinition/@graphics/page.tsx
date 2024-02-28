"use client";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const SalaryDefinitionGraphics = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const newData = Array.from({ length: 12 }, (_, i) => ({
      month: new Date(2022, i, 1).toLocaleString("default", { month: "short" }),
      "Net Salary": getRandomNumber(0, 200000),
      tax: getRandomNumber(0, 200000),
      loan: getRandomNumber(0, 200000),
    }));
    setData(newData);
  }, []);

  return (
    <div>
      <div>Annual payroll summary</div>
      <BarChart  
        width={800}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis
          domain={[0, 600000]}
          tickFormatter={(value) => value / 1000 + "k"}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="Net Salary" stackId="a" fill="#82ca9d" />
        <Bar dataKey="tax" stackId="a" fill="#8884d8" />
        <Bar dataKey="loan" stackId="a" fill="red" />
      </BarChart>
    </div>
  );
};

export default SalaryDefinitionGraphics;
