import { getWeekDay, getTime, getAMPM, displayDate, startTime} from "../services/helpers";
import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <h2>
        {/* {`${getWeekDay(weatherData)}, ${getTime(
          unitSystem,
          weatherData.dt,
          weatherData.timezone
        )} ${getAMPM(unitSystem, weatherData.dt, weatherData.timezone)}`} */}
        {displayDate()}
      </h2>
        
      <h2>{startTime()}</h2>
    </div>
  );
};
