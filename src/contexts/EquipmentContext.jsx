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
    {
      id: 8,
      name: "T-shirts/ Linnen eller liknande",
      done: false,
      category: "Kläder",
    },
    {
      id: 9,
      name: "Tjockare tröjor",
      done: false,
      category: "Kläder",
    },
    {
      id: 10,
      name: "Jacka efter årstid",
      done: false,
      category: "Kläder",
    },
    {
      id: 11,
      name: "Regnjacka",
      done: false,
      category: "Kläder",
    },
    {
      id: 12,
      name: "Regnbyxor",
      done: false,
      category: "Kläder",
    },
    {
      id: 13,
      name: "Vantar",
      done: false,
      category: "Kläder",
    },
    {
      id: 14,
      name: "Mössa",
      done: false,
      category: "Kläder",
    },
    {
      id: 15,
      name: "Kåsa/mugg",
      done: false,
      category: "Äta",
    },
    {
      id: 16,
      name: "Djup tallrik",
      done: false,
      category: "Äta",
    },
    {
      id: 17,
      name: "Bestick",
      done: false,
      category: "Äta",
    },
    {
      id: 18,
      name: "Diskhandduk",
      done: false,
      category: "Äta",
    },
    {
      id: 19,
      name: "Vattenflaska med vatten",
      done: false,
      category: "Äta",
    },
    {
      id: 20,
      name: "Tandborste",
      done: false,
      category: "Hygien",
    },
    {
      id: 21,
      name: "Tandkräm",
      done: false,
      category: "Hygien",
    },
    {
      id: 22,
      name: "Kam/Hårborste",
      done: false,
      category: "Hygien",
    },
    {
      id: 23,
      name: "Tvål",
      done: false,
      category: "Hygien",
    },
    {
      id: 24,
      name: "Liten handduk",
      done: false,
      category: "Hygien",
    },
  ])
  const [nextId, setNextId] = useState(25)

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
