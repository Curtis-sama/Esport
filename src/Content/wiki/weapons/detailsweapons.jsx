import { useLoaderData } from "react-router-dom"
import Header from "../../../Header";
import Nav from "../nav";

const DetailsWeapons = () => {

  const weapons = useLoaderData()
  console.log(weapons);



const WeaponsDamage = weapons.weaponStats.damageRanges
.map((damage, index) => {
    console.log(damage);
    const dam = damage.rangeStartMeters

  return (
    <div className="toto"key={index}>
      {dam}
    </div>
  )
})

  const WeaponSkin = weapons.skins
    .filter(({ displayIcon }) => displayIcon) // Filtre les erreurs dans l'API 
    .map((skin, index) => {
      const {
        displayName,
        displayIcon
      } = skin
     

      return (
        <div key={index}>
          <div className="name-img-skins">
            {displayName}
            <img className="skins-img" src={displayIcon} />
          </div>

        </div>
      )
    })

  return (
    <>
      <Header />
      <div className="container">
        <Nav />
        <div className="details-page">
          <div className="details-skin">
            <div className="weapons-name">
              {weapons.displayName}
            </div>
              <div className="skin">
                {WeaponSkin}
              </div>
          </div>
          <div className="weapon-img">
            <img src={weapons.displayIcon} />
            <div className="info-weapons">
            {WeaponsDamage}
            </div>
          </div>
        </div>

      </div>
    </>

  )

}



export default DetailsWeapons