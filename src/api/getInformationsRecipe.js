import axios from "axios";

export default (id = "") =>
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
        if (response && (response.status === 200 || response.status === 304)) {
          resolve(response.data.results);
        }
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
