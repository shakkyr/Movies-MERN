import React, { useEffect, useState } from "react";
import { showLoading } from "../helpers/loading";
import MovieCard from "./MovieCard";
import { getMovies } from "../redux/actions/MoviesActions";
import { useDispatch, useSelector } from "react-redux";
// import styled from 'styled-components';
import { HomeDiv } from "../styles/style";
// import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";
import SearchBox from "./SearchBox";


const Home = () => {
    const [moviePoster, setMoviePoster] = useState([]);
	const [search , setSearch] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  // useEffect(() => {
  // 	dispatch(getProductsByCount());
  // }, [dispatch]);
  // useEffect(()=>{
  // 	getMovies().then(res=>{
  //         console.log('res',res.data.results);
  // 	})
  // })

  const { nowPlaying } = useSelector((state) => state.nowPlaying);
  const { loading } = useSelector((state) => state.loading);

  let x = Math.floor(Math.random() * (19 - 0 + 1));

  useEffect(()=>{
	  setMoviePoster(nowPlaying[x]?.backdrop_path)
	  console.log(nowPlaying[x]?.poster_path);
	  console.log(nowPlaying[x]);
  }, [nowPlaying])

  // const {title} = nowPlaying[x]

  // `${imageUrl}${movie.poster_path}`

  //  const {poster_path} = nowPlaying[x]


  return (
    <section className="home-page">
	sdfsfs
	            

      <HomeDiv poster={moviePoster}/>
      {loading ? (
        <div className="text-center">{showLoading()}</div>
      ) : (
        <>
          <div className="container-fluid movie-app">
            <hr className="py-4" />
            <SearchBox search={search} setSearch={setSearch} />
            <h3 className="py-4">Now Playing</h3>
            <div className="row">
              {nowPlaying &&
                nowPlaying.map((ele) => (
                  <MovieCard key={ele.id} movie={ele} homePage={true} />
                ))}
              {/* <MovieCard movies={nowPlaying} /> */}
            </div>

            <hr className="py-4" />
            <h3 className="py-4">....</h3>
            <div className="row"></div>
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
