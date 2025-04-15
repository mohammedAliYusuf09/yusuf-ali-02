import React from "react";
import { ReactElement } from 'react';

type SoftSkillProps = {
  icon: ReactElement;
  title: string;
};

function SoftSkill({ icon, title }: SoftSkillProps) {
  return (
    <div className="py-2 px-3 rounded-sm border-spacing-2 flex items-center gap-1 w-max text-gray-800">
      <span>
        {icon}
      </span>
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}

export default SoftSkill;
