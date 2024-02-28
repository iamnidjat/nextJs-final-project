import React from "react";
import { payslips } from "../../../../data/employeePayslipHistoryData";

const PayslipDetailPage = ({ params }: any) => {
  const myPayslips = payslips.find((payslip: any) => {
    return params.payslipId === payslip.id;
  });

  return (
    <div>
      {myPayslips && (
        <div>
          <div>Serial Number: {myPayslips.serialNumber}</div>
          <div>Staff Name: {myPayslips.staffName}</div>
          <div>Title: {myPayslips.title}</div>
          <div>Level: {myPayslips.level}</div>
          <div>Basic Salary: {myPayslips.basicSalary}</div>
          <div>Housing Allowance: {myPayslips.housingAllowance}</div>
          <div>Transport Allowance: {myPayslips.transportAllowance}</div>
          <div>Productivity Allowance: {myPayslips.productivityAllowance}</div>
          <div>Utility Allowance: {myPayslips.utilityAllowance}</div>
          <div>
            Communication Allowance: {myPayslips.communicationAllowance}
          </div>
          <div>
            Inconvenience Allowance: {myPayslips.inconvenienceAllowance}
          </div>
          <div>Gross Salary: {myPayslips.grossSalary}</div>
          <div>Deductions: {myPayslips.deductions}</div>
          <div>Net Salary: {myPayslips.netSalary}</div>
        </div>
      )}
    </div>
  );
};

export default PayslipDetailPage;
