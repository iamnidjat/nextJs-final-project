"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import CustomButton from "../components/CustomButton";
import CustomInputText from "../components/CustomInputText";
import CustomOption from "../components/CustomOption";
import CustomLabel from "../components/CustomLabel";
import SuccessModal from "../modals/successModal";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CreateSalaryDefinition = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [title, setTitle] = useState<any>();
  const [level, setLevel] = useState<any>();
  const [basicSalary, setBasicSalary] = useState<any>(0);
  const [allowance, setAllowance] = useState<any>(0);
  const [grossSalary, setGrossSalary] = useState<any>(0);
  const [deductions, setDeductions] = useState<any>(0);
  const [netSalary, setNetSalary] = useState<any>(0);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const addSalaryDefinition = async () => {
    if (
      basicSalary >= 0 &&
      allowance >= 0 &&
      grossSalary >= 0 &&
      deductions >= 0 &&
      netSalary >= 0
    ) {
      try {
        const res = await fetch("createSalaryDefinition/api", {
          method: "POST",
          body: JSON.stringify({
            title,
            level,
            basicSalary,
            allowance,
            grossSalary,
            deductions,
            netSalary,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });
        setShowModal(true);
        setTimeout(() => {
          router.push("/salaryDefinition/salaryDefinition");
        }, 5000);
      } catch (error) {
        console.error("Error adding a tax:", error);
      }
    } else {
      alert("Incorrect data! Fill in all fields!");
    }
  };

  const renderInputField = (
    label: string,
    placeholder: string,
    value: any,
    onChange: any
  ) => (
    <div>
      <div>{label}</div>
      <CustomInputText
        placeholder={placeholder}
        styles={inputStyles}
        value={value}
        onChange={onChange}
      />
    </div>
  );

  const renderOptionField = (label: string, value: any, onChange: any) => (
    <div>
      <div>{label}</div>
      <CustomOption
        styles={optionStyles}
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  );

  return (
    <div>
      <Link
        href="/salaryDefinition/salaryDefinition"
        style={{
          textDecoration: "none",
          color: "#14ADD6",
          fontWeight: "400",
          fontSize: "16px",
          marginLeft: "20px",
        }}
      >
        &lt; Back
      </Link>
      <div style={{ marginTop: "20px" }}>
        <SuccessModal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        />

        <div className={styles.subMainContainer}>
          <div style={{ marginLeft: "65px" }}>
            <CustomLabel
              label="Create Salary Definition"
              styles={labelStyles}
            />
          </div>
          <div className={styles.firstLine}>
            {renderOptionField("Title", title, setTitle)}
            {renderOptionField("Level", level, setLevel)}
            {renderInputField(
              "Basic Salary",
              "Enter amount in Naira",
              basicSalary,
              setBasicSalary
            )}
          </div>
          <div className={styles.firstLine}>
            {renderInputField(
              "Allowance",
              "Enter amount in Naira",
              allowance,
              setAllowance
            )}
            {renderInputField(
              "Gross Salary",
              "Enter amount in Naira",
              grossSalary,
              setGrossSalary
            )}
            {renderInputField(
              "Deduction",
              "Enter amount in Naira",
              deductions,
              setDeductions
            )}
          </div>
          <div className={styles.secondLine}>
            {renderInputField(
              "Net Salary",
              "Enter amount in Naira",
              netSalary,
              setNetSalary
            )}
            <div style={{ marginLeft: "120px", marginTop: "20px" }}>
              <CustomButton
                styles={buttonStyles}
                label="Create"
                onClick={addSalaryDefinition}
              />
            </div>
          </div>
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
    </div>
  );
};

export default CreateSalaryDefinition;

const buttonStyles = {
  background: "linear-gradient(135deg, #14ADD6 0%, #384295 100%)",
  padding: "10px 120px",
  borderRadius: "15px",
  borderColor: "#14ADD6",
  color: "#fff",
  cursor: "pointer",
  outline: "none",
  border: "none",
};

const inputStyles = {
  padding: " 10px 120px 10px 5px",
  borderRadius: "8px",
  borderColor: "#D0D0D0",
};

const optionStyles = {
  padding: " 10px 200px 10px 5px",
  borderRadius: "8px",
  borderColor: "#D0D0D0",
};

const labelStyles = {
  color: "black",
  height: "30px",
  fontWeight: "800",
};
