"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import CustomButton from "../components/CustomButton";
import CustomInputText from "../components/CustomInputText";
import CustomOption from "../components/CustomOption";
import CustomLabel from "../components/CustomLabel";
import SuccessModal from "../modals/successModal";
import Link from "next/link";

const CreatePayslip = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const renderInputField = (label: string, placeholder: string) => (
    <div>
      <div>{label}</div>
      <CustomInputText
        placeholder={placeholder}
        paddingLeft={5}
        paddingTop={10}
        paddingRight={100}
        paddingBottom={10}
        borderColor="#D0D0D0"
        borderRadius={8} value={undefined} onChange={undefined}      />
    </div>
  );

  const renderOptionField = (label: string) => (
    <div>
      <div>{label}</div>
      <CustomOption
        paddingLeft={5}
        paddingTop={10}
        paddingRight={100}
        paddingBottom={10}
        borderColor="#D0D0D0"
        borderRadius={8}
        options={options}
      />
    </div>
  );

  return (
    <div>
      <SuccessModal isOpen={showModal} />
      <Link href="/salaryDefinition/payslip">Back</Link>
      <div>
        <div className={styles.subMainContainer}>
          <div>
            <CustomLabel
              label="Create Payslip"
              height={30}
              color="black"
              weight={800}
            />
          </div>
          <div>
            <CustomLabel
              label="Basic Information"
              height={20}
              color="black"
              weight={600}
            />
          </div>
          <div className={styles.firstLine}>
            {renderOptionField("Staff name")}
            {renderOptionField("Title")}
            {renderOptionField("Level")}
          </div>
        </div>
      </div>

      <div>
        <div className={styles.subMainContainer}>
          <div>
            <CustomLabel
              label="Salary Structure"
              height={30}
              color="black"
              weight={800}
            />
          </div>
          <div className={styles.firstLine}>
            {renderInputField("Basic Salary", "Enter amount")}
            {renderInputField("Housing Allowance", "Enter amount")}
            {renderInputField("Transport Allowance", "Enter amount")}
          </div>
          <div className={styles.firstLine}>
            {renderInputField("Utility Allowance", "Enter amount")}
            {renderInputField("Productivity Allowance", "Enter amount")}
            {renderInputField("Communication Allowance", "Enter amount")}
          </div>
          <div className={styles.firstLine}>
            {renderInputField("Inconvenience Allowance", "Enter amount")}
            {renderInputField("Gross Salary", "Amount")}
          </div>
        </div>
      </div>

      <div>
        <div className={styles.subMainContainer}>
          <div>
            <CustomLabel
              label="Deductions"
              height={30}
              color="black"
              weight={800}
            />
          </div>
          <div className={styles.firstLine}>
            {renderInputField("TAX/PAYE", "Enter amount")}
            {renderInputField("Employee pension", "Enter amount")}
            {renderInputField("Total deduction", "Amount")}
          </div>
        </div>
      </div>

      <div>
        <div className={styles.subMainContainer}>
          <div>
            <CustomLabel
              label="Net Salary"
              height={30}
              color="black"
              weight={800}
            />
          </div>
          <div className={styles.thirdLine}>
            {renderInputField("Net Salary", "Enter amount")}
            <CustomButton
              backgroundColor="linear-gradient(135deg, #14ADD6 0%, #384295 100%)"
              label="Create"
              labelColor="#fff"
              paddingHorizontal={150}
              paddingVertical={10}
              borderRadius={15}
              borderColor="#14ADD6"
              onClick={handleButtonClick}
            />
          </div>
        </div>
      </div>
      <div style={{fontSize: "10px", fontWeight: "400", color: "#383838"}}>Copyright © 2022 Relia Energy. All Rights Reserved</div>
    </div>
  );
};

export default CreatePayslip;
