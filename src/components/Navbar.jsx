function Navbar({ isDarkMode, onToggleTheme }) {
  return (
    <nav className="nav">
      <div className="nav-logo">Student Directory</div>
      <button className="theme-toggle" onClick={onToggleTheme}>
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  )
}

export default Navbar