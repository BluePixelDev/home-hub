import { IonIcon } from "@ionic/react";
import { batteryChargingOutline } from "ionicons/icons";

export const BatteryDisplay = ({
  value = 0,
  isCharging = false,
  className = "",
  label = "Baterie",
}: {
  value?: number;
  isCharging?: boolean;
  className?: string;
  label?: string;
}) => {
  const level = Math.max(0, Math.min(100, value));
  const fillColor = level < 20 ? "#dc2626" : level < 50 ? "#eab308" : "#22c55e";

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Battery */}
      <div className="relative aspect-[2/3] w-full flex-1 border-4 border-gray-700 rounded-md overflow-hidden bg-gray-900 p-1 mb-3">
        {/* Fill */}
        <div
          className="absolute bottom-1 left-1 right-1 transition-all duration-300 ease-in-out rounded-sm"
          style={{
            height: `calc(${level}% - 0.5rem)`,
            backgroundColor: fillColor,
          }}
        />

        {/* Percentage & Charging Wrapper */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white drop-shadow-md">
          <div className="font-extrabold text-[clamp(1.5rem,5vw,4rem)] leading-none">
            {level}
            <span className="text-[clamp(1rem,4vw,2rem)] ml-1">%</span>
          </div>

          {/* Charging Icon absolute at bottom */}
          {isCharging && (
            <IonIcon
              icon={batteryChargingOutline}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[clamp(1.2rem,5vw,4rem)] animate-pulse text-white"
            />
          )}
        </div>
      </div>

      {/* Label */}
      <span className="text-[clamp(0.875rem,2vw,1.25rem)] md:text-[clamp(1rem,2.5vw,1.5rem)] mt-2">
        {label}
      </span>
    </div>
  );
};
