import { useLoaderData } from "react-router-dom"
import Header from "../../../Header";
import Nav from "../nav";






const DetailsWeapons = () => {

  const weapons = useLoaderData()
  console.log(weapons);
  

  const WeaponsDamage = weapons.weaponStats.damageRanges
    .map((damage, index) => {
      console.log(damage);
      const damageStart = damage.rangeStartMeters
      const damageEnd = damage.rangeEndMeters
      const {bodyDamage} = damage
      const {headDamage} = damage
      const {legDamage} = damage

      return (
        <div className="damage-stat" key={index}>
          <div className="distance-damage">distance: {damageStart}/{damageEnd}m</div>
          <div>dégât tête: {headDamage}</div>
          <div> dégât corps: {bodyDamage}</div>
          <div>dégât jambes: {legDamage}</div>
         
        </div>
      )
    })

  const WeaponSkin = 
  weapons.skins
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
        </div>
      </div>
      <div className="info-weapons">
        <img className="image-weapon" src={weapons.displayIcon} />
        <div className="stats">
          {WeaponsDamage}
        </div>
      </div>
    </>

  )

}



export default DetailsWeapons