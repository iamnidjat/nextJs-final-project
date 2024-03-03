import * as React from "react";
import { SVGProps } from "react";
const DashboardIconActive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={0}
        x2={16.8}
        y1={0}
        y2={16.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#14ADD6" />
        <stop offset={1} stopColor="#384295" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M8 2.5v3A2.503 2.503 0 0 1 5.5 8h-3A2.504 2.504 0 0 1 0 5.5v-3A2.503 2.503 0 0 1 2.5 0h3A2.504 2.504 0 0 1 8 2.5ZM14.3 0h-3a2.502 2.502 0 0 0-2.5 2.5v3A2.503 2.503 0 0 0 11.3 8h3a2.504 2.504 0 0 0 2.5-2.5v-3A2.507 2.507 0 0 0 14.3 0ZM5.5 8.8h-3A2.504 2.504 0 0 0 0 11.3v3a2.503 2.503 0 0 0 2.5 2.5h3A2.503 2.503 0 0 0 8 14.3v-3a2.505 2.505 0 0 0-2.5-2.5Zm8.8 0h-3a2.502 2.502 0 0 0-2.5 2.5v3a2.503 2.503 0 0 0 2.5 2.5h3a2.504 2.504 0 0 0 2.5-2.5v-3a2.504 2.504 0 0 0-2.5-2.5Z"
    />
  </svg>
);
export default DashboardIconActive;
