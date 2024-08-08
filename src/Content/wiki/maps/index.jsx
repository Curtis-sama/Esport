import Header from "../../../Header"
import Nav from "../nav"
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const InfoMaps = ({ map }) => {
  const [maps, setmaps] = useState(true);
  const { splash, displayName, listViewIcon } = map;
  

  return (
    <div
      className="plan"
      onMouseEnter={() => setmaps(false)}
      onMouseLeave={() => setmaps(true)}
    >
      {maps ? (
        <img className="img" src={splash} alt={`${displayName} icon`} />
      ) : (
        <div className="cardhover">
          <div className="info-name-role">
            <div className="info-name">{displayName}</div>
          </div>
          <img className="imgfeed" src={listViewIcon} alt={`${displayName} portrait`} />
        </div>
      )}
    </div>
  );
};


const Maps = () => {
  const maps = useLoaderData()

  return (
    <>
      <Header />
      <div className="container">
        <Nav />
        <div className="infos">
          {maps
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