import axios from "axios";

export default (searchWord, diet, type, maxFat) =>
  new Promise((resolve, reject) => {
    var url = `${process.env.REACT_APP_API_URL_RECIPE}complexSearch?`;
    if (searchWord !== "") {
      url = url + "query=" + searchWord;
    }
    if (diet !== "all") {
      url = url + "&diet=" + diet;
    }
    if (type !== "all") {
      url = url + "&type=" + type;
    }
    if (maxFat !== "") {
      url = url + "&maxFat=" + maxFat;
    }

    url = url + `&apiKey=${process.env.REACT_APP_API_KEY}`;
    axios
      .get(url)
      .then((response) => {
        console.log("URL API : ", url);
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
