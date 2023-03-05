// fetch(`https://puzzle.mead.io/puzzle`)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// const address = "Boston";
// fetch(
//   `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2h3ZXRhc2FqamFuMTk5MiIsImEiOiJjbGVkMzg3d2kwMzJkM3B0azAzNWV3Y3QwIn0.Qd2NLVbbw2b6cOLkYFy5Og&limit=1`
// )
//   .then((res) => res.json())
//   .then((data) => {
//     const [longitude, latitude] = data.features[0].center;
//     return fetch(
//       `http://api.weatherstack.com/current?access_key=92fe5bc199f6c95936904894c4dacd0c&query=${latitude},${longitude}&units=f`
//     );
//   })
//   .then((res) => {
//     if (res.status !== 200) {
//       throw new Error("Something is wrong");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(`location:${data.location.name}`);
//   });

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(`http://localhost:3000/weather?address=${location}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
});
