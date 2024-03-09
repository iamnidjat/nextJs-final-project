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

const CreatePayslip = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [staffName, setStaffName] = useState<any>();
  const [title, setTitle] = useState<any>();
  const [level, setLevel] = useState<any>();
  const [basicSalary, setBasicSalary] = useState<any>(0);
  const [housingAllowance, setHousingAllowance] = useState<any>(0);
  const [transportAllowance, setTransportAllowance] = useState<any>(0);
  const [utilityAllowance, setUtilityAllowance] = useState<any>(0);
  const [productivityAllowance, setProductivityAllowance] = useState<any>(0);
  const [communicationAllowance, setCommunicationAllowance] = useState<any>(0);
  const [inconvenienceAllowance, setInconvenienceAllowance] = useState<any>(0);
  const [grossSalary, setGrossSalary] = useState<any>(0);
  const [deductions, setDeductions] = useState<any>(0);
  const [netSalary, setNetSalary] = useState<any>(0);
  const [tax, setTax] = useState<any>(0);
  const [pension, setPension] = useState<any>(0);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const addPayslip = async () => {
    if (
      basicSalary >= 0 &&
      housingAllowance >= 0 &&
      transportAllowance >= 0 &&
      utilityAllowance >= 0 &&
      productivityAllowance >= 0 &&
      communicationAllowance >= 0 &&
      inconvenienceAllowance >= 0 &&
      grossSalary >= 0 &&
      deductions >= 0 &&
      netSalary >= 0 &&
      tax >= 0 &&
      pension >= 0
    ) {
      try {
        const res = await fetch("createPayslip/api", {
          method: "POST",
          body: JSON.stringify({
            staffName,
            title,
            level,
            basicSalary,
            housingAllowance,
            transportAllowance,
            utilityAllowance,
            productivityAllowance,
            communicationAllowance,
            inconvenienceAllowance,
            grossSalary,
            deductions,
            tax,
            pension,
            netSalary,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });
        setShowModal(true);
        setTimeout(() => {
          router.push("/salaryDefinition/payslip");
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
        href="/salaryDefinition/payslip"
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
      <div>
        <SuccessModal isOpen={showModal} />

        <div>
          <div className={styles.subMainContainer}>
            <div style={{ marginLeft: "65px", marginBottom: "30px" }}>
              <CustomLabel label="Create Payslip" styles={labelStyles} />
            </div>
            <div>
              <CustomLabel label="Basic Information" styles={labelStyles} />
            </div>
            <div className={styles.firstLine}>
              {renderOptionField("Staff name", staffName, setStaffName)}
              {renderOptionField("Title", title, setTitle)}
              {renderOptionField("Level", level, setLevel)}
            </div>
          </div>
        </div>

        <div>
          <div className={styles.subMainContainer}>
            <div>
              <CustomLabel label="Salary Structure" styles={labelStyles} />
            </div>
            <div className={styles.firstLine}>
              {renderInputField(
                "Basic Salary",
                "Enter amount",
                basicSalary,
                setBasicSalary
              )}
              {renderInputField(
                "Housing Allowance",
                "Enter amount",
                housingAllowance,
                setHousingAllowance
              )}
              {renderInputField(
                "Transport Allowance",
                "Enter amount",
                transportAllowance,
                setTransportAllowance
              )}
            </div>
            <div className={styles.firstLine}>
              {renderInputField(
                "Utility Allowance",
                "Enter amount",
                utilityAllowance,
                setUtilityAllowance
              )}
              {renderInputField(
                "Productivity Allowance",
                "Enter amount",
                productivityAllowance,
                setProductivityAllowance
              )}
              {renderInputField(
                "Communication Allowance",
                "Enter amount",
                communicationAllowance,
                setCommunicationAllowance
              )}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              {renderInputField(
                "Inconvenience Allowance",
                "Enter amount",
                inconvenienceAllowance,
                setInconvenienceAllowance
              )}
              {renderInputField(
                "Gross Salary",
                "Amount",
                grossSalary,
                setGrossSalary
              )}
            </div>
          </div>
        </div>

        <div>
          <div className={styles.subMainContainer}>
            <div>
              <CustomLabel label="Deductions" styles={labelStyles} />
            </div>
            <div className={styles.firstLine}>
              {renderInputField("TAX/PAYE", "Enter amount", tax, setTax)}
              {renderInputField(
                "Employee pension",
                "Enter amount",
                pension,
                setPension
              )}
              {renderInputField(
                "Total deduction",
                "Amount",
                deductions,
                setDeductions
              )}
            </div>
          </div>
        </div>

        <div>
          <div className={styles.subMainContainer}>
            <div>
              <CustomLabel label="Net Salary" styles={labelStyles} />
            </div>
            <div className={styles.thirdLine}>
              {renderInputField(
                "Net Salary",
                "Enter amount",
                netSalary,
                setNetSalary
              )}
              <div style={{ marginTop: "30px" }}>
                <CustomButton
                  styles={buttonStyles}
                  label="Create"
                  onClick={addPayslip}
                />
              </div>
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

export default CreatePayslip;

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
