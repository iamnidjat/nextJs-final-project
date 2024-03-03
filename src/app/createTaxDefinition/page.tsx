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
  const [value, setValue] = useState<number>();
  const [showModal, setShowModal] = useState(false);

  const addTax = async () => {
    try {
      const res = await fetch("createTaxDefinition/api", {
        method: "POST",
        body: JSON.stringify({ taxType, value }),
        headers: {
          "Content-type": "application/json",
        },
      });

      setShowModal(true);
      router.push("/salaryDefinition/taxDefinition");
    } catch (error) {
      console.error("Error adding a tax:", error);
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
              height={30}
              color="black"
              weight={800}
            ></CustomLabel>
          </div>
          <div className={styles.firstLine}>
            <div>
              <div>Tax type</div>
              <CustomInputText
                placeholder="Enter tax name"
                paddingLeft={5}
                paddingTop={10}
                paddingRight={100}
                paddingBottom={10}
                borderColor="#D0D0D0"
                borderRadius={8}
                value={taxType}
                onChange={setTaxType}
              ></CustomInputText>
            </div>
            <div>
              <div>% value</div>
              <CustomInputText
                placeholder="Enter % value"
                paddingLeft={5}
                paddingTop={10}
                paddingRight={100}
                paddingBottom={10}
                borderColor="#D0D0D0"
                borderRadius={8}
                value={value}
                onChange={setValue}
              ></CustomInputText>
            </div>
          </div>
          <div className={styles.secondLine}>
            <CustomButton
              backgroundColor="linear-gradient(135deg, #14ADD6 0%, #384295 100%)"
              label="Create"
              labelColor="#fff"
              paddingHorizontal={150}
              paddingVertical={10}
              borderRadius={15}
              borderColor="#14ADD6"
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
