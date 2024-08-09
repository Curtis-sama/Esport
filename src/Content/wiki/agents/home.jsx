import { useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const CardAgents = ({ agent }) => {
  const [change, setChange] = useState(true);
  const name = agent.displayName;
  const { displayIcon } = agent;
  const role = agent.role.displayName;
  const { killfeedPortrait } = agent;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ pathname: `/wiki/agents/${agent.uuid}` });
  };

  return (
    <div
      className="card"
      onClick={handleClick}
      onMouseEnter={() => setChange(false)}
      onMouseLeave={() => setChange(true)}
    >
      {change ? (
        <img className="img" src={displayIcon} alt={`${name} icon`} />
      ) : (
        <div className="cardhover">
          <div className="info-name-role">
            <div className="info-name">{name}</div>
            <div>{role}</div>
          </div>
          <img className="imgfeed" src={killfeedPortrait} alt={`${name} portrait`} />
        </div>
      )}
    </div>
  );
};


const HomeAgents = ({}) => {
  const agents = useOutletContext()
  

  return (
    <div className="infos">
      {agents
        .filter(({ fullPortrait }) => fullPortrait) // Filtre les doublons de l'API 
        .map((agent, index) => {
          return <CardAgents key={index} agent={agent} />;
        })}
    </div> 
  )
}

export default HomeAgents