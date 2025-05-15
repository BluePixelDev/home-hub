import { IonIcon } from "@ionic/react";
import {
  flashOutline,
  homeOutline,
  sunnyOutline,
  batteryFull,
  snowOutline,
} from "ionicons/icons";
import { PowerListItem } from "./ui/PowerListItem";
import { usePower } from "./services";
import { BatteryDisplay } from "./ui/BatteryDisplay";
import { PowerValue } from "./ui/PowerValue";
import { useTemp } from "./services/TempProvider";
import { TemperatureDisplay } from "./ui/TemperatureDisplay";
import { DirectionalPowerValue } from "./ui/DirectionalPowerValue";

export const Layout = () => {
  const {
    solarProduction,
    battery: { currentCharge, totalCapacity },
    gridExport,
    householdUsage,
  } = usePower();

  const { temperature, trend, error } = useTemp();

  return (
    <div className="flex h-screen w-screen text-white bg-gray-900">
      {/* Left Panel */}
      <div className="flex flex-col w-[320px] min-w-[280px] bg-gray-800">
        {/* Top Temperature Area */}
        <div className="h-[120px] bg-gray-500 flex items-center justify-center font-bold text-2xl">
          {error ? (
            <span className="text-5xl">Error</span>
          ) : (
            <TemperatureDisplay value={temperature} trend={trend} />
          )}
        </div>

        {/* Battery Section */}
        <div className="flex flex-col justify-center items-center p-6 flex-grow">
          <BatteryDisplay
            value={totalCapacity}
            isCharging={currentCharge > 0}
            className="w-64 max-w-full h-full"
          />
          <PowerValue
            unit="w"
            value={Math.abs(currentCharge)}
            direction={Math.sign(-currentCharge)}
            className="text-[clamp(2rem,4vw,3rem)] max-w-full"
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-col flex-grow p-10 gap-8">
        {/* Solar Production */}
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div className="flex items-center gap-4">
            <IonIcon
              icon={sunnyOutline}
              className="text-[clamp(2rem,6vw,4rem)] text-yellow-400"
            />
            <span className="text-xl md:text-2xl">Solární Panely</span>
          </div>
          <PowerValue
            unit="w"
            value={solarProduction}
            direction={Math.sign(solarProduction)}
            className="text-[clamp(3rem,8vw,6rem)]"
          />
        </div>

        {/* Other Power Stats */}
        <div className="flex flex-col gap-6">
          {/* Household Usage */}
          <PowerListItem icon={homeOutline} label="Domácnost">
            <PowerValue
              unit="w"
              value={Math.abs(householdUsage)}
              direction={Math.sign(-householdUsage)}
            />
          </PowerListItem>

          {/* Heat Pump Consumption */}
          <PowerListItem icon={snowOutline} label="Tepelné Čerpadlo">
            <PowerValue unit="w" value={0} direction={0} />
          </PowerListItem>

          {/* Grid Export/Import */}
          <PowerListItem icon={flashOutline} label="ČEZ">
            <DirectionalPowerValue
              unit="w"
              value={Math.abs(gridExport)}
              direction={Math.sign(gridExport)}
            />
          </PowerListItem>

          {/* Battery Flow */}
          <PowerListItem icon={batteryFull} label="Baterie">
            <PowerValue
              unit="w"
              value={Math.abs(currentCharge)}
              direction={Math.sign(-currentCharge)}
            />
          </PowerListItem>
        </div>
      </div>
    </div>
  );
};
