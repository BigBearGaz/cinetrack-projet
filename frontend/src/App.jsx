import { useState, useEffect } from 'react';
import Header from './components/Header';

function App() {
  const [films, setFilms] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState('catalog'); // 'catalog' ou 'mylist'

  // Récupérer films et catégories
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
      console.log('🎬 Films reçus:', data); // log pour debug
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
      console.log('🏷️ Categories reçues:', data); // log pour debug
    } catch (err) {
      console.error('Erreur catégories:', err);
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header view={view} setView={setView} />

      <main className="container mx-auto px-4 py-8">
        {view === 'catalog' && (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Catalogue de Films 🎬
              </h1>
              <p className="text-gray-600">
                Découvrez notre collection de {films.length} films
              </p>
            </div>

            <div className="mb-6">
              <h2 className="font-semibold mb-2">Filtrer par catégorie :</h2>
              <button
                className={`px-3 py-1 rounded mr-2 ${selectedCategory === null ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => handleCategoryChange(null)}
              >
                Tous
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`px-3 py-1 rounded mr-2 ${selectedCategory === cat.id ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {loading && (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                ❌ {error}
              </div>
            )}

            {!loading && !error && films.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Aucun film trouvé dans cette catégorie</p>
              </div>
            )}

            {!loading && !error && films.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {films.map(film => (
                  <div key={film.id} className="border p-4 rounded shadow-sm">
                    <h3 className="font-bold">{film.title}</h3>
                    {film.description && <p className="text-gray-600">{film.description}</p>}
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {view === 'mylist' && (
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Ma Liste 📝
            </h1>
            <p className="text-gray-600 mb-8">
              Votre liste personnelle de films
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 max-w-md mx-auto">
              <p className="text-blue-800 mb-4">
                Cette fonctionnalité sera disponible dans le Sprint 1 - US-05
              </p>
              <p className="text-blue-600 text-sm">
                Vous pourrez bientôt voir tous vos films ajoutés ici !
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            CineTrack © 2024 - Votre gestionnaire de films personnel
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
