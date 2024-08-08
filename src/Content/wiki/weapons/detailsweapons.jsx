import { useLoaderData } from "react-router-dom"
import Header from "../../../Header";
import Nav from "../nav";

const DetailsWeapons = () => {

  const weapons = useLoaderData()

  const WeaponsDamage = weapons.weaponStats.damageRanges // TODO: nouveau composant
    .map((damage, index) => {
      const damageStart = damage.rangeStartMeters
      const damageEnd = damage.rangeEndMeters
      const { bodyDamage, headDamage, legDamage } = damage
      

      return (
        <div className="damage-stat" key={index}>
          <div className="distance-damage">distance: {damageStart}/{damageEnd}m</div>
          <div>dégâts tête: {headDamage}</div>
          <div> dégâts corps: {bodyDamage}</div>
          <div>dégâts jambes: {legDamage}</div>
        </div>
      )
    })

  const weaponSkin = weapons.skins // TODO: nouveau composant
    .filter(({ contentTierUuid, displayIcon }) => contentTierUuid && displayIcon) // Filtre les erreurs dans l'API 
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
              {weaponSkin}
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