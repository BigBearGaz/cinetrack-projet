import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import FilmCard from './components/FilmCard';
import FilmDetail from './pages/FilmDetail';

function CatalogPage() {
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
      if (!response.ok) throw new Error('Erreur');
      const data = await response.json();
      setFilms(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/categories');
      if (!response.ok) throw new Error('Erreur');
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header view={view} setView={setView} />
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm rounded font-medium transition ${
                selectedCategory === null ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              Tous
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm rounded font-medium transition ${
                  selectedCategory === cat.id ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        )}

        {error && <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded mb-4">{error}</div>}

        {!loading && !error && films.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {films.map(film => (
              <FilmCard key={film.id} film={film} />
            ))}
          </div>
        )}
      </main>
      <footer className="bg-gray-950 border-t border-gray-800 py-3 mt-auto">
        <p className="text-gray-500 text-xs text-center">CineTrack © 2025</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<CatalogPage />} />
      <Route path="/films/:id" element={<FilmDetail />} />
    </Routes>
  );
}

export default App;
