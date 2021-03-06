import React from 'react';
import {
  Cloud,
  CloudRain,
  CloudDrizzle,
  Sun,
  CloudSnow,
  CloudLightning
} from 'react-feather';

export const months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
};

export const dayOfTheWeek = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday'
};

export const dayOfTheWeekAbbr = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
  7: 'Sun'
};

export const weatherIcons = {
  Haze: <Cloud />,
  Clouds: <Cloud />,
  Rain: <CloudRain />,
  Drizzle: <CloudDrizzle />,
  Clear: <Sun />,
  Snow: <CloudSnow />,
  Thunderstorm: <CloudLightning />,
  Mist: <CloudRain />
};
