const axios = require("axios");
const { Type } = require("../db.js");
const url = "https://pokeapi.co/api/v2/type";

const getTypes = async (req, res) => {
  const getDetails = async (element) => {
    const detailResponse = await axios.get(element.url);
    return detailResponse.data;
  };
  try {
    const response = await axios.get(url);
    const response2 = response.data.results.map((element) => {
      return getDetails(element);
    });
    const responseFinal = await Promise.all(response2);
    for (const element of responseFinal) {
      let [insert, created] = await Type.findOrCreate({
        where: { name: element.name },
      });
    }
  } catch (error) {
    console.error(error);
  }
  try {
    const DBfind = await Type.findAll();
    return res.status(200).json(DBfind);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = getTypes;
