/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import HeaderPlaylist from "../components/PlaylistCard/HeaderPlaylist";
import Header from "../components/views/Header";
import TablePlaylist from "../components/views/TablePlaylist";
import Layout from "../layout/Layout";
import { useQuery } from "@tanstack/react-query";
import { retriveSingleAlbum, retriveSingleTrack } from "../api/data";
import TableBody from "../components/TableBody/TableBody.jsx";

const Playlist = () => {
  const { name } = useParams();
  const { data: album, isLoading: isAlbum } = useQuery({
    queryKey: ["albumData"],
    queryFn: () => retriveSingleAlbum(name),
  });
  const { data: track, isLoading: isTrack } = useQuery({
    queryKey: ["track"],
    queryFn: () => retriveSingleTrack(name),
  });
  const color = Math.random().toString().slice(-6);
  if (isAlbum || isTrack) {
    return <div>loading...</div>;
  }
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
              <TablePlaylist>
                {album.data[0]?.songs.map((elm, i) => {
                  return (
                    <TableBody
                      title={elm.songName}
                      name={album.data[0].artist.map((val) => val.name)}
                      src={album.data[0].albumImage}
                      album={album.data[0].albumName}
                      time={"3:59"}
                      date={"5 days"}
                      key={elm._id}
                      index={i + 1}
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
              <TablePlaylist>
                <TableBody
                  title={track.data[0]?.songs.songName}
                  name={track.data[0]?.artist.map((val) => val.name)}
                  src={track.data[0]?.trackImage}
                  album={track.data[0]?.trackName}
                  time={"3:59"}
                  date={"5 days"}
                  index={1}
                />
              </TablePlaylist>
            </>
          ) : null}
        </div>
      </main>
    </Layout>
  );
};

export default Playlist;
