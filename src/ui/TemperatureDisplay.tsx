import { IonIcon } from "@ionic/react";
import { arrowUp, arrowDown } from "ionicons/icons";

interface TemperatureDisplayProps {
  value: number | string;
  trend: number;
}

export const TemperatureDisplay = ({
  value,
  trend,
}: TemperatureDisplayProps) => {
  const isRising = trend > 0;
  const isFalling = trend < 0;

  return (
    <div className="flex items-center justify-center h-full space-x-3 relative">
      {/* Temperature Value with Degree Symbol */}
      <div className="text-6xl font-bold text-white">
        {value}
        <span className="text-4xl align-top">°C</span>

        {/* Trend Arrow */}
        <div className="absolute left-[110%] top-1/2 -translate-y-1/3">
          {isRising && (
            <IonIcon
              icon={arrowUp}
              className="text-green-500 text-7xl font-extrabold animate-bounce"
            />
          )}
          {isFalling && (
            <IonIcon
              icon={arrowDown}
              className="text-red-500 text-6xl animate-bounce"
            />
          )}
        </div>
      </div>
    </div>
  );
};
