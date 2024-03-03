"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import CustomButton from "@/app/components/CustomButton";

const TaxDefinitionTable = () => {
  const [data, setData] = useState<any>(null);
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

  const updateTaxes = () => {
    alert("Заглушка");
  };

  const toCreateTD = () => {
    router.push("/createTaxDefinition");
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
            backgroundColor="linear-gradient(135deg, #14ADD6 0%, #384295 100%)"
            label="Create Tax Definition"
            labelColor="#fff"
            paddingHorizontal={50}
            paddingVertical={10}
            borderRadius={15}
            borderColor="#14ADD6"
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
                <td>{tax.serialNumber}</td>
                <td>{tax.taxType}</td>
                <td>{tax.value}</td>
                <td>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <button
                      style={{
                        color: "blue",
                        backgroundColor: "#F8F9FD",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={updateTaxes}
                    >
                      Edit
                    </button>
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
