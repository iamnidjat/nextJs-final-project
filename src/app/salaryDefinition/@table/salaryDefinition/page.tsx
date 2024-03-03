"use client";
import React, { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import CustomButton from "@/app/components/CustomButton";

const SalaryDefinitionTable = () => {
  const [data, setData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await fetch("http://localhost:3000/salaryDefinition/api");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching employees: ", error);
    }
  };

  const deleteEmployees = async (id: number) => {
    try {
      await fetch("http://localhost:3000/salaryDefinition/api", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-type": "application/json",
        },
      });
      await fetchEmployees();
    } catch (error) {
      console.error("Error deleting an employee: ", error);
    }
  };

  const updateEmployee = () => {
    alert("Заглушка");
  };

  const toCreateSD = () => {
    router.push("/createSalaryDefinition");
  };

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ color: "#272525", fontWeight: "800", fontSize: "18px" }}
          >
            Salary Definition
          </div>
          <CustomButton
            backgroundColor="linear-gradient(135deg, #14ADD6 0%, #384295 100%)"
            label="Create Salary Definition"
            labelColor="#fff"
            paddingHorizontal={50}
            paddingVertical={10}
            borderRadius={15}
            borderColor="#14ADD6"
            onClick={toCreateSD}
          />
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thStyle}>S/N</th>
              <th className={styles.thStyle}>Title</th>
              <th className={styles.thStyle}>Level</th>
              <th className={styles.thStyle}>Basic Salary</th>
              <th className={styles.thStyle}>Allowance</th>
              <th className={styles.thStyle}>Gross Salary</th>
              <th className={styles.thStyle}>Deductions</th>
              <th className={styles.thStyle}>Net Salary</th>
              <th className={styles.thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((employee: any) => (
              <tr key={employee.id}>
                <td>{employee.serialNumber}</td>
                <td>{employee.title}</td>
                <td>{employee.level}</td>
                <td>{employee.basicSalary}</td>
                <td>{employee.allowance}</td>
                <td>{employee.grossSalary}</td>
                <td>{employee.deductions}</td>
                <td>{employee.netSalary}</td>
                <td>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <button
                      style={{
                        color: "blue",
                        backgroundColor: "#F8F9FD",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={updateEmployee}
                    >
                      Edit
                    </button>
                    <button
                      style={{
                        color: "red",
                        backgroundColor: "#F8F9FD",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => deleteEmployees(employee.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          fontSize: "10px",
          fontWeight: "400",
          color: "#383838",
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        Copyright © 2022 Relia Energy. All Rights Reserved
      </div>
    </div>
  );
};

export default SalaryDefinitionTable;
