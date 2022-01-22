import { fetchDetails } from "../api/fetchData";
import {
  BANK_DETAIL,
  BANK_DETAILS,
  CACHE_TIME,
  FAVOURITE_BANK,
  TIME_KEY,
} from "./constants";

// fetching Data from LocalStorage

export const fetchDataFromLocalStorge = async (city) => {
  const data = JSON.parse(
    localStorage.getItem(`${city.toUpperCase()}_${BANK_DETAILS}`)
  );
  const timeStamp = localStorage.getItem(`${city.toUpperCase()}_${TIME_KEY}`);

  const currentTime = new Date().getTime();

  if (data && timeStamp >= currentTime - CACHE_TIME) {
    return data;
  }

  localStorage.removeItem(`${city.toUpperCase()}_${BANK_DETAILS}`);
  localStorage.removeItem(`${city.toUpperCase()}_${TIME_KEY}`);

  const res = await fetchDetails(city.toUpperCase());

  localStorage.setItem(
    `${city.toUpperCase()}_${BANK_DETAILS}`,
    JSON.stringify(res)
  );

  localStorage.setItem(`${city.toUpperCase()}_${TIME_KEY}`, currentTime);

  return res;
};

// setting a Bank Detail

export const setBankData = (data) => {
  localStorage.setItem(BANK_DETAIL, JSON.stringify(data));
};

// getting a Bank Detail

export const fetchBankData = () => {
  return JSON.parse(localStorage.getItem(BANK_DETAIL));
};

// altering Favourite Data

export const alterFavourite = (operation, data) => {
  let favouriteList = JSON.parse(localStorage.getItem(FAVOURITE_BANK));

  if (!favouriteList || favouriteList.length === 0) {
    favouriteList = [];
  }

  if (operation === "add") {
    localStorage.setItem(
      FAVOURITE_BANK,
      JSON.stringify([...favouriteList, data])
    );
  } else {
    localStorage.setItem(
      FAVOURITE_BANK,
      JSON.stringify(favouriteList.filter((bank) => bank.ifsc !== data.ifsc))
    );
  }
};

// Getting Favourite List

export const fetchFavourite = () => {
  return JSON.parse(localStorage.getItem(FAVOURITE_BANK));
};
