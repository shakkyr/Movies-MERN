import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import { addToFavorite } from '../redux/actions/favoriteActions';

const Product = ({ match, history }) => {
	const { movieId } = match.params;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProduct(movieId));
	}, [dispatch, movieId]);

	const { movie } = useSelector(state => state.movies);

	const handleaddToFavorite = () => {
		dispatch(addToFavorite(movie));
	};

	const handleGoBackBtn = () => {
		history.goBack();
	};

	return (
		<section className='product-page m-4'>
			<button
				to='/shop'
				className='btn btn-light text-primary mb-4'
				onClick={handleGoBackBtn}
			>
				Go Back
			</button>
			{movie && (
				<div className='row'>
					<div className='col-md-6'>
						<img
							className='img-fluid w-100 mb-4'
							src={`/uploads/${movie.title}`}
							alt='product'
						/>
					</div>
					<div className='col-md-5'>
						<h3 className='mb-4'>{movie.title}</h3>
						<p className='text-muted border-top py-2'>
							Price:{' '}
							{movie.title}
						</p>
						
						<p className='text-muted border-top py-2'>
							Description: {movie.overview}
						</p>
						<button
							className='btn btn-dark btn-large btn-block mb-5 py-2'
							
							onClick={handleaddToFavorite}
						>
							Add to Favorite
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default Product;