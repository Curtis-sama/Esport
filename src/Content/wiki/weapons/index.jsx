import Header from "../../../Header"
import Nav from "../nav"
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const InfoWeapons = ({ weapon }) => {
  const [weapons, setweapons] = useState(true);
  const name = weapon.displayName;
  const { displayIcon } = weapon;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ pathname: `${weapon.uuid}` });
  };

  return (
    <div
      className="arms"
      onClick={handleClick}
      onMouseEnter={() => setweapons(false)}
      onMouseLeave={() => setweapons(true)}
    >
      {weapons ? (
        <img className="img" src={displayIcon} alt={`${name} icon`} />
      ) : (
        <div className="cardhover">
          <div className="info-name-role">
            <div className="info-name">{name}</div>
          </div>
          <img className="imgfeed" src={''} alt={`${name} portrait`} />
        </div>
      )}
    </div>
  );
};


const Weapons = () =>{
const weapons = useLoaderData()
console.log(weapons);

return(
  <>
      <Header />
      <div className="container">
        <Nav />
        <div className="infos">
          {weapons
          
          .map((weapon, index) => {
              return <InfoWeapons key={index} weapon={weapon} />;
            })}
        </div>
      </div>
    </>
  );

};
export default Weapons