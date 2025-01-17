const Header = () => {
  return (
    <nav className="navbar bg-light-blue">
      <div className="container-fluid">
        <a className="navbar-brand">Random People</a>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default Header;
