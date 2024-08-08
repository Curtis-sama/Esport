import { useLoaderData } from "react-router-dom";



const Details = () => {
  const agent = useLoaderData()
  const { bustPortrait } = agent;

  const abi = agent.abilities.map((abilitie, index) => {
    const {
      displayName,
      description,
      displayIcon
    } = abilitie

    return (
      <div className="content-abilities" key={index}>
        <div className="name-img-abilities">
          {displayName}
          <img className="abilities-img" src={displayIcon} />
        </div>
        <div className="description-abilities">
          {description}
        </div>
      </div>
    )
  })

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
            {abi}
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