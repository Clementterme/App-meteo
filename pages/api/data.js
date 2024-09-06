"use client";

export default async function handler(req, res) {
  
  const { latitude, longitude } = req.body;

  const getWeatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&forecast_days=1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}
