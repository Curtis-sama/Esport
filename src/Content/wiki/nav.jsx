import { Link } from "react-router-dom"

const Nav = () => {

  return (
    <div className="nav-vertical">
      <Link to="/wiki/agents" className="nav-link">
        {"agents"}
      </Link>
      <Link to="/wiki/maps" className="nav-link">
        {"maps"}
      </Link>
      <Link to="/wiki/weapons" className="nav-link">
        {"weapons"}
      </Link>
    </div>

  )


}


export default Nav