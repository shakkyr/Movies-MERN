import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD_TO_FAVORITE } from '../redux/constants/favoriteConstants';
import { deleteFromFavorite } from '../redux/actions/favoriteActions';

const Favorite = ({ history }) => {
	const { favorite } = useSelector(state => state.favorite);

	const dispatch = useDispatch();

	const handleGoBackBtn = () => {
		history.goBack();
	};

	const handleQtyChange = (e, movie) => {
		const favorite = localStorage.getItem('favorite')
			? JSON.parse(localStorage.getItem('favorite'))
			: [];

		favorite.forEach(favoriteMovie => {
			if (favoriteMovie.id === movie.id) {
				favoriteMovie.count = e.target.value;
			}
		});

		localStorage.setItem('favorite', JSON.stringify(favorite));

		dispatch({
			type: ADD_TO_FAVORITE,
			payload: favorite,
		});
	};

	return (
		<section className='cart-page m-4'>
			{favorite.length <= 0 ? (
				<div className='jumbotron'>
					<h1 className='display-4'>
						Your favorite is empty{' '}
						<button
							className='btn btn-light text-primary ml-4'
							onClick={handleGoBackBtn}
						>
							Go Back
						</button>
					</h1>
				</div>
			) : (
				<>
					<div className='jumbotron'>
						<h1 className='display-4'>Favorite</h1>
					</div>
					<div className='row'>
						<div className='col-md-8'>
							<table className='table'>
								<thead>
									<tr>
										<th scope='col'></th>
										<th scope='col'>movie</th>
										<th scope='col'>Remove</th>
									</tr>
								</thead>
								<tbody>
									{favorite.map(movie => (
										<tr key={movie.id}>
											<th scope='row'>
												{' '}
												<img
													style={{
														maxWidth: '110px',
													}}
													className='img-fluid w-100 img-thumbnail'
													src={`/uploads/${movie.title}`}
													alt='movie'
												/>
											</th>
											<td>
												{' '}
												<Link
													to={`/movie/${movie.id}`}
												>
													{movie.movieName}
												</Link>
											</td>
											<td>
												{' '}
												{movie.title}
											</td>
											<td>
												
											</td>
											<td>
												{' '}
												<button
													type='button'
													className='btn btn-danger btn-sm'
													onClick={() =>
														dispatch(
															deleteFromFavorite(
																movie
															)
														)
													}
												>
													<i className='far fa-trash-alt pr-1'></i>
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className='col-md-4 border-left pl-4'>
							<h2>Cart Summary</h2>
							<p className='font-weight-light text-muted border-bottom'>
								{favorite.length === 1
									? '(1) Movie'
									: `(${favorite.length}) Movies`}
							</p>
							
							<button className='btn btn-dark btn-large btn-block mb-5 py-2'>
								Proceed to Checkout
							</button>
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default Favorite;