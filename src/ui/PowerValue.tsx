export interface PowerValueProps {
  unit: string;
  value: string | number;
  direction?: -1 | 0 | 1 | number;
  className?: string;
}

const sizeClamps = {
  base: "text-[clamp(1.5rem,4vw,2.5rem)]",
  sm: "sm:text-[clamp(2rem,5vw,3.5rem)]",
  md: "md:text-[clamp(2.5rem,6vw,4.5rem)]",
  lg: "lg:text-[clamp(3rem,7vw,5.5rem)]",
  xl: "xl:text-[clamp(3.5rem,8vw,6.5rem)]",
};

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
      className={`flex items-center gap-2 font-bold \
        ${sizeClamps.base}
        ${sizeClamps.sm}
        ${sizeClamps.md}
        ${sizeClamps.lg}
        ${sizeClamps.xl} 
        ${className}`}
    >
      <span className={signColor}>{value}</span>
      <span className={`ml-1 ${signColor}`}>{unit}</span>
    </div>
  );
};
