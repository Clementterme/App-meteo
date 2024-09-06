"use client";

export default async function handler(req, res) {

  const cityName = process.env.CITY;
  
  const getCityData = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=fr&format=json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const cData = await getCityData.json();
  res.status(200).json(cData);
}
