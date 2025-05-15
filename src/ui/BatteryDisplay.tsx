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

        {/* Percentage and Charging Icon */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white drop-shadow-md">
          <div className="font-extrabold text-3xl sm:text-4xl md:text-8xl text-white relative">
            {level}
            <span className="text-2xl sm:text-3xl">%</span>

            {/* Charging Icon */}
            {isCharging && (
              <div className="absolute left-1/2 top-[100%] transform -translate-x-1/2">
                <IonIcon
                  icon={batteryChargingOutline}
                  className="text-6xl animate-pulse text-white"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Label */}
      <span className="text-white text-lg md:text-xl mt-2">{label}</span>
    </div>
  );
};
