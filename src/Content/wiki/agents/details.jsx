import { useOutletContext, useParams } from "react-router-dom";

const AgentAbilities = ({ ability }) => {
  if (!ability) {
    return
  }

  const {
    displayName,
    description,
    displayIcon
  } = ability

  return (
    <div className="content-abilities">
      <div className="name-img-abilities">
        {displayName}
        <img className="abilities-img" src={displayIcon} />
      </div>
      <div className="description-abilities">
        {description}
      </div>
    </div>
  )
}

const Details = () => {
  const allAgents = useOutletContext()
  const { uuid } = useParams();
  const agent = allAgents.find((agent) => agent.uuid === uuid)

  const { bustPortrait } = agent;

  return (
    <div className="details">
      <div className="details-agent">
        <div className="agent-name">
          {agent.displayName}
        </div>
        <div className="details-description-abilities">
          <div className="details-agent-description">
            {agent.description}
          </div>
          <div className="abilities">
            {
              agent.abilities.map((ability, index) => {
                return <AgentAbilities key={index} ability={ability} />
              }
            )
            }
            <AgentAbilities agent={agent} />
          </div>
        </div>
      </div>
      <div className="img-agent">
        <img className="image" src={bustPortrait} />
        <img className="abilities-background" src={agent.background} />
      </div>
    </div>
  )
}

export default Details