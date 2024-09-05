import Image from "next/image";
import { ctoF, weatherCodeToIcon } from "../services/converters";
import styles from "./MainCard.module.css";

export const MainCard = ({
  city,
  description,
  iconName,
  weatherData,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}
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
    </div>
  );
};
