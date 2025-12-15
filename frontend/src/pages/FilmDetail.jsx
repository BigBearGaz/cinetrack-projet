import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';

function FilmDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFilmDetail();
  }, [id]);

  const fetchFilmDetail = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/films/${id}`);
      if (!response.ok) throw new Error('Film non trouvé');
      const data = await response.json();
      setFilm(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error || !film) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error || 'Film non trouvé'}</p>
          <button 
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retour au catalogue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header avec bouton retour AMÉLIORÉ */}
      <div className="bg-gray-950 border-b border-gray-800 py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-lg"
          >
            <ArrowLeft size={20} />
            Retour au catalogue
          </button>
          
          <div className="text-gray-400 text-sm hidden sm:block">
            CineTrack
          </div>
        </div>
      </div>

      {/* Contenu du film */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[300px,1fr] gap-6">
            
            {/* Colonne gauche : Poster */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
              {film.poster_url ? (
                <img 
                  src={film.poster_url} 
                  alt={film.title}
                  className="w-full aspect-[2/3] object-cover"
                />
              ) : (
                <div className="w-full aspect-[2/3] flex items-center justify-center text-6xl opacity-40 bg-gray-700">
                  🎬
                </div>
              )}
            </div>

            {/* Colonne droite : Informations */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {film.title}
              </h1>
              
              {/* Métadonnées */}
              <div className="flex flex-wrap gap-4 mb-6 text-gray-300">
                {film.release_year && (
                  <div className="flex items-center gap-2 bg-gray-700 px-3 py-1.5 rounded">
                    <Calendar size={18} />
                    <span className="font-medium">{film.release_year}</span>
                  </div>
                )}
                
                {film.duration && (
                  <div className="flex items-center gap-2 bg-blue-600 px-3 py-1.5 rounded">
                    <Clock size={18} />
                    <span className="font-medium">{film.duration} min</span>
                  </div>
                )}

                {film.category_name && (
                  <div className="flex items-center gap-2 bg-purple-600 px-3 py-1.5 rounded">
                    <Tag size={18} />
                    <span className="font-medium">{film.category_name}</span>
                  </div>
                )}
              </div>

              {/* Réalisateur */}
              {film.director && (
                <div className="mb-6 flex items-center gap-2 text-gray-300">
                  <User size={18} className="text-gray-400" />
                  <span className="text-gray-400">Réalisé par</span>
                  <span className="text-white font-semibold">{film.director}</span>
                </div>
              )}

              {/* Synopsis */}
              {film.synopsis && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    📖 Synopsis
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-justify">
                    {film.synopsis}
                  </p>
                </div>
              )}

              {/* Date d'ajout */}
              {film.created_at && (
                <div className="text-xs text-gray-500 mt-6 pt-6 border-t border-gray-700">
                  Ajouté le {new Date(film.created_at).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">CineTrack © 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default FilmDetail;
