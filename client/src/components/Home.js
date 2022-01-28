import React, { useEffect } from 'react';
import { showLoading } from '../helpers/loading';
import Card from './Card';
import {getMovies} from '../redux/actions/MoviesActions'
import { useDispatch, useSelector } from 'react-redux';
// import styled from 'styled-components';
import {HomeDiv} from '../styles/style'


const imageUrl = "https://image.tmdb.org/t/p/original";




const Home = () => {
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

	
	const { nowPlaying } = useSelector(state => state.nowPlaying);
	const { loading } = useSelector(state => state.loading);

	// `${imageUrl}${movie.poster_path}`

 let x = Math.floor(Math.random() * (19 - 0 + 1))
//  const {poster_path} = nowPlaying[x]



  



	return (
		<section className='home-page'>
			<HomeDiv/>
			{loading ? (
				<div className='text-center'>{showLoading()}</div>
			) : (
				<>
					<div className='container'>
						<hr className='py-4' />
						<h3 className='py-4'>New Movies</h3>
						<div className='row'>
							{nowPlaying &&
								nowPlaying.map(ele => (
									<Card
										key={ele.id}
										movie={ele}
										homePage={true}
									/>
								))}
						</div>

						<hr className='py-4' />
						<h3 className='py-4'>Menu</h3>
						<div className='row'>
						
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default Home;