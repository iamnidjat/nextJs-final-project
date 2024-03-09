"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import CustomButton from "@/app/components/CustomButton";

const TaxDefinitionTable = () => {
  const [data, setData] = useState<any>(null);

  const [sNumber, setSNumber] = useState<any>(null);
  const [originalSNumber, setOriginalSNumber] = useState<any>(null);

  const [taxType, setTaxType] = useState<any>(null);
  const [originalTaxType, setOriginalTaxType] = useState<any>(null);

  const [value, setValue] = useState<any>(null);
  const [originalValue, setOriginalValue] = useState<any>(null);

  const [editingTaxId, setEditingTaxId] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchTaxes();
  }, []);

  const fetchTaxes = async () => {
    try {
      const res = await fetch("http://localhost:3000/taxDefinition/api");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching taxes:", error);
    }
  };

  const deleteTaxes = async (id: number) => {
    try {
      await fetch("http://localhost:3000/taxDefinition/api", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-type": "application/json",
        },
      });
      await fetchTaxes();
    } catch (error) {
      console.error("Error deleting a tax: ", error);
    }
  };

  const updateTaxes = async (id: number) => {
    try {
      const res = await fetch("http://localhost:3000/taxDefinition/api", {
        method: "PATCH",
        body: JSON.stringify({
          sNumber: sNumber === null ? originalSNumber : sNumber,
          taxType: taxType === null ? originalTaxType : taxType,
          value: value === null ? originalValue : value,
          id,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      setEditingTaxId(null);
      await fetchTaxes();
    } catch (error) {
      console.error("Error updating a tax:", error);
    }
  };

  const toCreateTD = () => {
    router.push("/createTaxDefinition");
  };

  const enterEditMode = (tax: any) => {
    setOriginalSNumber(tax.serialNumber);
    setOriginalTaxType(tax.taxType);
    setOriginalValue(tax.value);

    setSNumber(tax.serialNumber);
    setTaxType(tax.taxType);
    setValue(tax.value);

    setEditingTaxId(tax.id);
  };

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ color: "#272525", fontWeight: "800", fontSize: "18px" }}
          >
            Tax Types
          </div>
          <CustomButton
            styles={buttonStyles}
            label="Create Tax Definition"
            onClick={toCreateTD}
          />
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thStyle}>S/N</th>
              <th className={styles.thStyle}>Tax Type</th>
              <th className={styles.thStyle}>% value</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((tax: any) => (
              <tr key={tax.id}>
                {!editingTaxId || editingTaxId !== tax.id ? (
                  <>
                    <td>{tax.serialNumber}</td>
                    <td>{tax.taxType}</td>
                    <td>{tax.value}</td>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      value={sNumber}
                      onChange={(e) => setSNumber(e.target.value)}
                    />
                    <input
                      type="text"
                      value={taxType}
                      onChange={(e) => setTaxType(e.target.value)}
                    />
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </>
                )}
                <td>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div>
                      {!editingTaxId || editingTaxId !== tax.id ? (
                        <button
                          style={{
                            color: "blue",
                            backgroundColor: "#F8F9FD",
                            border: "none",
                            cursor: "pointer",
                          }}
                          onClick={() => enterEditMode(tax)}
                        >
                          Edit
                        </button>
                      ) : (
                        <button
                          style={{
                            color: "blue",
                            backgroundColor: "#F8F9FD",
                            border: "none",
                            cursor: "pointer",
                          }}
                          onClick={() => updateTaxes(tax.id)}
                        >
                          Update
                        </button>
                      )}
                    </div>
                    <button
                      style={{
                        color: "red",
                        backgroundColor: "#F8F9FD",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => deleteTaxes(tax.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default TaxDefinitionTable;

const buttonStyles = {
  background: "linear-gradient(135deg, #14ADD6 0%, #384295 100%)",
  padding: "10px 50px",
  borderRadius: "15px",
  borderColor: "#14ADD6",
  color: "#fff",
  cursor: "pointer",
  outline: "none",
  border: "none",
};
