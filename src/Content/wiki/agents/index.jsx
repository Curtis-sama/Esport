import Header from "../../../Header"
import Nav from "../nav"
import { useLoaderData } from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"


const CardAgents = ({ agent }) => {
  const [change, setChange] = useState(true)
  const name = agent.displayName
  const { displayIcon } = agent
  const role = agent.role.displayName
  const { killfeedPortrait } = agent

  return (
    <div className="card"
      onMouseEnter={() => setChange(false)}
      onMouseLeave={() => setChange(true)}>
        {
        change
        ? 
          <img className="img" src={displayIcon} />
        : 
          <div className="cardhover">
            <div className="info-name-role">
              <div className="info-name">{name}</div> <div>{role}</div>
            </div>
            <img className="imgfeed" src={killfeedPortrait} />
          </div>
      }
    
    </div>
  )
}

const Agents = () => {
  const agents = useLoaderData()
  console.log(agents);

  return (
    <>
      <Header />
      <div className="container">
        <div className="vertical-nav">
          <Nav />
        </div>
        <div className="infos">
          {agents
            .filter(({ fullPortrait }) => fullPortrait)
            .map((agent, index) => {
              return <CardAgents key={index} agent={agent} />
            })
          }
        </div>
      </div>
    </>
  )

}


export default Agents