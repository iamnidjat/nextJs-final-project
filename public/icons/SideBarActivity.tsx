import * as React from "react";
import { SVGProps } from "react";
const SideBarActivity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={50}
    fill="none"
    {...props}
  >
    <path
      fill="#5584CE"
      fillRule="evenodd"
      d="M0 0h1a5 5 0 0 1 5 5v40a5 5 0 0 1-5 5H0V0Z"
    />
  </svg>
);
export default SideBarActivity;
