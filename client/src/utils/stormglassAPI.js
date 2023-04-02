

const lat = 60.936;
const lng = 5.114;

// -- Example Request -- //
fetch(`https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${lng}&start=2019-03-15&end=2019-03-15`, {
  headers: {
    'Authorization': 'example-api-key'
  }
}).then((response) => response.json())
  .then((jsonData) => {
  // Do something with response data.
});