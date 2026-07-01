function SearchBar({ searchText, onSearchChange }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar