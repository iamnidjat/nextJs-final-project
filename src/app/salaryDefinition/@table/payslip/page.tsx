"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>Payslips</div>
          <button onClick={toCreatePayslip}>Create Payslips</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Staff Name</th>
              <th>Title</th>
              <th>Level</th>
              <th>Basic Salary</th>
              <th>Allowance</th>
              <th>Gross Salary</th>
              <th>Deductions</th>
              <th>Net Salary</th>
              <th>Action</th>
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
                    style={{ color: "blue" }}
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
      <div style={{ fontSize: "10px", fontWeight: "400", color: "#383838" }}>
        Copyright © 2022 Relia Energy. All Rights Reserved
      </div>
    </div>
  );
};

export default PayslipDefinitionTable;
