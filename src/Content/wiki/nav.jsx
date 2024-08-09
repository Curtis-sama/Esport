import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const AgentsList = ({ infos }) => {
  const navigate = useNavigate();
  const {displayName} = infos
  const handleClick = () => {
    navigate({ pathname: `/wiki/agents/${infos.uuid}` });
  };
return (
  <div className="texte" onClick={handleClick}>{displayName}</div>
)

}

const WeaponsList = ({ infos }) => {
  const navigate = useNavigate();
  const {displayName} = infos
  const handleClick = () => {
    navigate({ pathname: `/wiki/weapons/${infos.uuid}` });
  };


return (
  <div className="texte" onClick={handleClick}>{displayName}</div>
)

 
}



const Nav = ({ agents, weapons, maps }) => { // récupérer les agents et les armes

  return (
    <div className="nav-vertical">
      <Link to="/wiki/agents/home" className="nav-link">
        agents
      </Link>
      {agents && agents.map((infos, index) => {
        return <AgentsList key={index} infos={infos}/>
      })} 
      {/* créer composant avec liste déroulante */}
      
      <Link to="/wiki/maps" className="nav-link">
        cartes
      </Link>

      <Link to="/wiki/weapons/home" className="nav-link">
        armes
      {/* j'affiche la liste que si mes armes existe en paramètre */}
      </Link>
      {weapons && weapons.map((infos, index) => {
        return <WeaponsList key={index} infos={infos}/>
      })} 
    </div>
  )
}


export default Nav