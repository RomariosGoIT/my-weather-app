export const getWeatherForLocation = city => {
  const [lat, long] = city['latt_long'].split(',');
  return fetch(
    `https://my-best-weather-app.herokuapp.com/forecast/${lat},${long}`,
    {
      mode: 'cors',
    },
  ).then(res => {
    console.log(res);
    return res.json();
  });
};
