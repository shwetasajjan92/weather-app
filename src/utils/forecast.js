const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=92fe5bc199f6c95936904894c4dacd0c&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    console.log(body);
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,

        "It is currently " +
          body.current.temperature +
          " degress out. There is a " +
          body.current.precip +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;

/*
{
    "request": {
        "type": "LatLon",
        "query": "Lat 42.36 and Lon -71.06",
        "language": "en",
        "unit": "f"
    },
    "location": {
        "name": "Boston",
        "country": "United States of America",
        "region": "Massachusetts",
        "lat": "42.358",
        "lon": "-71.060",
        "timezone_id": "America/New_York",
        "localtime": "2023-02-21 03:45",
        "localtime_epoch": 1676951100,
        "utc_offset": "-5.0"
    },
    "current": {
        "observation_time": "08:45 AM",
        "temperature": 41,
        "weather_code": 122,
        "weather_icons": [
            "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
        ],
        "weather_descriptions": [
            "Overcast"
        ],
        "wind_speed": 9,
        "wind_degree": 20,
        "wind_dir": "NNE",
        "pressure": 1005,
        "precip": 0,
        "humidity": 65,
        "cloudcover": 100,
        "feelslike": 37,
        "uv_index": 1,
        "visibility": 10,
        "is_day": "no"
    }
}
*/
