import React from "react";
import Movies from "./components/Movies";
import mobileBg from './assets/mobile-top-bg2.png'
import desktopBg from './assets/desktop-bot-bg.png'
import Logo from './assets/logo.svg'
import { useEffect, useState } from "react";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=98b8bac4";

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const getMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()

    setMovies(data.Search)
  }

  useEffect(() => {
    getMovies('avengers');
  }, [])


  return (
    <div className="app-container min-h-screen overflow-hidden relative z-10">
      <img src={mobileBg} alt="mobile-bg" className="absolute -right-[100px] md:right-0 top-[180px] md:top-10 min-w-fit -z-10" />
      <img src={desktopBg} alt="desktop-bg" className="absolute -bottom-24 -left-[120px] min-w-fit" />

      <div className="py-6 header flex flex-col md:flex-row md:gap-6 md:px-[200px] items-center justify-center px-8 w-full z-20 fixed">
        <div className="flex items-center mr-14 cursor-pointer">
          <img src={Logo} alt="Logo" className="min-w-16" />
          <h1 className="font-geo text-white text-3xl ml-2">YOKO</h1>
        </div>
        <input placeholder="Search for a movie..." value={search} 
        onKeyPress={e => {
          if (e.key === 'Enter') {
            getMovies(search)
          }
        }}
        onChange={(e) => setSearch(e.target.value)} className="mt-8 md:mt-0 md:ml-auto outline-0 border-2 rounded-lg pl-2  max-w-sm md:min-w-[250px] w-full drop-shadow-[0_2px_2px_rgba(0,0,0,0.12)] font-ibm text-gray-700 py-[6px] text-sm front-medium" />
        <button className="mt-4 md:mt-0 bg-[#B00B1E] rounded-lg py-2 md:py-1 px-4 md:px-7 font-geo font-medium text-sm md:text-xl text-white drop-shadow-[0_2px_2px_rgba(156,90,90,0.25)] border border-[#873E3E] border-opacity-50 button-search" onClick={() => getMovies(search)}>Search</button>
      </div>

      {
        movies?.length > 0
        ? (
          <div className="grid grid-cols-2 gap-6 justify-items-center sm:flex sm:flex-wrap justify-center items-center pb-20 px-4 container mx-auto md:mt-32 mt-[270px]">
            {movies.map((movie) => (
              <Movies key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="mt-[270px] md:mt-32 flex justify-center items-center container font-ibm mx-auto">
            <h1 className="text-white text-3xl">No movies found</h1>
          </div>
        )
      }

    </div>
  );
}

export default App;
