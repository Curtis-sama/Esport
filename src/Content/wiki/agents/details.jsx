import { useLoaderData } from "react-router-dom";
import Header from "../../../Header";
import Nav from "../nav";

const Details = () => {
  const agent = useLoaderData()
  const { bustPortrait } = agent;
  console.log(agent);
  console.log(bustPortrait)

  return (
    <>
      <Header />
      <div className="container">
        <Nav />
        <div className="info">
          <div className="details-agent">
            <div className="agent-name">
              {agent.displayName}
            </div>
            <div className="details-agent-description">
              {agent.description}
            </div>
            <div className="abilities">

              <div className="abilities1">
                <div className="name-img-abilities">
                  {agent.abilities[0].displayName}
                  <img className="abilities-img" src={agent.abilities[0].displayIcon} />
                </div>
                <div className="description-abilities">
                  {agent.abilities[0].description}
                </div>
              </div>

              <div className="abilities2">
                <div className="name-img-abilities">
                  {agent.abilities[1].displayName}
                  <img className="abilities-img" src={agent.abilities[1].displayIcon} />
                </div>
                <div className="description-abilities">
                  {agent.abilities[1].description}
                </div>
              </div>

              <div className="abilities3">
                <div className="name-img-abilities">
                  {agent.abilities[2].displayName}
                  <img className="abilities-img" src={agent.abilities[2].displayIcon} />
                </div>
                <div className="description-abilities">
                  {agent.abilities[2].description}
                </div>
              </div>

              <div className="abilities4">
                <div className="name-img-abilities">
                  {agent.abilities[3].displayName}
                  <img className="abilities-img" src={agent.abilities[3].displayIcon} />
                </div>
                <div className="description-abilities">
                  {agent.abilities[3].description}
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="imgagent">
          <img className="image" src={bustPortrait} />
        </div>
      </div>

    </>

  )

}

export default Details