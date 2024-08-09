import { useLoaderData, useOutletContext, useParams } from "react-router-dom"


const WeaponsDamage = ({ damage }) => {

  const damageStart = damage.rangeStartMeters
  const damageEnd = damage.rangeEndMeters
  const { bodyDamage, headDamage, legDamage } = damage

  return (
    <div className="damage-stat" >
      <div className="distance-damage">distance: {damageStart}/{damageEnd}m</div>
      <div>dégâts tête: {headDamage}</div>
      <div> dégâts corps: {bodyDamage}</div>
      <div>dégâts jambes: {legDamage}</div>
    </div>
  )
}


const WeaponSkin = ({ skin }) => {

  const {
    displayName,
    displayIcon
  } = skin

  return (
    <div className="name-img-skins">
      {displayName}
      <img className="skins-img" src={displayIcon} />
    </div>
    // TODO: nouveau composant
  )
}


const DetailsWeapons = () => {

  const allWeapons = useOutletContext()
  const { uuid } = useParams()
  const weapon = allWeapons.find((weapon) => weapon.uuid === uuid)

  return (
    <>
      <div className="details-page">
        <div className="details-skin">
          <div className="weapons-name">
            {weapon.displayName}
          </div>
          <div className="skin">
            {weapon.skins
              .filter(({ contentTierUuid, displayIcon }) => contentTierUuid && displayIcon) // Filtre les erreurs dans l'API 
              .map((skin, index) => {
                return <WeaponSkin key={index} skin={skin} />
              })
            }
          </div>
        </div>
      </div>
      <div className="info-weapons">
        <img className="image-weapon" src={weapon.displayIcon} />
        <div className="stats">
          {
            weapon.weaponStats.damageRanges
              .map((damage, index) => {
                return <WeaponsDamage key={index} damage={damage} />
              }
              )}
        </div>
      </div>
    </>
  )
}



export default DetailsWeapons