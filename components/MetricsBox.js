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
        metric={weatherData.hourly.apparent_temperature[1]}
        unit={"°C"}
      />
      <MetricsCard
        title={"Vent"}
        iconSrc={"/icons/wind.png"}
        metric={getWindSpeed(unitSystem, weatherData.hourly.wind_speed_10m[0])}
        unit={"km/h"}
      />
      <MetricsCard
        title={"Précipitations"}
        iconSrc={"/icons/precipitation.png"}
        metric={weatherData.hourly.precipitation_probability[0]}
        unit={"%"}
      />
      <MetricsCard
        title={"Humidité"}
        iconSrc={"/icons/humidity.png"}
        metric={weatherData.hourly.relative_humidity_2m[0]}
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
