import React from "react";

interface SkillBarProps {
  name: string;
  level: number;
  backgroundcolor: string;
}

const EarningsSkillBar: React.FC<SkillBarProps> = ({ name, level, backgroundcolor }) => {
  const skillBarStyles = {
    width: `${level}%`,
  };

  return (
    <div className="skill-bar">
      <div className="skill-bar-name">{name}</div>
      <div className="skill-bar-progress">
        <div className={backgroundcolor} style={skillBarStyles}></div>
      </div>
    </div>
  );
};

export default EarningsSkillBar;
