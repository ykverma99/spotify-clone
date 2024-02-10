import CardViews from "./CardViews";
import SuggestsCards from "../SuggestCards/SuggestsCards";
import BrowseCard from "../Card/BrowseCard";
import headphones from "../../assets/headphones.jpg";
import singer from "../../assets/singer.jpg";

const BeforeSearch = () => {
  const arr = new Array(6).fill("");
  const arr2 = new Array(15).fill("");

  return (
    <>
      <CardViews
        justify={"justify-start"}
        option={"Show all"}
        heading={"Recent searches"}
      >
        {arr.map((_, i) => {
          return (
            <SuggestsCards
              key={i}
              size="sm"
              desc={"lorem jhasdbfj vaasdf jkasdfvb ashb asdf"}
              isCross={true}
              src={i % 2 == 0 ? headphones : singer}
              title={"Oonchi Oonchi W..."}
            />
          );
        })}
      </CardViews>
      <CardViews justify={"justify-start"} heading={"Browse all"}>
        {arr2.map((_, i) => {
          return <BrowseCard key={i} text={"Music"} />;
        })}
      </CardViews>
    </>
  );
};

export default BeforeSearch;
