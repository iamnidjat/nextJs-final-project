"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import CustomButton from "@/app/components/CustomButton";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div style={{ color: "#272525", fontWeight: "800", fontSize: "18px" }}>
          Create a Budget
        </div>
        <CustomButton
          styles={buttonStyles}
          label="Create Budget"
          onClick={() => {
            router.push("/create_budget");
          }}
        />
      </div>
      <div className={inter.className}>{children}</div>
    </div>
  );
}

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
