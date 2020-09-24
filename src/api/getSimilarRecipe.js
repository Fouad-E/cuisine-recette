import axios from "axios";

export default (idRecipe = "") =>
  new Promise((resolve, reject) => {
    console.log(
      "URL API : ",
      `${process.env.REACT_APP_API_URL_RECIPE}/${idRecipe}/similar?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    axios
      .get(
        `${process.env.REACT_APP_API_URL_RECIPE}/${idRecipe}/similar?apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log("Response ok :", response.data);
        if (response && (response.status === 200 || response.status === 304)) {
          resolve(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
