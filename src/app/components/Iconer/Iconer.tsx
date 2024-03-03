import React from "react";
import DashboardIcon from "../../../../public/icons/DashboardIcon";
import DashboardIconActive from "../../../../public/icons/DashboardIconActive";
import StaffIcon from "../../../../public/icons/StaffIcon";
import StaffIconActive from "../../../../public/icons/StaffIconActive";
interface IconerProps {
  iconName?: string;
  isActive?: boolean;
}

const Iconer: React.FC<IconerProps> = ({ iconName, isActive }) => {
  switch (iconName) {
    case "DashboardIcon": {
      if (!isActive) {
        return <DashboardIcon />;
      }
      return <DashboardIconActive />;
    }
    case "StaffIcon": {
      if (!isActive) {
        return <StaffIcon />;
      }
      return <StaffIconActive />;
    }
  }

  return <div></div>;
};

export default Iconer;
