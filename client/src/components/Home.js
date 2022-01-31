import React, { useEffect, useState } from "react";
import { showLoading } from "../helpers/loading";
import MovieCard from "./MovieCard";
import { getMovies, getSearchedMovies } from "../redux/actions/MoviesActions";
import { useDispatch, useSelector } from "react-redux";
// import styled from 'styled-components';
import { HomeDiv } from "../styles/style";
// import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";
import SearchBox from "./SearchBox";

const Home = () => {
  const [moviePoster, setMoviePoster] = useState([]);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSearchedMovies(search));
  }, [search]);

  // useEffect(() => {
  // 	dispatch(getProductsByCount());
  // }, [dispatch]);
  // useEffect(()=>{
  // 	getMovies().then(res=>{
  //         console.log('res',res.data.results);
  // 	})
  // })

  const { movieList } = useSelector((state) => state.movieList);
  const { loading } = useSelector((state) => state.loading);
  // const { searchedMovies } = useSelector((state) => state.searchedMovies);

  let x = Math.floor(Math.random() * (19 - 0 + 1));

  useEffect(() => {
    setMoviePoster(movieList[x]?.poster_path);
    setMovies(movieList);
  }, [movieList]);
  console.log(search);

  // useEffect(() => {
  //   setTimeout(() => {
  // 	  dispatch(getSearchedMovies(search)).then(response=>{
  // 		  console.log(response)
  // 	  })

  //   }, 1500);
  // },[search])

  // const {title} = nowPlaying[x]

  // `${imageUrl}${movie.poster_path}`

  //  const {poster_path} = nowPlaying[x]

  return (
    <section className="home-page">
      sdfsfs
      <HomeDiv poster={moviePoster} />
      {loading ? (
        <div className="text-center">{showLoading()}</div>
      ) : (
        <>
          <div className="container-fluid movie-app">
            <hr className="py-4" />
            <SearchBox search={search} setSearch={setSearch} />
            <h3 className="py-4">Now Playing</h3>
            <div className="row movie-rows">
              {movies &&
                movies.map((ele) => (
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
