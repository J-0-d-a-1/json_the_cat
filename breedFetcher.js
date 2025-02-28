const needle = require("needle");

const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName.slice(
    0,
    4
  )}`;

  needle.get(url, (error, respond, body) => {
    if (!respond) {
      // callback(error);
      callback("Request Faild");
      return;
    } else if (body.length === 0) {
      // callback(error);
      callback("Breed Not Found");
      return;
    } else {
      // callback(body[0].description);
      callback(null, body[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };

// const breedDescription = (breedName) => {
//   const id = breedName.slice(0, 4);
//   const url = `https://api.thecatapi.com/v1/breeds/search?q=${id}`;
//   needle.get(url, (error, respond, body) => {
//     if (!respond) {
//       console.error("Request Failed", error);
//       return;
//     } else if (body.length === 0) {
//       console.error("Breed Not Found!!!", error);
//       return;
//     } else {
//       console.log(body[0].description);
//     }
//   });
// };

// breedDescription(process.argv[2]);

// fetchBreedDescription(process.argv[2], (message) => console.log(message));
