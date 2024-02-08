import headphonePic from "../../assets/headphones.jpg";
import PlaylistCard from "../PlaylistCard/PlaylistCard";

const PlaylistComponent = () => {
  return (
    <div className="space-y-6 p-5">
      <h2 className="text-3xl font-semibold text-white">Good Evening</h2>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <PlaylistCard text={"Liked Songs"} src={headphonePic} />
        <PlaylistCard text={"Liked Songs"} src={headphonePic} />
        <PlaylistCard text={"Liked Songs"} src={headphonePic} />
        <PlaylistCard text={"Liked Songs"} src={headphonePic} />
        <PlaylistCard text={"Liked Songs"} src={headphonePic} />
        <PlaylistCard text={"Liked Songs"} src={headphonePic} />
      </div>
    </div>
  );
};

export default PlaylistComponent;
