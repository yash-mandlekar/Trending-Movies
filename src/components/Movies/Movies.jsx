import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Loader from "../loader/loader";
import { useNavigate } from "react-router-dom/dist";

const Movies = () => {
  const navigate = useNavigate();
  const [trending, settrending] = useState(null);
  const [pages, setpages] = useState(1);
  const [count, setcount] = useState(1);
  useEffect(() => {
    trendingHandler();
  }, [pages]);
  const trendingHandler = () => {
    const url = `https://api.themoviedb.org/3/trending/all/week?api_key=5d97759ad94f89e2b864506f4d087823&page=${pages}`;
    fetch(url)
      .then((data) => data.json())
      .then((data2) => {
        settrending(data2.results);
        setcount(data2.total_pages);
      });
  };
  const changepagehandler = (e, v) => {
    setpages(v);
  };
  const handleMovie = (id) => {
    navigate("/" + id);
  };
  return (
    <div>
      <h1>
        Trending Movies <ion-icon name="chevron-forward"></ion-icon>
      </h1>
      <div className="movies">
        {trending ? (
          trending.map((e, i) => (
            <div className="cnt" key={i} onClick={() => handleMovie(e.id)}>
              <img
              className="allimg"
                src={`https://image.tmdb.org/t/p/w500${
                  e.poster_path ||
                  e.backdrop_path ||
                  e.profile_path ||
                  "/csU9xxVn8tVyhwx4rw96zse1xrU.jpg"
                }`}
              />
              <div className="content">
                <div className="star">
                  <ion-icon name="star"></ion-icon> {e.vote_average || 0.5}
                </div>
                <div className="title">
                  {e.original_name || e.original_title || e.name}
                </div>
                <div className="date">{e.release_date}</div>
                <a
                  href={`https://www.youtube.com/results?search_query=${
                    e.original_name || e.original_title
                  }+trailer`}
                >
                  <div className="trailer">
                    <ion-icon name="play"></ion-icon>
                    <div>Trailer</div>
                  </div>
                </a>
              </div>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
      <h2>
        <Pagination count={count} onChange={changepagehandler} />
      </h2>
    </div>
  );
};

export default Movies;
