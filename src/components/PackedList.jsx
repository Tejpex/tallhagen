import { Item } from "./Item"
import { useEquipment } from "../contexts/EquipmentContext"

export const PackedList = () => {
  const { equipment } = useEquipment()

  if (equipment.filter((item) => item.done === true).length === 0) {
    return (
      <div className="empty-state">
        {/*<img src={Fries} alt="Icon of french fries" className="empty-state-pic"/>}*/}
        <p>Här hamnar det du har packat!</p>
      </div>
    )
  } else {
    return (
      <div className="info-box">
        <h3>Packat</h3>
        {equipment
          .filter((item) => item.done === true)
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
        <div className="count-tasks">
          <p>
            Du har packat{" "}
            {equipment.filter((item) => item.done === true).length} saker.
          </p>
         { /*<button className="move-all" onClick={deleteAllDone}>
            Delete all
        </button>*/}
        </div>
      </div>
    )
  }
}
