import { useState } from "react"
import { useEquipment } from "../contexts/EquipmentContext"
import addIcon from "/icon-add.png"

export const AddItem = () => {
  const { nextId, addItem } = useEquipment()
  const [newItem, setNewItem] = useState({
    id: null,
    name: "",
    done: false,
    category: "",
  })

  const handleChange = (event) => {
    setNewItem({
      ...newItem,
      name: event.target.value,
      id: nextId,
      done: false,
      category: "My own",
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newItem.name) {
      addItem(newItem)
      setNewItem({ id: null, name: "" })
    } else {
      alert("Skriv något innan du kan lägga till det.")
    }
  }

  return (
    <div className="item-form">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <input
            className="input-field"
            type="text"
            name="item"
            value={newItem.name}
            onChange={handleChange}
            placeholder="Lägg till något på listan..."
          />
        </label>
        <button
          type="submit"
          className="submit-button"
          aria-label="Button to add item"
        >
          <img className="add-icon" src={addIcon} alt="Add item icon" />
        </button>
      </form>
    </div>
  )
}
