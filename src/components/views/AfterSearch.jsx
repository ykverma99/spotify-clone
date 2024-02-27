/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import Lists from "../List/Lists";
import Text from "../Text/Text";
import CardViews from "./CardViews";
import headphones from "../../assets/headphones.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const arr = [
  "all",
  "songs",
  "albums",
  "artists",
  "playlist",
  "prodcasts & show",
  "profiles",
];
const arr2 = new Array(3).fill("");
const AfterSearch = ({ data }) => {
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
          <Link
            to={`/playlist/${data[0]?.songName || data[0]?.albumName}`}
            className="w-[26rem] space-y-3 rounded-lg bg-zinc-700 bg-opacity-30 p-7"
          >
            <div className="h-28 w-28 rounded-md">
              <img
                className="h-full w-full rounded-md object-cover"
                src={
                  data[0]?.album?.albumImage ||
                  data[0]?.track?.trackImage ||
                  data[0]?.albumImage
                }
                alt="headphone"
              />
            </div>
            <div className="space-y-3">
              <Text
                as={"h2"}
                className="text-4xl font-bold capitalize text-white"
              >
                {data[0]?.songName || data[0]?.albumName}
              </Text>
              <div className="inline-flex items-center gap-4">
                <Text className="tracking-wide text-gray-400">
                  {data[0]?.artist?.map((elm) => elm.name)}
                </Text>
                <Button size="sm" bg={"rgba(0,0,0,0.4)"}>
                  Song
                </Button>
              </div>
            </div>
          </Link>
        </CardViews>
        <CardViews className={"flex-col "} heading={"Songs"}>
          <Lists
            title={data[0]?.songName || data[0]?.albumName}
            singer={data[0]?.artist?.map((elm) => elm.name)}
            src={
              data[0]?.album?.albumImage ||
              data[0]?.track?.trackImage ||
              data[0]?.albumImage
            }
            time={"4:07"}
          />
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
