import React, { Fragment, useEffect, useState } from 'react'
import './App.css'
import Pagination from '@mui/material/Pagination'
import Loader from './components/loader/loader.jsx'

const App = () => {
  const [trending, settrending] = useState(null);
  const [watchlist, setwatchlist] = useState([]);
  const [pages, setpages] = useState(1);
  const [count, setcount] = useState(1);
  useEffect(() => {
    // setInterval(() => {
    // }, 3000);
    trendingHandler();
  }, [pages]);
  const trendingHandler = () => {
    const url = `https://api.themoviedb.org/3/trending/all/week?api_key=5d97759ad94f89e2b864506f4d087823&page=${pages}`
    fetch(url)
      .then(data => data.json())
      .then(data2 => {
        settrending(data2.results)
        setcount(data2.total_pages)
      })
    }
    const watch = (i) => {
      const cpy = [...watchlist]
    cpy.push(trending[i])
    setwatchlist(cpy)
  }
  const changepagehandler = (e,v) => {
    setpages(v)
  }
  return (
    <Fragment>
      <h1>Trending Movies <ion-icon name="chevron-forward"></ion-icon> </h1>
      <div className='movies'>
        {trending ? trending.map((e, i) => (
          <div className='cnt' key={i}>
            <img src={`https://image.tmdb.org/t/p/w500${e.poster_path || e.backdrop_path || e.profile_path || "/csU9xxVn8tVyhwx4rw96zse1xrU.jpg"}`} />
            <div className="content">
              <div className='star'><ion-icon name="star"></ion-icon> {e.vote_average || 0.5}</div>
              <div className='title'>{e.original_name || e.original_title || e.name}</div>
              <div className='date'>{e.release_date}</div>
              <div onClick={() => watch(i)} className='watchlist'><ion-icon name="add"></ion-icon><div>Watchlist</div></div>
              <a href={`https://www.youtube.com/results?search_query=${e.original_name || e.original_title}+trailer`}>
                <div className='trailer'><ion-icon name="play"></ion-icon><div>Trailer</div></div>
              </a>
            </div>
          </div>
        )):<Loader />}
      </div>
      <h2><Pagination
       count={count} 
       onChange={changepagehandler}
       /></h2>
      <h1>Watchlist <ion-icon name="chevron-forward"></ion-icon></h1>
        <div className="movies">
        {watchlist && watchlist.map((e,i)=>(
          <div className='cnt2' key={i}>
            <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} />
            <div className="content">
              <p><ion-icon name="star"></ion-icon> {e.vote_average}</p>
              <p>{e.original_title || e.original_name}</p>
              <a href="https://www.imdb.com/video/vi3119039257/?ref_=hm_fanfav_tr_vp_2_pd_fp1">
                <div className='trailer'><ion-icon name="play"></ion-icon><p>Trailer</p></div>
              </a>
            </div>
          </div>
        ))}
        </div>
        
    </Fragment>
  )
}
export default App;