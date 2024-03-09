import * as React from "react"
import { SVGProps } from "react"
const BlueBudgetIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="#248CD8"
      d="M25.55 12.984a37.315 37.315 0 0 1-5.697.448c-1.92 0-3.84-.16-5.696-.448-3.488 2.4-5.824 6.912-5.824 12.128 0 7.712 5.152 10.304 11.52 10.304 6.368 0 11.52-2.592 11.52-10.304 0-5.216-2.336-9.728-5.824-12.128Zm-4.577 16.48v1.184a.437.437 0 0 1-.448.448h-1.312a.437.437 0 0 1-.448-.448v-1.152a2.928 2.928 0 0 1-2.56-2.624c0-.128.032-.256.128-.352a.514.514 0 0 1 .352-.16h1.344c.224 0 .384.16.448.352.064.32.352.576.704.576h1.152c.608 0 1.12-.448 1.184-.992.032-.32-.064-.64-.288-.864a1.162 1.162 0 0 0-.832-.352h-.864c-1.792 0-3.328-1.312-3.488-3.008a3.346 3.346 0 0 1 2.72-3.616v-1.152c0-.256.192-.448.448-.448h1.312c.256 0 .448.192.448.448v1.152a2.898 2.898 0 0 1 2.56 2.624.481.481 0 0 1-.128.352.514.514 0 0 1-.352.16H21.71c-.224 0-.415-.16-.447-.352a.722.722 0 0 0-.704-.576h-1.152c-.608 0-1.12.448-1.184.992-.032.32.064.64.287.864.225.224.513.384.832.384h.992c.928 0 1.856.416 2.496 1.088.64.704.96 1.632.864 2.592-.128 1.376-1.248 2.56-2.72 2.88ZM14.989 10.776c1.504.224 3.136.352 4.864.352 1.728 0 3.36-.128 4.864-.352l1.216-4.288c.256-.896-.576-1.696-1.472-1.44-3.008.96-6.208.96-9.216.032-.896-.288-1.728.544-1.472 1.44l1.216 4.256Z"
    />
  </svg>
)
export default BlueBudgetIcon
