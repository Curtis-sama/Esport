import Header from "../../../Header"
import Nav from "../nav"
import { useLoaderData } from 'react-router-dom';

const Weapons = () =>{
const valoWeapons = useLoaderData()

const arms = valoWeapons.map((weapon, index) => {
  const name = weapon.name
  const image = weapon.image_url

  return (
    <div key={index}>
      <div className="name">
        {name}
      </div>
      <div className="arms" >
    {<img className="img"src={image} />}
  </div>
  </div>
  )
})

  return (
    <>
    <Header />
    <div className="container">
    <div className="vertical-nav">
    <Nav/>
    </div>
    <div className="infos">
      {arms}
    </div>
    </div>
  </>
  )
}


export default Weapons