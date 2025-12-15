import { Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

function FilmCard({ film }) {
  return (
    <Link 
      to={`/films/${film.id}`}
      className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500 transition shadow-lg group block"
    >
      {/* Image */}
      <div className="aspect-[2/3] bg-gray-700 relative overflow-hidden">
        {film.poster_url ? (
          <img 
            src={film.poster_url} 
            alt={film.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-3xl sm:text-4xl opacity-40">
            🎬
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 right-1.5 sm:right-2 flex justify-between gap-1">
          {film.release_year && (
            <span className="bg-black/70 backdrop-blur-sm text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded whitespace-nowrap flex items-center gap-1">
              <Calendar size={10} className="hidden sm:inline" />
              {film.release_year}
            </span>
          )}
          {film.duration && (
            <span className="bg-blue-600 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded whitespace-nowrap flex items-center gap-1">
              <Clock size={10} className="hidden sm:inline" />
              {film.duration}min
            </span>
          )}
        </div>

        {/* Overlay au survol avec synopsis */}
        {film.synopsis && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end">
            <p className="text-white text-xs line-clamp-4">
              {film.synopsis}
            </p>
          </div>
        )}
      </div>

      {/* Informations */}
      <div className="p-2 sm:p-3">
        <h3 className="text-white text-xs sm:text-sm font-semibold line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors">
          {film.title}
        </h3>
        {film.director && (
          <p className="text-gray-400 text-[10px] sm:text-xs mt-1 truncate">
            🎬 {film.director}
          </p>
        )}
      </div>
    </Link>
  );
}

export default FilmCard;
