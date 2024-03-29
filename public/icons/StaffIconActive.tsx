import * as React from "react";
import { SVGProps } from "react";
const StaffIconActive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={14}
    fill="none"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={0}
        x2={18.901}
        y1={0}
        y2={13.059}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#14ADD6" />
        <stop offset={1} stopColor="#384295" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M18.9 11.379v1.68H0v-1.778a1.26 1.26 0 0 1 .455-.971A20.427 20.427 0 0 1 3.73 8.15c.076.175.801 1.844 1.264 2.548.006.014.02.023.034.023a.04.04 0 0 0 .035-.023c.094-.282.457-1.26 1.008-1.194a.036.036 0 0 0 .043-.019.036.036 0 0 0-.012-.046c-.416-.332-1.473-1.186-1.874-1.663v-1.15a2.884 2.884 0 0 1-.359-.984c-.139-.012-.32-.205-.515-.893-.251-.888-.015-1.064.213-1.063-.12-.518-.428-2.319.912-3.136a.724.724 0 0 1-.255-.548S5.76.176 6.49.024c.732-.151 1.536.43 1.661.988 0 0 1.5 0 .918 2.677.235-.008.49.153.23 1.063-.192.69-.383.883-.514.893-.058.347-.18.68-.36.984v1.14c-.403.477-1.456 1.334-1.875 1.664a.037.037 0 0 0-.013.046.038.038 0 0 0 .044.02c.55-.068.914.91 1.008 1.193.006.013.02.022.034.022a.04.04 0 0 0 .035-.022c.463-.705 1.189-2.373 1.263-2.547.78.415 1.533.877 2.256 1.385a5.31 5.31 0 0 0 .71-.294l.043-.024a.422.422 0 0 0 .192-.354v-.715c-1.896.016-2.454-.795-2.454-.795s1.083-.018 1.016-2.88c-.068-2.864 1.24-3.326 1.732-3.505 1.43-.543 2.148.321 2.148.321 1.659-.154 2.112 1.658 1.92 3.72-.192 2.063.93 2.386.93 2.386-.778.795-2.42.745-2.42.745v.739c0 .143.072.275.193.354l.05.03c.575.302 1.758.614 1.78.626.388.105.764.247 1.125.424.421.2.709.607.757 1.07Z"
    />
  </svg>
);
export default StaffIconActive;
