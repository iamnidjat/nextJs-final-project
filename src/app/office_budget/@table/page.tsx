"use client";
import React, { useEffect, useState } from "react";
import styles from "../../salaryDefinition/@table/page.module.css";

const OfficeBudgetTable = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetchBudgets();
  }, []);

  const fetchBudgets = async () => {
    try {
      const res = await fetch("http://localhost:3000/office_budget/api");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching budgets: ", error);
    }
  };

  return (
    <div>
      <div  style={{ color: "#272525", fontWeight: "800", fontSize: "18px" }}>Budget History</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.thStyle}>S/N</th>
            <th className={styles.thStyle}>Budget No.</th>
            <th className={styles.thStyle}>Budget Description</th>
            <th className={styles.thStyle}>Budget Amount</th>
            <th className={styles.thStyle}>Actual Amount</th>
            <th className={styles.thStyle}>Variance</th>
            <th className={styles.thStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((budget: any) => (
            <tr key={budget.id}>
              <td>{budget.serialNumber}</td>
              <td>{budget.budgetNumber}</td>
              <td>{budget.budgetDescription}</td>
              <td>{budget.budgetAmount}</td>
              <td>{budget.actualAmount}</td>
              <td>{budget.variance}</td>
              <td>{budget.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OfficeBudgetTable;
