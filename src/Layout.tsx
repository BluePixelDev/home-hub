import { IonIcon } from "@ionic/react";
import {
  flashOutline,
  homeOutline,
  sunnyOutline,
  batteryFull,
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
      <aside className="flex flex-col flex-none flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/5 min-w-0 bg-gray-800 overflow-y-auto shadow-2xs">
        {/* Top Temperature Area */}
        <div className="flex items-center justify-center bg-gray-500 font-bold text-[clamp(1.25rem,3vw,2rem)] sm:text-[clamp(1.5rem,3.5vw,2.5rem)] md:text-[clamp(2rem,4vw,3rem)] h-[clamp(4rem,10vh,8rem)]">
          {error ? (
            <span className="text-[clamp(1.5rem,4vw,3rem)]">Error</span>
          ) : (
            <TemperatureDisplay value={temperature} trend={trend} />
          )}
        </div>

        {/* Battery Section */}
        <div className="flex flex-col flex-grow items-center justify-center p-6 sm:p-6">
          <BatteryDisplay
            value={totalCapacity}
            isCharging={currentCharge > 0}
            className="w-full"
          />
        </div>
      </aside>

      {/* Right Panel */}
      <main className="flex flex-col flex-grow overflow-y-auto p-4 sm:p-8 md:p-10 gap-4 sm:gap-6 md:gap-8">
        {/* Solar Production */}
        <section className="flex justify-between items-center border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <IonIcon
              icon={sunnyOutline}
              className="text-[clamp(2rem,5vw,3rem)] text-yellow-400"
            />
            <span className="text-[clamp(1rem,2.5vw,1.5rem)] sm:text-[clamp(1.25rem,2.8vw,1.75rem)] md:text-[clamp(1.5rem,3vw,2rem)]">
              Solární Panely
            </span>
          </div>
          <PowerValue
            unit="w"
            value={solarProduction}
            direction={Math.sign(solarProduction)}
          />
        </section>

        {/* Other Power Stats */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Household Usage */}
          <PowerListItem icon={homeOutline} label="Domácnost">
            <PowerValue
              unit="w"
              value={Math.abs(householdUsage)}
              direction={Math.sign(-householdUsage)}
            />
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
      </main>
    </div>
  );
};
