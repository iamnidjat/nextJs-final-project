"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>Tax Types</div>
          <button onClick={toCreateTD}>Create Tax type</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Tax Type</th>
              <th>% value</th>
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
                    <button style={{ color: "blue" }} onClick={updateTaxes}>
                      Edit
                    </button>
                    <button
                      style={{ color: "red" }}
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
      <div style={{ fontSize: "10px", fontWeight: "400", color: "#383838" }}>
        Copyright © 2022 Relia Energy. All Rights Reserved
      </div>
    </div>
  );
};

export default TaxDefinitionTable;
