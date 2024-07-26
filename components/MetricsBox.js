import { degToCompass } from "../services/converters";
import {
  getTime,
  getAMPM,
  getVisibility,
  getWindSpeed,
} from "../services/helpers";
import { MetricsCard } from "./MetricsCard";
import styles from "./MetricsBox.module.css";

export const MetricsBox = ({ weatherData, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <MetricsCard
        title={"Ressenti"}
        iconSrc={"/icons/thermometer.png"}
        metric={weatherData.current.apparent_temperature}
        unit={"°C"}
      />
      <MetricsCard
        title={"Vent"}
        iconSrc={"/icons/wind.png"}
        metric={weatherData.current.wind_speed_10m}
        unit={"km/h"}
      />
      <MetricsCard
        title={"Précipitations"}
        iconSrc={"/icons/precipitation.png"}
        metric={weatherData.current.precipitation}
        unit={"%"}
      />
      <MetricsCard
        title={"Humidité"}
        iconSrc={"/icons/humidity.png"}
        metric={weatherData.current.relative_humidity_2m}
        unit={"%"}
      />
      {/* <MetricsCard
        title={"Sunrise"}
        iconSrc={"/icons/sunrise.png"}
        metric={getTime(
          unitSystem,
          weatherData.timezone_abbreviation,
          weatherData.timezone
        )}
        unit={getAMPM(
          unitSystem,
          weatherData.timezone_abbreviation,
          weatherData.timezone
        )}
      /> */}
      {/* <MetricsCard
        title={"Sunset"}
        iconSrc={"/icons/sunset.png"}
        metric={getTime(
          unitSystem,
          weatherData.timezone_abbreviation,
          weatherData.timezone
        )}
        unit={getAMPM(unitSystem, weatherData.timezone_abbreviation, weatherData.timezone)}
      /> */}
    </div>
  );
};
