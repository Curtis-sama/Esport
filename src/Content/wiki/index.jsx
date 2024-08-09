import Header from "../../Header";
import { Link } from "react-router-dom";


const Wiki = () => {
  

  return (
    <div className="page">
      <Header />
        <div className="contentLinks">
          <Link to="/wiki/agents/home" className="links">
            agents
          </Link>
          <Link to="/wiki/maps" className="links">
            cartes
          </Link>
          <Link to="/wiki/weapons/home" className="links">
            armes
          </Link>
        </div>
    </div>
  )
}

export default Wiki