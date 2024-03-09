"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import CustomButton from "../components/CustomButton";
import CustomInputText from "../components/CustomInputText";
import CustomOption from "../components/CustomOption";
import CustomLabel from "../components/CustomLabel";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SuccessModal from "../modals/successModal";

const CreateTaxDefinition = () => {
  const router = useRouter();
  const [taxType, setTaxType] = useState<string>();
  const [value, setValue] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);

  const addTax = async () => {
    if (taxType !== "" && value >= 0) {
      try {
        const res = await fetch("createTaxDefinition/api", {
          method: "POST",
          body: JSON.stringify({ taxType, value }),
          headers: {
            "Content-type": "application/json",
          },
        });

        setShowModal(true);
        setTimeout(() => {
          router.push("/salaryDefinition/taxDefinition");
        }, 5000);
      } catch (error) {
        console.error("Error adding a tax:", error);
      }
    } else {
      alert("Incorrect data! Fill in all fields!");
    }
  };

  return (
    <div>
      <Link
        href="/salaryDefinition/taxDefinition"
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
          <div style={{ marginLeft: "65px", marginBottom: "30px" }}>
            <CustomLabel
              label="Create Tax Definition"
              styles={labelStyles}
            ></CustomLabel>
          </div>
          <div className={styles.firstLine}>
            <div>
              <div>Tax type</div>
              <CustomInputText
                placeholder="Enter tax name"
                styles={inputStyles}
                value={taxType}
                onChange={setTaxType}
              ></CustomInputText>
            </div>
            <div>
              <div>% value</div>
              <CustomInputText
                placeholder="Enter % value"
                styles={inputStyles}
                value={value}
                onChange={setValue}
              ></CustomInputText>
            </div>
          </div>
          <div className={styles.secondLine}>
            <CustomButton
              styles={buttonStyles}
              label="Create"
              onClick={addTax}
            ></CustomButton>
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

export default CreateTaxDefinition;

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

const labelStyles = {
  color: "black",
  height: "30px",
  fontWeight: "800",
};
