import { useLoaderData } from "react-router-dom";
import Header from "../../../Header";
import Nav from "../nav";

const Details = () => {
  const agent = useLoaderData()
  const { bustPortrait } = agent;

  console.log(agent);

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
    <>
      <Header />
      <div className="container">
        <Nav />
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

      </div>
    </>

  )

}

export default Details