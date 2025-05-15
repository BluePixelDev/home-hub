import { IonIcon } from "@ionic/react";
import {
  arrowUpOutline,
  arrowDownOutline,
  removeOutline,
} from "ionicons/icons";

export interface DirectionalPowerValueProps {
  unit: string;
  value: string | number;
  direction?: -1 | 0 | 1 | number;
  className?: string;
  label?: string;
}

const sizeClamps = {
  base: "text-[clamp(1.5rem,4vw,2.5rem)]",
  sm: "sm:text-[clamp(2rem,5vw,3.5rem)]",
  md: "md:text-[clamp(2.5rem,6vw,4.5rem)]",
  lg: "lg:text-[clamp(3rem,7vw,5.5rem)]",
  xl: "xl:text-[clamp(3.5rem,8vw,6.5rem)]",
};

export interface DirectionalPowerValueProps {
  unit: string;
  value: string | number;
  direction?: -1 | 0 | 1 | number;
  className?: string;
  label?: string;
}

export const DirectionalPowerValue = ({
  unit,
  value,
  direction = 0,
  className = "",
  label,
}: DirectionalPowerValueProps) => {
  let icon = removeOutline;
  let iconColor = "text-gray-600";
  let animationClass = "";

  if (direction > 0) {
    icon = arrowUpOutline;
    iconColor = "text-green-500";
    animationClass = "animate-pulse";
  } else if (direction < 0) {
    icon = arrowDownOutline;
    iconColor = "text-red-500";
    animationClass = "animate-bounce";
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <IonIcon
        icon={icon}
        className={`
          ${animationClass} ${iconColor}  
          ${sizeClamps.base}
          ${sizeClamps.sm}
          ${sizeClamps.md}
          ${sizeClamps.lg}
          ${sizeClamps.xl}
        `}
      />
      <div className="flex flex-col">
        {label && (
          <span className={`${sizeClamps.base} ${sizeClamps.sm} text-gray-400`}>
            {label}
          </span>
        )}
        <span
          className={`font-bold ${iconColor}  
            ${sizeClamps.base}
            ${sizeClamps.sm}
            ${sizeClamps.md}
            ${sizeClamps.lg}
            ${sizeClamps.xl}`}
        >
          {value} {unit}
        </span>
      </div>
    </div>
  );
};
