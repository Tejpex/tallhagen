import { createContext, useContext, useState } from "react"

const EquipmentContext = createContext()

export const EquipmentProvider = ({ children }) => {
  const [equipment, setEquipment] = useState([
    {
      id: 1,
      name: "Sovsäck",
      done: false,
      category: "Sova",
    },
    {
      id: 2,
      name: "Liggunderlag",
      done: false,
      category: "Sova",
    },
    {
      id: 3,
      name: "Pyamas eller liknande",
      done: false,
      category: "Sova",
    },
    {
      id: 4,
      name: "Underkläder (Kalsonger/Trosor + ev. BH)",
      done: false,
      category: "Kläder",
    },
    {
      id: 5,
      name: "Strumpor",
      done: false,
      category: "Kläder",
    },
    {
      id: 6,
      name: "Raggsockar",
      done: false,
      category: "Kläder",
    },
    {
      id: 7,
      name: "Byxor",
      done: false,
      category: "Kläder",
    },


    /* 
        <li>T-shirts/ Linnen eller liknande</li>
        <li>Tjockare tröjor</li>
        <li>Jacka efter årstid</li>
        <li>Regnjacka</li>
        <li>Regnbyxor</li>
        <li>Vantar</li>
        <li>Mössa</li>
      </ul>
      <ul> Äta
        <li>Kåsa/mugg</li>
        <li>Djup tallrik</li>
        <li>Bestick</li>
        <li>Diskhandduk</li>
        <li>Vattenflaska med vatten</li>
      </ul>
      <ul> Hygien
        <li>Tandborste</li>
        <li>Tandkräm</li>
        <li>Kam/Hårborste</li>
        <li>Tvål</li>
  <li>Liten handduk</li>*/

 
  ])
  const [nextId, setNextId] = useState(1)

  const addItem = (newItem) => {
    setEquipment((prevEquipment) => [...prevEquipment, newItem])
    setNextId(nextId + 1)
  }

  const deleteItem = (itemToDelete) => {
    const newEquipment = equipment.filter((item) => item.id !== itemToDelete)
    setEquipment(newEquipment)
  }

  const toggleChecked = (itemId) => {
    setEquipment(
      equipment.map((item) =>
        item.id === itemId ? { ...item, done: !item.done } : item
      )
    )
  }

  const completeAll = () => {
    setEquipment(
      equipment.map((item) =>
      item.done === false ? { ...item, done: true} : item
      )
    )
  }

  /*const resetList = () => {
    const newList = tasks.filter((task) => task.done === false)
    setTasks(newList)
  }*/

  return (
    <EquipmentContext.Provider
      value={{ equipment, nextId, addItem, deleteItem, toggleChecked, completeAll }}
    >
      {children}
    </EquipmentContext.Provider>
  )
}

export const useEquipment = () => useContext(EquipmentContext)
