import HeaderPlaylist from "../components/PlaylistCard/HeaderPlaylist";
import Header from "../components/views/Header";
import LibraryBox from "../components/views/LibraryBox";
import PageLinkBox from "../components/views/PageLinkBox";
import TablePlaylist from "../components/views/TablePlaylist";

const Playlist = () => {
  const color = Math.random().toString().slice(-6);
  return (
    <div className="grid h-screen grid-cols-5 grid-rows-8 gap-3 overflow-y-hidden bg-black px-5 pt-5">
      {/* in this sidebar we show theour playlists */}
      <aside className="col-start-1 col-end-2 row-span-7 space-y-3 rounded-lg text-white">
        {/* container is used to shift from home to search */}
        <PageLinkBox />

        {/* this container store the our play lists */}
        <LibraryBox />
      </aside>

      {/* main section in which all the content is passed down */}
      <main
        className={`col-start-2 col-end-6 row-span-7 overflow-y-auto rounded-lg bg-opacity-30`}
        style={{ background: `linear-gradient(to bottom,#${color},black 80%)` }}
      >
        <Header isScroll={true} />
        <div className={`space-y-10`}>
          <HeaderPlaylist />
          <TablePlaylist />
        </div>
      </main>

      {/* this is the right sidebar and this will only open when a song is playing and we want
        to show the artist detail */}
      <aside className="col-start-1 col-end-6 rounded-lg  bg-gray-600 bg-opacity-30">
        gasd
      </aside>
    </div>
  );
};

export default Playlist;