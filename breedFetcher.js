const needle = require("needle");

const arr = process.argv.slice(2);

const url = `https://api.thecatapi.com/v1/breeds/search?q=${arr[0].slice(
  0,
  4
)}`;

const getContent = (url) => {
  needle.get(url, (error, respond, body) => {
    if (!respond) {
      console.error("Request Failed", error);
      return;
    } else if (body.length === 0) {
      console.error("Breed Not Found!!!", error);
      return;
    } else {
      console.log(body[0].description);
    }
  });
};

getContent(url);
