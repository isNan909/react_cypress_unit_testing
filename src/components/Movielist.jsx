import { useState } from 'react';

function Movielist() {
	const [userInput, setUserInput] = useState('');
	const [movieList, setMovieList] = useState('');

	const handleChange = (e) => {
		setUserInput(e.currentTarget.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const movieListCopy = [...movieList, { id: movieList.length + 1, movie: userInput, seen: false }];
		setMovieList(movieListCopy);
		setUserInput("");
	}

	const handleClick = (e) => {
		const id = e.currentTarget.id
		let markSeen = movieList.map(m => {
			return m.id === Number(id) ? { ...m, seen: !m.seen } : { ...m };
		});
		setMovieList(markSeen);
		console.log(movieList);
	}

	const handleSeen = () => {
		let filteredMovies = movieList.filter(m => {
			return !m.seen;
		});
		setMovieList(filteredMovies);
	}

	return (
		<div className="wrapper">
			<form onSubmit={handleSubmit}>
				<input value={userInput} type="text" onChange={handleChange} placeholder="Movie wishlist" />
				<button>+Add movies</button>
			</form>
			<div className="movieList">
				{!movieList && <span class="empty">No movies here</span>}
				<ul>
					{movieList && movieList.map(m => {
						return (
							<li onClick={handleClick} className={m.seen ? "strike movie-list" : "movie-list"} id={m.id} key={m.id}>
								<span>
									{m.movie}
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
										<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
										<path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
									</svg>
								</span>
							</li>
						)
					})}
				</ul>
			</div>
			{movieList.length > 0 && <><button className="outline-btn" onClick={handleSeen}>Clear seen movies</button></>}
		</div>
	)
}

export default Movielist