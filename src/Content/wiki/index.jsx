import Header from "../../Header";
import { Outlet, useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";


const Wiki = () => {
  const valoAbilities = useLoaderData()
  // console.log(valoAbilities);

  // const valo = valoAbilities.map((abilitie, index) => {
  //   const name = abilitie.name
  //   return <div key={index}>{name} </div>
  // })
  return (
    <div className="page">
      <Header />
      <div className="aaa">
        <div className="contentLinks">
          <Link to="/wiki/maps" className="links">
            {"maps"}
          </Link>
          <Link to="/wiki/agents" className="links">
            {"agents"}
          </Link>
          <Link to="/wiki/weapons" className="links">
            {"weapons"}
          </Link>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default Wiki