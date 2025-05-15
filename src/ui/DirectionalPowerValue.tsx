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

export const DirectionalPowerValue = ({
  unit,
  value,
  direction = 0,
  className = "",
  label,
}: DirectionalPowerValueProps) => {
  let icon = removeOutline;
  let iconColor = "text-white";
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
    <div className={`flex items-center gap-2 ${className}`}>
      <IonIcon
        icon={icon}
        className={`text-6xl ${animationClass} ${iconColor}`}
      />
      <div className="flex flex-col">
        {label && <span className="text-sm text-gray-400">{label}</span>}
        <span className={`font-bold text-[clamp(2rem,5vw,4rem)] ${iconColor}`}>
          {value} {unit}
        </span>
      </div>
    </div>
  );
};
