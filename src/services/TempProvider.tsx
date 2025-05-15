import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface TempContextType {
  temperature: number;
  trend: number;
  error: boolean;
}

const TempContext = createContext<TempContextType | undefined>(undefined);

export const TempProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [temperature, setTemperature] = useState<number>(0);
  const [trend, setTrend] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const apiUrl = import.meta.env.VITE_WBOX_API_URL || "";

  const fetchSensorData = async () => {
    try {
      const response = await fetch(`${apiUrl}/state/extended`);
      if (response.ok) {
        const jsonResponse = await response.json();
        const multiSensor = jsonResponse.multiSensor;
        const sensors = multiSensor.sensors;

        if (Array.isArray(sensors) && sensors.length > 0) {
          const sensorData = sensors[0];
          const temp = sensorData.value;
          const trendValue = sensorData.trend;

          if (temp !== null) {
            setTemperature(convertTemperatureValue(temp));
            setTrend(convertTrendValue(trendValue));
            setError(false);
          }
        } else {
          setError(true);
        }
      } else {
        setError(true);
      }
    } catch (e) {
      console.error("Error fetching sensor data:", e);
      setError(true);
    }
  };

  const checkSensorStatus = async (): Promise<boolean> => {
    try {
      const response = await fetch(`${apiUrl}/api/device/state`);
      return response.ok;
    } catch (e) {
      console.error("Error checking sensor status:", e);
      return false;
    }
  };

  const updateSensorData = async () => {
    if (await checkSensorStatus()) {
      await fetchSensorData();
    } else {
      setError(true);
    }
  };

  const convertTemperatureValue = (temperature: number): number => {
    return Math.floor(temperature / 10);
  };

  const convertTrendValue = (trend: number): number => {
    switch (trend) {
      case 0:
      case 1:
        return 0;
      case 2:
        return -1;
      case 3:
        return 1;
      default:
        return 0;
    }
  };

  useEffect(() => {
    updateSensorData();
    const interval = setInterval(() => {
      updateSensorData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TempContext.Provider value={{ temperature, trend, error }}>
      {children}
    </TempContext.Provider>
  );
};

export const useTemp = (): TempContextType => {
  const context = useContext(TempContext);
  if (!context) {
    throw new Error("useTemp must be used within a TempProvider");
  }
  return context;
};
