import axios from "axios";

export default (searchWord) =>
  new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL_COMPLEX_SEARCH}?query=${searchWord}&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log(
          "URL API : ",
          `${process.env.REACT_APP_API_URL_COMPLEX_SEARCH}?query=${searchWord}&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        console.log("Response ok :", response.data.results);
        resolve(response.data.results);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
