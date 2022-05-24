import React from 'react'


function Movies({movie}) {
  return (
    <div className="">   
      <div className="w-[170px] sm:w-[220px] h-[268px] sm:h-[318px] overflow-hidden rounded-2xl bg-slate-200 relative hover:scale-110 transition cursor-pointer">
        <div className="absolute bottom-0 w-full py-4 px-2 card-info flex flex-col justify-center items-center font-ibm text-white">
          <p className="text-xs">{movie.Year}</p>
          <h1 className="text-sm md:text-base text-center">{movie.Title}</h1>
        </div>
        <span className="absolute inset-0 bg-[#FF0101] opacity-0 hover:opacity-20 transition"></span>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} className="w-full h-full" />
      </div>
    </div>
  )
}

export default Movies