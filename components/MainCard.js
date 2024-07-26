import Image from "next/image";
import { ctoF, weatherCodeToIcon } from "../services/converters";
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
      <p className={styles.description}>{weatherCodeToIcon(description)}</p>
      <Image
        width="200px"
        height="200px"
        src={`/icons/${iconName}.svg`}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
        {Math.round(weatherData.current.temperature_2m)
        }
        °C
      </h1>
      {/* <p>
        Ressenti :{" "}
        {Math.round(weatherData.hourly.apparent_temperature[0])}
        °C
      </p> */}
    </div>
  );
};
