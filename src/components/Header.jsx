const Header = ({query, setQuery}) => {
  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  return (
    <nav className="navbar bg-light-blue">
      <div className="container-fluid">
        <a className="navbar-brand">Random People</a>
        <form className="d-flex" role="search">
          <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={handleChange}></input>
        </form>
      </div>
    </nav>
  )
}

export default Header;
