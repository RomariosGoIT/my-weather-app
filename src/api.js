export const getWeatherForLocation = city => {
  const key = '356beb6caaf66b18e18df0d280f1b2d9';
  const [lat, long] = city['latt_long'].split(',');
  return fetch(
    `https://api.darksky.net/forecast/${key}/${lat},${long}?units=si`,
    {
      mode: 'cors',
    },
  ).then(res => {
    return res.json();
  });
};
