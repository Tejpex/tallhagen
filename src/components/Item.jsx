import PropTypes from "prop-types"
import { useEquipment } from "../contexts/EquipmentContext"
import deleteIcon from "/icon-delete.png"

export const Item = ({ item }) => {
  const { toggleChecked, deleteItem } = useEquipment();

  const toggleDone = () => {
    toggleChecked(item.id);
  }

  return (
    <div className="item-box">
      <div className={item.done ? "item checked" : "item"}>
        <label>
          <div className="checkbox-field">
            <input
              className="checkbox"
              type="checkbox"
              checked={item.done}
              onChange={toggleDone}
              aria-label="checkbox for tasks"
            />
            <span className="checkmark"></span>
          </div>
        </label>
        <p>{item.name}</p>
      </div>
      <button className="delete-button" onClick={() => deleteItem(item.id)}>
        <img className="delete-icon" src={deleteIcon} alt="Delete icon" />
      </button>
    </div>
  )
}

Item.propTypes = PropTypes.obj
