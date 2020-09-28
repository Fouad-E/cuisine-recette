import axios from "axios";

export default (idRecipe = "") =>
  new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL_RECIPE}/${idRecipe}/similar?apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        if (response && (response.status === 200 || response.status === 304)) {
          resolve(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
