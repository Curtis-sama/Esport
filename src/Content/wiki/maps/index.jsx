import Header from "../../../Header"
import Nav from "../nav"
import { useLoaderData } from 'react-router-dom';

const Maps = () => {
  const valoMap = useLoaderData()

  const plan = valoMap.map((map, index) => {
    const name = map.name
    const image = map.image_url
    return (
      <div key={index}>
        <div className="name">
          {name}
        </div>
        <div  className="plan" >
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
          <Nav />
        </div>
        <div className="infos">
          {plan}
        </div>
      </div>
    </>
  )
}


export default Maps