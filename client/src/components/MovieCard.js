import React from 'react';
import { Link } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../redux/actions/favoriteActions';


const imageUrl = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie, adminPage = false, homePage = false }) => {
	const dispatch = useDispatch();

	const handleAddToFavorite = () => {
		dispatch(addToFavorite(movie));
	};

	return (
		<div className='col-md-2 my-3 big-card'>
			<div className='card h-100'>
			<Link to={`/movie/${movie.id}`}>
					<img
						className='img-fluid w-100'
						src={movie.poster_path? `${imageUrl}${movie.poster_path}` :'https://conversationsabouther.net/wp-content/uploads/2015/07/empty-cinema.jpg' }
						alt='movie'
					/>
				</Link>

				<div className='card-body text-center'>
					<h5>{movie.title}</h5>
					<hr />
					<h6 className='mb-3'>
						<span className='text-secondary mr-2'>
							{movie.title}
						</span>
					</h6>
					<p className='text-muted'>
						{movie.title}
					</p>
					<p>
						{movie.overview.length > 60
							? movie.overview.substring(0, 60) + '...'  //!SUBSTRING takes to params starting and ending of caractars
							: movie.overview.substring(0, 60)}
					</p>
					

					{homePage && (
						<>
							<Link
								to={`/movie/${movie.id}`}
								type='button'
								className='btn btn-primary btn-sm mr-1 my-1'
							>
								View Movie
							</Link>
							<button
								type='button'
								className='btn btn-warning btn-sm'
								disabled={movie.title}
								onClick={handleAddToFavorite}
							>
								Add to Favorite
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default MovieCard;

// import React from 'react';

// const MovieCard = ({movies}) => {
// 	const imageUrl = "https://image.tmdb.org/t/p/original";
//   return(
// 	  <>
// 		  {movies.map((ele, index) =>(
// 			  <div className="d-flex justify-content-start m-3" >
// 			     <img src={`${imageUrl}${ele.poster_path}`} alt="movie"></img>
// 			  </div>
// 		  ))}
// 	  </>

//   );
// };

// export default MovieCard;
