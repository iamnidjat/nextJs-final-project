import * as React from "react"
import { SVGProps } from "react"
const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#ED3237"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 17V7m0 10-4-4m4 4 4-4"
    />
  </svg>
)
export default ArrowDownIcon
