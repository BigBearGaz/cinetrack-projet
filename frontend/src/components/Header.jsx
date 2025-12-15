function Header({ view, setView }) {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-4xl">🎬</div>
            <div>
              <h1 className="text-2xl font-bold">CineTrack</h1>
              <p className="text-sm text-blue-100">Votre gestionnaire de films</p>
            </div>
          </div>

          <nav className="flex space-x-2">
            <button
              onClick={() => setView('catalog')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                view === 'catalog'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'bg-blue-500 hover:bg-blue-400 text-white'
              }`}
            >
              📚 Catalogue
            </button>
            <button
              onClick={() => setView('mylist')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                view === 'mylist'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'bg-blue-500 hover:bg-blue-400 text-white'
              }`}
            >
              ⭐ Ma Liste
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;