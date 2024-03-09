"use client";
import React, { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";
import CustomButton from "@/app/components/CustomButton";

const SalaryDefinitionTable = () => {
  const [data, setData] = useState<any>(null);

  const [sNumber, setSNumber] = useState<any>(null);
  const [originalSNumber, setOriginalSNumber] = useState<any>(null);

  const [title, setTitle] = useState<any>(null);
  const [originalTitle, setOriginalTitle] = useState<any>(null);

  const [level, setLevel] = useState<any>(null);
  const [originalLevel, setOriginalLevel] = useState<any>(null);

  const [basicSalary, setBasicSalary] = useState<any>(null);
  const [originalBasicSalary, setOriginalBasicSalary] = useState<any>(null);

  const [allowance, setAllowance] = useState<any>(null);
  const [originalAllowance, setOriginalAllowance] = useState<any>(null);

  const [grossSalary, setGrossSalary] = useState<any>(null);
  const [originalGrossSalary, setOriginalGrossSalary] = useState<any>(null);

  const [deductions, setDeductions] = useState<any>(null);
  const [originalDeductions, setOriginalDeductions] = useState<any>(null);

  const [netSalary, setNetSalary] = useState<any>(null);
  const [originalNetSalary, setOriginalNetSalary] = useState<any>(null);

  const [editingEmployeeId, setEditingEmployeeId] = useState<any>(null);
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

  const updateEmployee = async (id: number) => {
    try {
      const res = await fetch("http://localhost:3000/salaryDefinition/api", {
        method: "PATCH",
        body: JSON.stringify({
          sNumber: sNumber === null ? originalSNumber : sNumber,
          title: title === null ? originalTitle : title,
          level: level === null ? originalLevel : level,
          basicSalary: basicSalary === null ? originalBasicSalary : basicSalary,
          allowance: allowance === null ? originalAllowance : allowance,
          grossSalary: grossSalary === null ? originalGrossSalary : grossSalary,
          netSalary: netSalary === null ? originalNetSalary : netSalary,
          deductions: deductions === null ? originalDeductions : deductions,
          id,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      setEditingEmployeeId(null);
      await fetchEmployees();
    } catch (error) {
      console.error("Error updating an employee:", error);
    }
  };

  const toCreateSD = () => {
    router.push("/createSalaryDefinition");
  };

  const enterEditMode = (employee: any) => {
    setOriginalSNumber(employee.serialNumber);
    setOriginalTitle(employee.title);
    setOriginalLevel(employee.level);
    setOriginalBasicSalary(employee.basicSalary);
    setOriginalAllowance(employee.allowance);
    setOriginalGrossSalary(employee.grossSalary);
    setOriginalNetSalary(employee.netSalary);
    setOriginalDeductions(employee.deductions);

    setSNumber(employee.serialNumber);
    setTitle(employee.title);
    setLevel(employee.level);
    setBasicSalary(employee.basicSalary);
    setAllowance(employee.allowance);
    setGrossSalary(employee.grossSalary);
    setNetSalary(employee.netSalary);
    setDeductions(employee.deductions);

    setEditingEmployeeId(employee.id);
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
            styles={buttonStyles}
            label="Create Salary Definition"
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
                {!editingEmployeeId || editingEmployeeId !== employee.id ? (
                  <>
                    <td>{employee.serialNumber}</td>
                    <td>{employee.title}</td>
                    <td>{employee.level}</td>
                    <td>{employee.basicSalary}</td>
                    <td>{employee.allowance}</td>
                    <td>{employee.grossSalary}</td>
                    <td>{employee.deductions}</td>
                    <td>{employee.netSalary}</td>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      value={sNumber}
                      onChange={(e) => setSNumber(e.target.value)}
                    />
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                      type="text"
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                    />
                    <input
                      type="text"
                      value={basicSalary}
                      onChange={(e) => setBasicSalary(e.target.value)}
                    />
                    <input
                      type="text"
                      value={allowance}
                      onChange={(e) => setAllowance(e.target.value)}
                    />
                    <input
                      type="text"
                      value={grossSalary}
                      onChange={(e) => setGrossSalary(e.target.value)}
                    />
                    <input
                      type="text"
                      value={netSalary}
                      onChange={(e) => setNetSalary(e.target.value)}
                    />
                    <input
                      type="text"
                      value={deductions}
                      onChange={(e) => setDeductions(e.target.value)}
                    />
                  </>
                )}
                <td>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div>
                      {!editingEmployeeId ||
                      editingEmployeeId !== employee.id ? (
                        <button
                          style={{
                            color: "blue",
                            backgroundColor: "#F8F9FD",
                            border: "none",
                            cursor: "pointer",
                          }}
                          onClick={() => enterEditMode(employee)}
                        >
                          Edit
                        </button>
                      ) : (
                        <button
                          style={{
                            color: "blue",
                            backgroundColor: "#F8F9FD",
                            border: "none",
                            cursor: "pointer",
                          }}
                          onClick={() => updateEmployee(employee.id)}
                        >
                          Update
                        </button>
                      )}
                    </div>
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

const buttonStyles = {
  background: "linear-gradient(135deg, #14ADD6 0%, #384295 100%)",
  padding: "10px 50px",
  borderRadius: "15px",
  borderColor: "#14ADD6",
  color: "#fff",
  cursor: "pointer",
  outline: "none",
  border: "none",
};
