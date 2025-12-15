function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="mb-6 flex gap-2">
      <button
        className={`px-3 py-1 rounded ${selectedCategory === null ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        onClick={() => onCategoryChange(null)}
      >
        Tous
      </button>

      {categories.map(cat => (
        <button
          key={cat.id}
          className={`px-3 py-1 rounded ${selectedCategory === cat.id ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => onCategoryChange(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
