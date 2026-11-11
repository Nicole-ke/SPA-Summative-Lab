function SearchBar({ search, setSearch }) {
  return (
    <div className="search-wrapper">
      <input
        className="search-bar"
        type="text"
        placeholder="Search Projects"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;