import axios from "axios";

const api = import.meta.env.VITE_API;

export const retriveRadomSongs = async () => {
  const res = await axios.get(`${api}/song?random=true`);
  return res.data;
};
export const retriveAllSongs = async () => {
  const res = await axios.get(`${api}/song`);
  return res.data;
};
export const retriveAllAlbum = async () => {
  const res = await axios.get(`${api}/album`);
  return res.data;
};

export const retriveRadomAlbum = async () => {
  const res = await axios.get(`${api}/album?random=true`);
  return res.data;
};

export const retriveSingleAlbum = async (name) => {
  const res = await axios.get(`${api}/album/${name}`);
  return res.data;
};
export const retriveSingleTrack = async (name) => {
  const res = await axios.get(`${api}/track/${name}`);
  return res.data;
};

export const retriveRadomTrack = async () => {
  const res = await axios.get(`${api}/track?random=true`);
  return res.data;
};

export const singleUser = async (user) => {
  const res = await axios.get(`${api}/user/${user}`);
  return res.data;
};

export const singlePlaylist = async (playlist) => {
  const res = await axios.get(`${api}/playlist/${playlist}`);
  return res.data;
};

export const singleSong = async (name) => {
  const res = await axios.get(`${api}/song/${name}`);
  return res.data;
};

export const postPlaylist = async (data) => {
  const res = await axios.post(`${api}/playlist`, data);
  return res.data;
};
