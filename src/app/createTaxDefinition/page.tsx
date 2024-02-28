"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import CustomButton from "../components/CustomButton";
import CustomInputText from "../components/CustomInputText";
import CustomOption from "../components/CustomOption";
import CustomLabel from "../components/CustomLabel";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CreateTaxDefinition = () => {
  const router = useRouter();
  const [taxType, setTaxType] = useState<string | undefined>();
  const [value, setValue] = useState<number | undefined>();

  const addTax = async () => {
    try {
      const res = await fetch("createTaxDefinition/api", {
        method: "POST",
        body: JSON.stringify({ taxType, value }),
        headers: {
          "Content-type": "application/json",
        },
      });
      router.push('/taxDefinition')
    } catch (error) {
      console.error("Error adding a tax:", error);
    }
  };

  return (
    <div>
      <Link href="/salaryDefinition/taxDefinition">Back</Link>
      <div className={styles.subMainContainer}>
        <div>
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
      <div style={{fontSize: "10px", fontWeight: "400", color: "#383838"}}>Copyright © 2022 Relia Energy. All Rights Reserved</div>
    </div>
  );
};

export default CreateTaxDefinition;
