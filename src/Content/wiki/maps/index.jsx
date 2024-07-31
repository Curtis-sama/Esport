import Header from "../../../Header"
import Nav from "../nav"
import { useLoaderData } from 'react-router-dom';

const Maps = () => {

  const valoMap = useLoaderData()
  console.log(valoMap);

  const plan = valoMap.map((map, index) => {
    const name = map.name
    const image = map.image_url
    return  <div  key={index} className="plan" >
    <div className="name">{name}</div> {<img src={image} id="i"/> }
  </div>
  })
  
 
  return (
    
    <div>
      <Header />
      <div className="contenair">
      <div className="vertical-nav">
      <Nav/>
      </div>
        <div className="infos">
          {plan}
        </div>
      </div>
    </div>
  )
}


export default Maps