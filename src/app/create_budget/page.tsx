"use client";
import React, { ChangeEvent, useState } from "react";
import styles from "./page.module.css";
import CustomButton from "../components/CustomButton";
import CustomInputText from "../components/CustomInputText";
import CustomOption from "../components/CustomOption";
import CustomLabel from "../components/CustomLabel";
import SuccessModal from "../modals/successModal";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CreateBudget = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [budgetDescription, setBudgetDescription] = useState<string>();
  const [budgetNumber, setBudgetNumber] = useState<number>(0);
  const [budgetAmount, setBudgetAmount] = useState<number>(0);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    setDate(newDate);
  };
  
  const [receivingOffice, setReceivingOffice] = useState();

  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const addBudget = async () => {
    if (budgetDescription !== '' && budgetNumber >= 0 && budgetAmount >= 0)
    {
      try {
        const res = await fetch("create_budget/api", {
          method: "POST",
          body: JSON.stringify({
            budgetDescription,
            budgetNumber,
            budgetAmount,
            date,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });
        setShowModal(true);
        setTimeout(() => {
          router.push("/office_budget");
        }, 5000);
      } catch (error) {
        console.error("Error adding a budget:", error);
      }
    }
    else {
      alert("Incorrect data! Fill in all fields!")
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
        href="/office_budget"
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
            <div>
              <CustomLabel label="Budget Structure" styles={labelStyles} />
            </div>
            <div className={styles.firstLine}>
              {renderInputField(
                "Budget number",
                "Enter item",
                budgetNumber,
                setBudgetNumber
              )}
              {renderInputField(
                "Budget description",
                "Enter description",
                budgetDescription,
                setBudgetDescription
              )}
              {renderInputField(
                "Budget amount",
                "Enter amount",
                budgetAmount,
                setBudgetAmount
              )}
            </div>
            <div className={styles.firstLine}>
              <input
                type="date"
                style={dateStyles}
                value={date ? date.toISOString().split('T')[0] : ''}
                onChange={handleDateChange}
              ></input>
              {renderOptionField(
                "Receiving office",
                receivingOffice,
                setReceivingOffice
              )}
            </div>
            <div className={styles.secondLine}>
              <CustomButton
                styles={buttonStyles}
                label="Create Budget"
                onClick={addBudget}
              ></CustomButton>
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
  );
};

export default CreateBudget;

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

const dateStyles = {
  padding: " 10px 75px 10px 75px",
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
