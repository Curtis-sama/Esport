import { Link, useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

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


const HomeWeapons = ({}) => {
  const weapons = useOutletContext()
  

  return (
    <div className="infos">
          {weapons
            .map((weapon, index) => {
              return <InfoWeapons key={index} weapon={weapon} />;
            })}
        </div>
  )
}

export default HomeWeapons