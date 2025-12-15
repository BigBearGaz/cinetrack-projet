function Header({ view, setView }) {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          {/* Logo et titre */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <div className="text-2xl sm:text-3xl md:text-4xl flex-shrink-0">🎬</div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold truncate">CineTrack</h1>
              <p className="text-xs sm:text-sm text-blue-100 hidden sm:block">Votre gestionnaire de films</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-2">
            <button
              onClick={() => setView('catalog')}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base font-medium transition-all flex items-center gap-1 whitespace-nowrap ${
                view === 'catalog'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'bg-blue-500 hover:bg-blue-400 text-white'
              }`}
            >
              <span>📚</span>
              <span className="hidden sm:inline">Catalogue</span>
            </button>
            <button
              onClick={() => setView('mylist')}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base font-medium transition-all flex items-center gap-1 whitespace-nowrap ${
                view === 'mylist'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'bg-blue-500 hover:bg-blue-400 text-white'
              }`}
            >
              <span>⭐</span>
              <span className="hidden sm:inline">Ma Liste</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;