import LibraryBox from "../components/views/LibraryBox";
import PageLinkBox from "../components/views/PageLinkBox";
import MusicControll from "../components/views/MusicControll";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    // <AudioProvider>
    <div className="grid h-screen grid-cols-5 grid-rows-8 gap-3 overflow-y-hidden bg-black px-5 pt-5">
      {/* Sidebar */}
      <aside className="col-start-1 col-end-2 row-span-7 space-y-3 rounded-lg text-white">
        <PageLinkBox />
        <LibraryBox />
      </aside>

      {/* Main Content */}
      {children}
      {/* Right Sidebar */}
      <aside className="col-start-1 col-end-6 rounded-lg  bg-gray-600 bg-opacity-30">
        <MusicControll />
      </aside>
    </div>
    // </AudioProvider>
  );
};

export default Layout;
