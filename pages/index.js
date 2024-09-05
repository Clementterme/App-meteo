"use client";

import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
import { Search } from "../components/Search";
import { MetricsBox } from "../components/MetricsBox";
import { UnitSwitch } from "../components/UnitSwitch";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";

import styles from "../styles/Home.module.css";

export const App = () => {
  // const [cityInput, setCityInput] = useState();
  const [cityLatitude, setCityLatitude] = useState();
  const [cityLongitude, setCityLongitude] = useState();
  const [triggerFetch, setTriggerFetch] = useState(true);
  const [triggerFetch2, setTriggerFetch2] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [cityData, setCityData] = useState();
  const [unitSystem, setUnitSystem] = useState("metric");

  useEffect(() => {
    getCityData();
  }, [triggerFetch]);

  const getCityData = async () => {
    const cityRes = await fetch("api/cityData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ cityInput }),
    });
    const cData = await cityRes.json();
    setCityData({ ...cData });

    const latitude = cData.results[0].latitude;

    const longitude = cData.results[0].longitude;

    setCityLatitude(latitude);
    setCityLongitude(longitude);
  };

  // };
  // getCityData();
  // }, [triggerFetch]);

  // getCityData();
  console.log(process.env.CITY);
  // console.log(cityLongitude);

  useEffect(() => {
    if (cityLatitude && cityLongitude) {
      const getData = async () => {
        const res = await fetch("api/data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            latitude: cityLatitude,
            longitude: cityLongitude,
          }),
        });
        // console.log(cityInput);

        const data = await res.json();
        setWeatherData({ ...data });
      };
      getData();
    }
  }, [cityLatitude, cityLongitude]);
  // setCityInput("");

  // getCityData();

  const changeSystem = () =>
    unitSystem == "metric"
      ? setUnitSystem("imperial")
      : setUnitSystem("metric");

  return weatherData && cityData && !weatherData.message ? (
    <div className={styles.wrapper}>
      <MainCard
        // city={weatherData.name}
        city={weatherData.latitude}
        // country={weatherData.sys.country}
        country={cityData.results[0].latitude}
        // description={weatherData.weather[0].description}
        description={weatherData.current.weather_code}
        // iconName={weatherData.weather[0].icon}
        iconName={weatherData.current.weather_code}
        unitSystem={unitSystem}
        weatherData={weatherData}
      />
      <ContentBox>
        <Header>
          <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
          {/* <Search
            placeHolder="Search a city..."
            value={cityInput}
            onFocus={(e) => {
              e.target.value = "";
              e.target.placeholder = "";
            }}
            onChange={(e) => setCityInput(e.target.value)}
            onKeyDown={(e) => {
              e.keyCode === 13 && setTriggerFetch(!triggerFetch);
              e.target.placeholder = "Search a city...";
            }}
          /> */}
        </Header>
        <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
        {/* <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} /> */}
      </ContentBox>
    </div>
  ) : weatherData && weatherData.message ? (
    <ErrorScreen errorMessage="Ville non trouvée, veuillez réessayer!">
      {/* <Search
        onFocus={(e) => (e.target.value = "")}
        onChange={(e) => setCityInput(e.target.value)}
        onKeyDown={(e) => e.keyCode === 13 && setTriggerFetch(!triggerFetch)}
      /> */}
    </ErrorScreen>
  ) : (
    <LoadingScreen loadingMessage="Chargement..." />
  );
};

export default App;
