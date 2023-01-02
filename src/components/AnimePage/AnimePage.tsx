import React from "react";
import "./AnimePage.scss";
import { useGetAnimePageQuery } from "./AnimePage.generated";

const AnimePage: React.FC = () => {
  const {data, loading, error} = useGetAnimePageQuery({
    variables: {
      page: 1,
      perPage: 10
    }
  });

  console.log({data, loading, error});

  return (
    <section className="anime-page">
      <h1>Anime Page</h1>
    </section>
  )
};

export default AnimePage;