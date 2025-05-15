import { usePower } from "./services";

export const PowerStats = () => {
  const {
    solarProduction,
    battery: { currentCharge, totalCapacity },
  } = usePower();
  return (
    <>
      <h1>{solarProduction}</h1>
      <h1>
        {currentCharge} / {totalCapacity} %
      </h1>
    </>
  );
};
