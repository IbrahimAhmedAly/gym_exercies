import axios from "axios";

const BASE_URL = "https://exercisedb.p.rapidapi.com";

const YOUTUBE_BASE_URL = "https://youtube-search-and-download.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  headers: {
    // "X-RapidAPI-Key": "fc7ee836a1msh23ab7d84b643138p127254jsn5e9c8e1a5d2c",
    "X-RapidAPI-Key": "f4442afc71msh4d58b81a9c40da2p10ed7fjsnefcf6b12d708",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const youtubeOptions = {
  method: "GET",
  url: YOUTUBE_BASE_URL,
  headers: {
    "X-RapidAPI-Key": "fc7ee836a1msh23ab7d84b643138p127254jsn5e9c8e1a5d2c",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

export const youtubeFetchData = async (url) => {
  const { data } = await axios.get(
    `${YOUTUBE_BASE_URL}/${url}`,
    youtubeOptions
  );

  return data;
};
