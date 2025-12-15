function FilmCard({ film }) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h2 className="font-bold text-lg">{film.title}</h2>
      {film.description && <p className="text-gray-600">{film.description}</p>}
    </div>
  );
}

export default FilmCard;
