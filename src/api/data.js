import axios from "axios";
// const api = process.env.API

export const retriveRadomSongs = async () => {
  const res = await axios.get(`http://localhost:8080/song?random=true`);
  return res.data;
};
export const retriveAllSongs = async () => {
  const res = await axios.get(`http://localhost:8080/song`);
  return res.data;
};
export const retriveAllAlbum = async () => {
  const res = await axios.get(`http://localhost:8080/album`);
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

export const singleUser = async (user) => {
  const res = await axios.get(`http://localhost:8080/user/${user}`);
  return res.data;
};

export const singlePlaylist = async (playlist) => {
  const res = await axios.get(`http://localhost:8080/playlist/${playlist}`);
  return res.data;
};

export const singleSong = async (name) => {
  const res = await axios.get(`http://localhost:8080/song/${name}`);
  return res.data;
};

export const postPlaylist = async (data) => {
  const res = await axios.post(`http://localhost:8080/playlist`, data);
  return res.data;
};
