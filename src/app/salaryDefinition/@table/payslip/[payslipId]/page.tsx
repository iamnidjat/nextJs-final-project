import React from "react";
import { payslips } from "../../../../data/employeePayslipHistoryData";
import "./PayslipDetailPage.css";

const PayslipDetailPage = ({ params }: any) => {
  const myPayslips = payslips.find((payslip: any) => {
    return params.payslipId === payslip.id;
  });

  return (
    <div className="container">
      {myPayslips && (
        <div>
          <div className="label">Serial Number:</div>
          <div className="value">{myPayslips.serialNumber}</div>
          <div className="label">Staff Name:</div>
          <div className="value">{myPayslips.staffName}</div>
          <div className="label">Title:</div>
          <div className="value">{myPayslips.title}</div>
          <div className="label">Level:</div>
          <div className="value">{myPayslips.level}</div>
          <div className="label">Basic Salary:</div>
          <div className="value">{myPayslips.basicSalary}</div>
          <div className="label">Housing Allowance:</div>
          <div className="value">{myPayslips.housingAllowance}</div>
          <div className="label">Transport Allowance:</div>
          <div className="value">{myPayslips.transportAllowance}</div>
          <div className="label">Productivity Allowance:</div>
          <div className="value">{myPayslips.productivityAllowance}</div>
          <div className="label">Utility Allowance:</div>
          <div className="value">{myPayslips.utilityAllowance}</div>
          <div className="label">Communication Allowance:</div>
          <div className="value">{myPayslips.communicationAllowance}</div>
          <div className="label">Inconvenience Allowance:</div>
          <div className="value">{myPayslips.inconvenienceAllowance}</div>
          <div className="label">Gross Salary:</div>
          <div className="value">{myPayslips.grossSalary}</div>
          <div className="label">Deductions:</div>
          <div className="value">{myPayslips.deductions}</div>
          <div className="label">Tax/PAYE:</div>
          <div className="value">{myPayslips.tax}</div>
          <div className="label">Employee Pension:</div>
          <div className="value">{myPayslips.employeePension}</div>
          <div className="label">Net Salary:</div>
          <div className="value">{myPayslips.netSalary}</div>
        </div>
      )}
    </div>
  );
};

export default PayslipDetailPage;

