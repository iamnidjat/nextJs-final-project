import React from "react";
import SuccessIcon from "../icons/successIcon";
import CustomButton from "../components/CustomButton";
import styles from "./successModal.module.css";

const SuccessModal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div onClick={onClose} className={styles.content}>
        <SuccessIcon></SuccessIcon>
        <div>Congratulations</div>
        <div>Your salary definition has been created succesfully</div>
        <CustomButton
          backgroundColor="linear-gradient(135deg, #14ADD6 0%, #384295 100%)"
          label="Ok"
          labelColor="#fff"
          paddingHorizontal={150}
          paddingVertical={10}
          borderRadius={15}
          borderColor="#14ADD6"
          onClick={() => {}}
        ></CustomButton>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;
