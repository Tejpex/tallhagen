import { Item } from "./Item"
import { useEquipment } from "../contexts/EquipmentContext"

export const PackedList = () => {
  const { equipment, resetList } = useEquipment()

  if (equipment.filter((item) => item.done === true).length === 0) {
    return (
      <div className="info-box" id="packed-empty">
        {/*<img src={Fries} alt="Icon of french fries" className="empty-state-pic"/>}*/}
        <p>Här hamnar det du har packat!</p>
      </div>
    )
  } else {
    return (
      <div className="info-box" id="packed-box">
        <h3>Packat</h3>
        {equipment
          .filter((item) => item.done === true)
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}        
        <button className="button" onClick={resetList}>
          Börja om
        </button>
      </div>
    )
  }
}
