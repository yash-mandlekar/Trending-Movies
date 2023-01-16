import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SingleMovie = () => {
  const { id } = useParams();
  const [Movie, setMovie] = useState();
  const getMovie = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=678c9b4411286f011b3e28f4eae6599e&language=en-US&page=1`
    );
    const data = await res.json();
    setMovie(data);
    console.log(data);
  };
  useEffect(() => {
    getMovie();
  }, []);

  const [show, setShow] = useState(false)

  const showHandler = () =>{
    setShow(!show);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="cnt3">
        <img
          src={`https://image.tmdb.org/t/p/w500${
            Movie?.poster_path ||
            Movie?.backdrop_path ||
            Movie?.profile_path ||
            "/csU9xxVn8tVyhwx4rw96zse1xrU.jpg"
          }`}
        />
        <div className="singlecontent">
          <div className="singletitle">
            {Movie?.original_name || Movie?.original_title || Movie?.name}
          </div>
          <div className="star">
            <ion-icon name="star"></ion-icon>
            {Movie?.vote_average || 0.5}
          </div>
          <div className="date">
            {/* {e.release_date} */}
            07/02/2100
          </div>

          <div style={{ width: 70, height: 70 ,fill: 50}}>
            <CircularProgressbar 
            value={Math.floor(Movie?.vote_average*10)} 
            text={Math.floor(Movie?.vote_average*10)+"%"} 
            styles={buildStyles({
              textColor: "blue",
              pathColor: "turquoise",
              trailColor: "white"
            })} />
          </div>

          
        <div className="overview">
          {show? Movie?.overview : Movie?.overview.slice(0,40)+"..."}&nbsp;&nbsp;&nbsp;<a style={{borderBottom : "1px solid gray"}} onClick={showHandler}>{show?"hide":"show more"}</a>
        </div>

          <a
            href={`https://www.youtube.com/results?search_query=${
              Movie?.original_name || Movie?.original_title
            }+trailer`}
          >
            <br />
            <br />
            <br />
            <div className="trailer">
              <ion-icon name="play"></ion-icon>
              <div>Trailer</div>
            </div>
          </a>
          
          <br />
            <br />
          <div className="trailer">
            <a href={`${Movie?.homepage}`}>Trailer By Raj</a>
          </div>
          <br />
          <br />
          <br/>

          <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
          
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
