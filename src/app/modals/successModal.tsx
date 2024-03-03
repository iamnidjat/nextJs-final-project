import React from "react";
import SuccessIcon from "../icons/successIcon";
import CustomButton from "../components/CustomButton";
import styles from "./successModal.module.css";

const SuccessModal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div onClick={onClose} className={styles.content}>
        <SuccessIcon style={{marginBottom: "20px"}}></SuccessIcon>
        <div style={{marginBottom: "10px", fontWeight: "800"}}>Congratulations</div>
        <div style={{marginBottom: "10px"}}>Your salary definition has been</div>
        <div style={{marginBottom: "20px"}}>created succesfully</div>
        <CustomButton
          backgroundColor="linear-gradient(135deg, #14ADD6 0%, #384295 100%)"
          label="Ok"
          labelColor="#fff"
          paddingHorizontal={40}
          paddingVertical={20}
          borderRadius={15}
          borderColor="#14ADD6"
          onClick={onClose}
        ></CustomButton>
      </div>
    </div>
  );
};

export default SuccessModal;
