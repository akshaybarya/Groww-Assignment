import axios from "axios";

export const fetchDetails = async (city) => {
  try {
    const res = await axios.get(
      `https://vast-shore-74260.herokuapp.com/banks?city=${city}`
    );

    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};
