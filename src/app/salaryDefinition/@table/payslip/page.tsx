"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import CustomButton from "@/app/components/CustomButton";

const PayslipDefinitionTable = () => {
  const [data, setData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await fetch("http://localhost:3000/payslip/api");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const toCreatePayslip = () => {
    router.push("/createPayslip");
  };

  const viewMore = (id: number) => {
    router.push(`/salaryDefinition/payslip/${id}`);
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
            Payslips
          </div>
          <CustomButton
            backgroundColor="linear-gradient(135deg, #14ADD6 0%, #384295 100%)"
            label="Create Payslip"
            labelColor="#fff"
            paddingHorizontal={50}
            paddingVertical={10}
            borderRadius={15}
            borderColor="#14ADD6"
            onClick={toCreatePayslip}
          />
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thStyle}>S/N</th>
              <th className={styles.thStyle}>Staff Name</th>
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
                <td>{employee.staffName}</td>
                <td>{employee.title}</td>
                <td>{employee.level}</td>
                <td>{employee.basicSalary}</td>
                <td>{employee.allowance}</td>
                <td>{employee.grossSalary}</td>
                <td>{employee.deductions}</td>
                <td>{employee.netSalary}</td>
                <td>
                  <button
                    style={{
                      color: "blue",
                      backgroundColor: "#F8F9FD",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => viewMore(employee.id)}
                  >
                    View more
                  </button>
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

export default PayslipDefinitionTable;
