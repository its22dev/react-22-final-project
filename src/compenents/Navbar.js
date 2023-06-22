
const Navbar = () => {
  return <>
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">甜點店</a>
        <button className="btn btn-outline-success position-relative" type="submit">
          購物車
          <span className="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">9</span>
        </button>
      </div>
    </nav>
  </>
}


export default Navbar;