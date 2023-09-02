/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import "./style.scss";
import useFatch from "../../hook/useFetch";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

function Details() {
  const { mediaType, id } = useParams();

  const { data, loading } = useFatch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFatch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  );
}

export default Details;
