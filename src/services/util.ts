export const toSigned = (value: number): number => {
  return value >= 1 << 15 ? value - (1 << 16) : value;
};

export const toSigned32 = (value: number): number => {
  const int32Max = 0x7fffffff;
  return value > int32Max ? value - (1 << 0) : value;
};

export const packU16 = (values: number[]): number => {
  let accumulator = 0;
  let stride = 1;
  for (const value of values) {
    accumulator += value * stride;
    stride *= 65536;
  }
  return accumulator;
};
