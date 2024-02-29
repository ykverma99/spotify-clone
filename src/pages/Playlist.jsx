/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import HeaderPlaylist from "../components/PlaylistCard/HeaderPlaylist";
import Header from "../components/views/Header";
import TablePlaylist from "../components/views/TablePlaylist";
import Layout from "../layout/Layout";
import { useQuery } from "@tanstack/react-query";
import {
  retriveSingleAlbum,
  retriveSingleTrack,
  singlePlaylist,
} from "../api/data";
import TableBody from "../components/TableBody/TableBody.jsx";
import { useState } from "react";
import useUser from "../hooks/useUser";
import axios from "axios";
import { TbMusicHeart } from "react-icons/tb";
import useAudioSrc from "../hooks/useAudioSrc.jsx";

const Playlist = () => {
  const [toggle, settoggle] = useState(false);
  const [like, setlike] = useState(false);
  const { user, login } = useUser();
  const { setAudioSrc, setAudioDetail } = useAudioSrc();
  const { name } = useParams();
  const { data: album, isLoading: isAlbum } = useQuery({
    queryKey: ["albumData", name],
    queryFn: () => retriveSingleAlbum(name),
  });
  const { data: playlist, isLoading: isPlaylist } = useQuery({
    queryKey: ["playlisy", name],
    queryFn: () => singlePlaylist(name),
  });
  const { data: track, isLoading: isTrack } = useQuery({
    queryKey: ["track", name],
    queryFn: () => retriveSingleTrack(name),
  });
  const color = Math.random().toString().slice(-6);
  if (isAlbum || isTrack || isPlaylist) {
    return <div>loading...</div>;
  }
  const handleLike = async (val) => {
    settoggle(true);
    try {
      const data = {
        songs: [val._id],
      };
      const res = await axios.patch(
        `http://localhost:8080/playlist/${user.playlist[0]?._id}`,
        data,
      );
      if (res.status == 200) {
        try {
          const getUser = await axios.get(
            `http://localhost:8080/user/${user._id}`,
          );
          login(getUser.data.data);
        } catch (error) {
          console.log(error.response);
        }
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  const handlePlaylist = async () => {
    setlike(true);
    try {
      const data = {
        playlistName: track.data[0]?.trackName || album.data[0]?.albumName,
        madeBy: "playlist",
        user: user._id,
        track: track.data[0]?._id || null,
        album: album.data[0]?._id || null,
      };
      const res = await axios.post(`http://localhost:8080/playlist`, data);
      login(res.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleAudioSrcChange = (newAudioSrc, details) => {
    setAudioSrc(newAudioSrc);
    setAudioDetail(details);
  };
  return (
    <Layout>
      <main
        className={`scrollbar-thumb-rounded-full scroll-track-rounded-full col-start-2 col-end-6 row-span-7  overflow-y-auto rounded-lg bg-opacity-30 scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-slate-400`}
        style={{ background: `linear-gradient(to bottom,#${color},black 80%)` }}
      >
        <Header isScroll={true} />
        <div className={`space-y-10`}>
          {album.data.length > 0 ? (
            <>
              <HeaderPlaylist
                image={album.data[0]?.albumImage}
                playlist={"album"}
                name={album.data[0]?.albumName}
                artist={album.data[0]?.artist.map((val) => val.name)}
              />
              <TablePlaylist liked={like} likedClick={handlePlaylist}>
                {album.data[0]?.songs.map((elm, i) => {
                  return (
                    <TableBody
                      onClick={() =>
                        handleAudioSrcChange(
                          elm?.songUrl.toString(),
                          elm?.songName,
                        )
                      }
                      title={elm.songName}
                      name={album.data[0].artist.map((val) => val.name)}
                      src={album.data[0].albumImage}
                      album={album.data[0].albumName}
                      time={"3:59"}
                      date={"5 days"}
                      key={elm._id}
                      index={i + 1}
                      toggle={toggle}
                      toggleClick={() => handleLike(elm)}
                    />
                  );
                })}
              </TablePlaylist>
            </>
          ) : track.data.length > 0 ? (
            <>
              <HeaderPlaylist
                image={track.data[0]?.trackImage}
                playlist={"track"}
                name={track.data[0]?.trackName}
                artist={track.data[0]?.artist.map((val) => val.name)}
              />
              <TablePlaylist liked={like} likedClick={handlePlaylist}>
                <TableBody
                  onClick={() =>
                    handleAudioSrcChange(
                      track.data[0]?.songs.songUrl.toString(),
                      track.data[0]?.songs.songName,
                    )
                  }
                  title={track.data[0]?.songs.songName}
                  name={track.data[0]?.artist.map((val) => val.name)}
                  src={track.data[0]?.trackImage}
                  album={track.data[0]?.trackName}
                  time={"3:59"}
                  date={"5 days"}
                  index={1}
                  toggle={toggle}
                  toggleClick={() => handleLike(track.data[0]?.songs)}
                />
              </TablePlaylist>
            </>
          ) : (
            playlist.data && (
              <>
                <HeaderPlaylist
                  image={
                    playlist.data?.album
                      ? playlist.data?.album?.albumImage
                      : playlist.data?.track?.trackImage
                  }
                  iconLiked={
                    playlist.data?.songs?.length > 0 && (
                      <TbMusicHeart size={55} />
                    )
                  }
                  playlist={"Playlist"}
                  name={playlist.data?.playlistName}
                  artist={playlist.data?.user?.name}
                />
                <TablePlaylist>
                  {playlist.data.songs.length > 0 ? (
                    playlist.data?.songs.map((elm, i) => {
                      return (
                        <TableBody
                          onClick={() =>
                            handleAudioSrcChange(
                              elm?.songUrl.toString(),
                              elm?.songName,
                            )
                          }
                          title={elm.songName}
                          name={elm.artist.map((val) => val.name)}
                          src={
                            elm.album
                              ? elm.album.albumImage
                              : elm.track.trackImage
                          }
                          album={
                            elm.album
                              ? elm.album.albumName
                              : elm.track.trackName
                          }
                          time={"3:59"}
                          date={"5 days"}
                          key={elm._id}
                          index={i + 1}
                          toggle={true}
                          // toggleClick={() => handleLike(elm)}
                        />
                      );
                    })
                  ) : playlist.data?.track ? (
                    <TableBody
                      onClick={() =>
                        handleAudioSrcChange(
                          playlist.data?.track?.songs.songUrl.toString(),
                          playlist.data?.track?.songs.songName,
                        )
                      }
                      title={playlist.data.track.trackName}
                      name={playlist.data?.track.artist[0]?.name}
                      src={playlist.data.track.trackImage}
                      album={playlist.data.track.trackName}
                      time={"3:59"}
                      date={"5 days"}
                      key={playlist.data._id}
                      index={1}
                      toggle={true}
                      // toggleClick={() => handleLike(elm)}
                    />
                  ) : (
                    playlist.data?.album.songs.map((elm, i) => {
                      return (
                        <TableBody
                          onClick={() =>
                            handleAudioSrcChange(
                              elm?.songUrl.toString(),
                              elm?.songName,
                            )
                          }
                          title={elm.songName}
                          name={playlist.data?.album.artist[0].name}
                          src={playlist.data?.album.albumImage}
                          album={playlist.data?.album.albumName}
                          time={"3:59"}
                          date={"5 days"}
                          key={elm._id}
                          index={i + 1}
                          toggle={true}
                          // toggleClick={() => handleLike(elm)}
                        />
                      );
                    })
                  )}
                </TablePlaylist>
              </>
            )
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Playlist;
