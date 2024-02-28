"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import CustomButton from "../components/CustomButton";
import CustomInputText from "../components/CustomInputText";
import CustomOption from "../components/CustomOption";
import CustomLabel from "../components/CustomLabel";
import SuccessModal from "../modals/successModal";
import Link from "next/link";

const CreateSalaryDefinition = () => {
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
      <Link href="/salaryDefinition">Back</Link>
      <div className={styles.subMainContainer}>
        <div>
          <CustomLabel
            label="Create Salary Definition"
            height={30}
            color="black"
            weight={800}
          />
        </div>
        <div className={styles.firstLine}>
          {renderOptionField("Title")}
          {renderOptionField("Level")}
          {renderInputField("Basic Salary", "Enter amount in Naira")}
        </div>
        <div className={styles.firstLine}>
          {renderInputField("Allowance", "Enter amount in Naira")}
          {renderInputField("Gross Salary", "Enter amount in Naira")}
          {renderInputField("Deduction", "Enter amount in Naira")}
        </div>
        <div className={styles.secondLine}>
          {renderInputField("Net Salary", "Enter amount in Naira")}
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
      <div style={{fontSize: "10px", fontWeight: "400", color: "#383838"}}>Copyright © 2022 Relia Energy. All Rights Reserved</div>
    </div>
  );
};

export default CreateSalaryDefinition;
