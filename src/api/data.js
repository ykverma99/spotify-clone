import axios from "axios";
// const api = process.env.API

export const retriveRadomSongs = async () => {
  const res = await axios.get(`http://localhost:8080/song?random=true`);
  return res.data;
};

export const retriveRadomAlbum = async () => {
  const res = await axios.get(`http://localhost:8080/album?random=true`);
  return res.data;
};

export const retriveSingleAlbum = async (name) => {
  const res = await axios.get(`http://localhost:8080/album/${name}`);
  return res.data;
};
export const retriveSingleTrack = async (name) => {
  const res = await axios.get(`http://localhost:8080/track/${name}`);
  return res.data;
};

export const retriveRadomTrack = async () => {
  const res = await axios.get(`http://localhost:8080/track?random=true`);
  return res.data;
};
