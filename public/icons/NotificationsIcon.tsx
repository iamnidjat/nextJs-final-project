import * as React from "react";
import { SVGProps } from "react";
const NotificationsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#121212"
      d="M7.72 18.165a1.827 1.827 0 0 0 1.817-1.817H5.902a1.825 1.825 0 0 0 1.818 1.817Zm6.547-4.809a2.184 2.184 0 0 1-.644-1.543V7.718a5.898 5.898 0 0 0-4.02-5.59.751.751 0 0 1-.52-.712A1.399 1.399 0 0 0 7.76.001a1.361 1.361 0 0 0-1.403 1.36v.056a.752.752 0 0 1-.52.712 5.897 5.897 0 0 0-4.02 5.59v4.087a2.187 2.187 0 0 1-.643 1.544l-.532.53A2.207 2.207 0 0 0 0 15.426h15.44a2.205 2.205 0 0 0-.642-1.544l-.531-.525Z"
    />
  </svg>
);
export default NotificationsIcon;
