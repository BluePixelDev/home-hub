export interface PowerValueProps {
  unit: string;
  value: string | number;
  direction?: -1 | 0 | 1 | number;
  className?: string;
}

export const PowerValue = ({
  unit,
  value,
  direction,
  className = "",
}: PowerValueProps) => {
  const signColor =
    direction === undefined || direction === 0
      ? "text-gray-600"
      : direction > 0
        ? "text-green-500"
        : "text-red-500";

  return (
    <div
      className={`flex items-center gap-2 font-bold text-[clamp(2rem,5vw,4rem)] ${className}`}
    >
      <span className={signColor}>{value}</span>
      <span className={`ml-1 ${signColor}`}>{unit}</span>
    </div>
  );
};
