/* eslint-disable react/prop-types */
import "./style.scss";
import { useSelector } from "react-redux";

function Genres({ data }) {
    // console.log("data",data)
  const { genres } = useSelector((state) => state.home);
//   console.log("genres---------------",genres)
  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div key={g} className="genre">
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
}

export default Genres;
