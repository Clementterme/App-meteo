export const ctoF = (c) => (c * 9) / 5 + 32;

export const mpsToMph = (mps) => (mps * 2.236936).toFixed(2);

export const kmToMiles = (km) => (km / 1.609).toFixed(1);

export const timeTo12HourFormat = (time) => {
  let [hours, minutes] = time.split(":");
  return `${(hours %= 12) ? hours : 12}:${minutes}`;
};

export const degToCompass = (num) => {
  var val = Math.round(num / 22.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
};

export const unixToLocalTime = (unixSeconds, timezone) => {
  let time = new Date((unixSeconds + timezone) * 1000)
    .toISOString()
    .match(/(\d{2}:\d{2})/)[0];

  return time.startsWith("0") ? time.substring(1) : time;
};

export function weatherCodeToIcon(weatherCode) {
  switch (weatherCode) {
    case 0:
      return "Ciel clair";
    case 1:
      return "Principalement clair";
    case 2:
      return "Partiellement nuageux";
    case 3:
      return "Couvert";
    case 45:
      return "Brouillard";
    case 48:
      return "Brouillard givrant";
    case 51:
      return "Bruine légère";
    case 53:
      return "Bruine modérée";
    case 55:
      return "Bruine dense";
    case 56:
      return "Bruine verglaçante légère";
    case 57:
      return "Bruine verglaçante dense";
    case 61:
      return "Pluie légère";
    case 63:
      return "Pluie modérée";
    case 65:
      return "Pluie forte";
    case 66:
      return "Pluie verglaçante légère";
    case 67:
      return "Pluie verglaçante forte";
    case 71:
      return "Chutes de neige légères";
    case 73:
      return "Chutes de neige modérées";
    case 75:
      return "Chutes de neige fortes";
    case 77:
      return "Grains de neige";
    case 80:
      return "Averses de pluie légères";
    case 81:
      return "Averses de pluie modérées";
    case 82:
      return "Averses de pluie violentes";
    case 85:
      return "Averses de neige légères";
    case 86:
      return "Averses de neige fortes";
    case 95:
      return "Orage";
    case 96:
      return "Orage avec légère grêle";
    case 99:
      return "Orage avec forte grêle";
    default:
      return "";
  }
}