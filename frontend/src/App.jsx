import { useState, useEffect } from 'react';
import Header from './components/Header';

function App() {
  const [films, setFilms] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState('catalog');

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchFilms();
  }, [selectedCategory]);

  const fetchFilms = async () => {
    try {
      setLoading(true);
      const url = selectedCategory 
        ? `http://localhost:5000/api/films?category_id=${selectedCategory}`
        : 'http://localhost:5000/api/films';
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Erreur lors du chargement des films');
      const data = await response.json();
      setFilms(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Erreur:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/categories');
      if (!response.ok) throw new Error('Erreur lors du chargement des catégories');
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.error('Erreur catégories:', err);
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header view={view} setView={setView} />

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6">
        {view === 'catalog' && (
          <>
            {/* Filtres */}
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-wrap gap-2">
                <button
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded font-medium transition ${
                    selectedCategory === null 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => handleCategoryChange(null)}
                >
                  Tous
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded font-medium transition ${
                      selectedCategory === cat.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                    onClick={() => handleCategoryChange(cat.id)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Loading */}
            {loading && (
              <div className="flex justify-center py-12 sm:py-20">
                <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-4 border-blue-500 border-t-transparent"></div>
              </div>
            )}

            {/* Erreur */}
            {error && (
              <div className="bg-red-900/50 border border-red-500 text-red-200 px-3 sm:px-4 py-2 sm:py-3 rounded mb-4 text-sm sm:text-base">
                {error}
              </div>
            )}

            {/* Aucun film */}
            {!loading && !error && films.length === 0 && (
              <div className="text-center py-12 sm:py-20">
                <p className="text-gray-400 text-base sm:text-lg">Aucun film trouvé</p>
              </div>
            )}

            {/* Grille de films - RESPONSIVE */}
            {!loading && !error && films.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {films.map(film => (
                  <div 
                    key={film.id} 
                    className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500 transition shadow-lg"
                  >
                    {/* Image */}
                    <div className="aspect-[2/3] bg-gray-700 relative">
                      {film.poster_url ? (
                        <img 
                          src={film.poster_url} 
                          alt={film.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-3xl sm:text-4xl">
                          🎬
                        </div>
                      )}
                      
                      {/* Badges */}
                      <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 right-1.5 sm:right-2 flex justify-between gap-1">
                        {film.release_year && (
                          <span className="bg-black/70 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded whitespace-nowrap">
                            {film.release_year}
                          </span>
                        )}
                        {film.duration && (
                          <span className="bg-blue-600 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded whitespace-nowrap">
                            {film.duration}min
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Titre */}
                    <div className="p-2 sm:p-3">
                      <h3 className="text-white text-xs sm:text-sm font-semibold line-clamp-2 leading-tight">
                        {film.title}
                      </h3>
                      {film.director && (
                        <p className="text-gray-400 text-[10px] sm:text-xs mt-1 truncate">
                          {film.director}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {view === 'mylist' && (
          <div className="text-center py-12 px-4">
            <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">Ma Liste</h1>
            <div className="bg-gray-800 rounded-lg p-4 sm:p-6 max-w-md mx-auto">
              <p className="text-gray-400 text-sm sm:text-base">Fonctionnalité à venir</p>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-950 border-t border-gray-800 py-3 sm:py-4 mt-auto">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">CineTrack © 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;