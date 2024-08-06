import Header from "../../Header";
import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";


const Wiki = () => {
  

  return (
    <div className="page">
      <Header />
        <div className="contentLinks">
          <Link to="/wiki/agents" className="links">
            {"agents"}
          </Link>
          <Link to="/wiki/maps" className="links">
            {"maps"}
          </Link>
          <Link to="/wiki/weapons" className="links">
            {"weapons"}
          </Link>
        </div>
    </div>
  )
}

export default Wiki