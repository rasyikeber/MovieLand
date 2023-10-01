import React, { useState, useEffect } from "react";
import MovieCard from './MovieCard';
import './App.css'
import searchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=43d74137';
// const API_URL = 'https://cors-anywhere.herokuapp.com/http://www.omdbapi.com?apikey=43d74137';


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredMovies([]);
    } else {
      const filtered = movies.filter(movie =>
        movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [searchTerm, movies]);

  return (
    <div className='app'>
      <h1>Movie Land</h1>
      <div className='search'>
        <input
          placeholder='search for movie'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {(filteredMovies.length > 0 || searchTerm.trim() === "") ? (
        <div className='container'>
          {filteredMovies.length > 0
            ? filteredMovies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))
            : movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
        </div>
      ) : (
        <div className="empty">
          <h2>no movie found</h2>
        </div>
      )}
    </div>
  );
}

export default App;






// import React, { useState, useEffect } from "react";
// import MovieCard from './MovieCard';
// import './App.css'
// import searchIcon from './search.svg'

// const API_URL = 'http://www.omdbapi.com?apikey=43d74137';

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [filteredMovies, setFilteredMovies] = useState([]);

//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();

//     setMovies(data.Search);
//   }

//   useEffect(() => {
//     searchMovies('spiderman');
//   }, []);

//   useEffect(() => {
//     if (searchTerm.trim() === "") {
//       setFilteredMovies([]);
//     } else {
//       const filtered = movies.filter(movie =>
//         movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredMovies(filtered);
//     }
//   }, [searchTerm, movies]);

//   return (
//     <div className='app'>
//       <h1>Movie Land</h1>
//       <div className='search'>
//         <input
//           placeholder='search for movie'
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <img
//           src={searchIcon}
//           alt='search'
//           onClick={() => searchMovies(searchTerm)}
//         />
//       </div>
//       {filteredMovies.length > 0 ? (
//         <div className='container'>
//           {filteredMovies.map((movie) => (
//             <MovieCard key={movie.imdbID} movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <h2>no movie found</h2>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
















// import React, { useState, useEffect } from "react";

// import MovieCard from './MovieCard';

// import './App.css'
// import searchIcon from './search.svg'

// const API_URL ='http://www.omdbapi.com?apikey=43d74137';








// const App = () => {

//     const [searchTerm, setSearchTerm] = useState("");
//     const [movies, setMovies] = useState([]);

//    const searchMovies = async(title)=> {
//     const response =await fetch(`${API_URL}&s=${title}`);
//     const data= await response.json();

//     setMovies(data.Search);
//    }

//     useEffect( ()=> {
//     searchMovies('spiderman');
//     }, []);


//     return(
//       <div className='app'>
//         <h1>Movie Land</h1>
//         <div className='search'>
//             <input
//             placeholder='search for movie'
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <img
//             src={searchIcon}
//             alt='search'
//             onClick={() => searchMovies(searchTerm)}
//             />
//             </div>
//             {
//                 movies?.length >0 ? (


//             <div className='container'>
//               { movies.map((movie)=> (
//                 <MovieCard movie={movie} />
//               ))}
//             </div>
//                 ): (
//                     <div className="empty">
//                         <h2>no movie found</h2>
//                     </div>
//                 )
//             }
        
//       </div>
//     );
// }
// export default App;
