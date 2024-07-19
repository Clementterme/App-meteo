import Image from "next/image";
import { ctoF, convertWeatherCodeToIcon } from "../services/converters";
import styles from "./MainCard.module.css";

export const MainCard = ({
  city,
  country,
  description,
  iconName,
  unitSystem,
  weatherData,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}, {country}
      </h1>
      <p className={styles.description}>{convertWeatherCodeToIcon(description)}</p>
      <Image
        width="300px"
        height="300px"
        src={`/icons/${iconName}.svg`}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
        {unitSystem == "metric"
          ? Math.round(weatherData.hourly.temperature_2m[0])
          : Math.round(ctoF(weatherData.hourly.temperature_2m[0]))}
        °{unitSystem == "metric" ? "C" : "F"}
      </h1>
      <p>
        Ressenti :{" "}
        {unitSystem == "metric"
          ? Math.round(weatherData.hourly.apparent_temperature[0])
          : Math.round(ctoF(weatherData.hourly.apparent_temperature[0]))}
        °{unitSystem == "metric" ? "C" : "F"}
      </p>
    </div>
  );
};
