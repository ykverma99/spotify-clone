import Button from "../Button/Button";
import Lists from "../List/Lists";
import Text from "../Text/Text";
import CardViews from "./CardViews";
import headphones from "../../assets/headphones.jpg";
import { useState } from "react";

const arr = [
  "all",
  "songs",
  "albums",
  "artists",
  "playlist",
  "prodcasts & show",
  "profiles",
];
const arr2 = new Array(4).fill("");
const AfterSearch = () => {
  const [options, setoptions] = useState(0);

  return (
    <>
      <div className="space-x-3 px-5 py-3">
        {arr.map((elm, i) => {
          return (
            <Button
              onClick={() => setoptions(i)}
              size="sm"
              bg={`${i == options ? "white" : "rgba(156,163,175,0.2)"}`}
              color={`${i == options ? "black" : "white"}`}
              key={i}
            >
              {elm}
            </Button>
          );
        })}
      </div>
      <div className="flex items-center gap-5">
        <CardViews justify={"justify-start"} heading={"Top result"}>
          <div className="w-[26rem] space-y-3 rounded-lg bg-zinc-700 bg-opacity-30 p-7">
            <div className="h-28 w-28 rounded-md">
              <img
                className="h-full w-full rounded-md object-cover"
                src={headphones}
                alt="headphone"
              />
            </div>
            <div className="space-y-3">
              <Text as={"h2"} className="text-4xl font-bold text-white">
                Dhundle Dhundle
              </Text>
              <div className="inline-flex items-center gap-4">
                <Text className="tracking-wide text-gray-400">
                  singer . composer
                </Text>
                <Button size="sm" bg={"rgba(0,0,0,0.4)"}>
                  Song
                </Button>
              </div>
            </div>
          </div>
        </CardViews>
        <CardViews className={"flex-col "} heading={"Songs"}>
          {arr2.map((_, i) => {
            return (
              <Lists
                key={i}
                title={"Aadat"}
                singer={"ninja"}
                src={headphones}
                time={"4:07"}
              />
            );
          })}
        </CardViews>
      </div>
    </>
  );
};

export default AfterSearch;
