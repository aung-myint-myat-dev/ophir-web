import React from 'react';
import * as FaIcons from 'react-icons/fa'; // react-icons ထဲမှ Font Awesome အားလုံး import လုပ်ခြင်း

// Font Awesome Dynamic Icon Component
export const DynamicFaIcon = ({ iconName, className = "w-6 h-6" }) => {
  const IconComponent = FaIcons[iconName]; // String အလိုက် Font Awesome Icon Component ကို ရှာခြင်း

  if (!IconComponent) {
    return <FaIcons.FaQuestionCircle className={className} />; // icon မရှိပါက fallback
  }

  return <IconComponent className={className} />;
};