import SuggestsCards from "./components/SuggestCards/SuggestsCards";
import Header from "./components/views/Header";
import LibraryBox from "./components/views/LibraryBox";
import PageLinkBox from "./components/views/PageLinkBox";
import headphones from "./assets/headphones.jpg";
import singer from "./assets/singer.jpg";
import CardViews from "./components/views/CardViews";
import PlaylistCard from "./components/PlaylistCard/PlaylistCard";

function App() {
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
      <main className="col-start-2 col-end-6  row-span-7 overflow-y-auto rounded-lg bg-gray-600 bg-opacity-30">
        <Header />
        {/* <PlaylistComponent /> */}
        <CardViews heading={"Good Evening"}>
          <PlaylistCard text={"Liked Songs"} src={headphones} />
          <PlaylistCard text={"Liked Songs"} src={singer} />
          <PlaylistCard text={"Liked Songs"} src={headphones} />
          <PlaylistCard text={"Liked Songs"} src={singer} />
          <PlaylistCard text={"Liked Songs"} src={headphones} />
          <PlaylistCard text={"Liked Songs"} src={singer} />
        </CardViews>

        <CardViews
          justify={"justify-start"}
          gap={"gap-6"}
          heading={"Made for username"}
        >
          <SuggestsCards
            src={singer}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={headphones}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={singer}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={headphones}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={singer}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={headphones}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
        </CardViews>
        <CardViews
          justify={"justify-start"}
          gap={"gap-6"}
          heading={"Made for username"}
        >
          <SuggestsCards
            src={singer}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={headphones}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={singer}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={headphones}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={singer}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={headphones}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
        </CardViews>
        <CardViews
          justify={"justify-start"}
          gap={"gap-6"}
          heading={"Made for username"}
        >
          <SuggestsCards
            src={singer}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={headphones}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={singer}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={headphones}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={singer}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={headphones}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
        </CardViews>
        <CardViews
          justify={"justify-start"}
          gap={"gap-6"}
          heading={"Made for username"}
        >
          <SuggestsCards
            src={singer}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={headphones}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={singer}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={headphones}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={singer}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
          <SuggestsCards
            src={headphones}
            title={"Daily Mix 1"}
            desc={"Prabh Gill, Simar Dorraha. Harnoor an..."}
          />
        </CardViews>
      </main>

      {/* this is the right sidebar and this will only open when a song is playing and we want
        to show the artist detail */}
      <aside className="col-start-1 col-end-6 rounded-lg  bg-gray-600 bg-opacity-30">
        gasd
      </aside>
    </div>
  );
}

export default App;
