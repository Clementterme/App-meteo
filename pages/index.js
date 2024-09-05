"use client";

import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
import { MetricsBox } from "../components/MetricsBox";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";

import styles from "../styles/Home.module.css";

export const App = () => {
  const [cityLatitude, setCityLatitude] = useState();
  const [cityLongitude, setCityLongitude] = useState();
  const [weatherData, setWeatherData] = useState();
  const [cityData, setCityData] = useState();
  const [unitSystem, setUnitSystem] = useState("metric");


  // Raffraichissement des données toutes les heures
  useEffect(() => {
    const interval = setInterval(getCityData(), 3600000);
  }, []);

  // Premier fetch pour récupérer les coordonnées de la ville entrée dans le fichier .env.local
  const getCityData = async () => {
    const cityRes = await fetch("api/cityData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const cData = await cityRes.json();

    setCityData({ ...cData });

    setCityLatitude(cData.results[0].latitude);

    setCityLongitude(cData.results[0].longitude);
  };  

  // Récupère les données météos de la ville demandée
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

        const data = await res.json();

        setWeatherData({ ...data });
      };
      getData();
    }
  }, [cityLatitude, cityLongitude]);

  const changeSystem = () =>
    unitSystem == "metric"
      ? setUnitSystem("imperial")
      : setUnitSystem("metric");

  return weatherData && cityData && !weatherData.message ? (
    <div className={styles.wrapper}>
      <MainCard
        city={cityData.results[0].name}
        country={cityData.results[0].country}
        description={weatherData.current.weather_code}
        iconName={weatherData.current.weather_code}
        unitSystem={unitSystem}
        weatherData={weatherData}
      />
      <ContentBox>
        <Header>
          <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
        </Header>
        <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
      </ContentBox>
    </div>
  ) : weatherData && weatherData.message ? (
    <ErrorScreen errorMessage="Ville non trouvée, veuillez réessayer!">
    </ErrorScreen>
  ) : (
    <LoadingScreen loadingMessage="Chargement..." />
  );
};

export default App;
