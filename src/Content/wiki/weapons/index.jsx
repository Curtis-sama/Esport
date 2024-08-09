import Header from "../../../Header"
import Nav from "../nav"
import { useLoaderData } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";


const InfoWeapons = ({ weapon }) => {
  const name = weapon.displayName;
  const { displayIcon } = weapon;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ pathname: `/wiki/weapons/${weapon.uuid}` });
  };

  return (
    <div
      className="arms"
      onClick={handleClick}
    >
      <div>
        {name}
      </div>
      <img className="img-weapons" src={displayIcon} alt={`${name} icon`} />
    </div>
  );
};


const Weapons = () => {
  const weapons = useLoaderData()
  console.log(weapons);



  return (
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