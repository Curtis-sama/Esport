import Header from "../../../Header"
import Nav from "../nav"
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const InfoMaps = ({ map }) => {
  const [maps, setmaps] = useState(true);
  const name = map.displayName;
  const { splash } = map;
  const { displayIcon } = map;
  const {listViewIcon} = map;
  const {listViewIconTall} = map;
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate({ pathname: `${map.uuid}` });
  // };

  return (
    <div
      className="plan"
      // onClick={handleClick}
      onMouseEnter={() => setmaps(false)}
      onMouseLeave={() => setmaps(true)}
    >
      {maps ? (
        <img className="img" src={splash} alt={`${name} icon`} />
      ) : (
        <div className="cardhover">
          <div className="info-name-role">
            <div className="info-name">{name}</div>
          </div>
          <img className="imgfeed" src={listViewIcon} alt={`${name} portrait`} />
        </div>
      )}
    </div>
  );
};


const Maps = () => {
  const mapp = useLoaderData()
  console.log(mapp);
 
  return(
  <>
      <Header />
      <div className="container">
        <Nav />
        <div className="infos">
          {mapp
          .filter(({ displayIcon }) => displayIcon) // Filtre les erreurs dans l'API 
          .map((map, index) => {
              return <InfoMaps key={index} map={map} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Maps