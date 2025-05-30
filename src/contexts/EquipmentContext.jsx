import { createContext, useContext, useState } from "react"

const EquipmentContext = createContext()

const list = [
  //Sova 1-9
  {
    id: 1,
    name: "Sovsäck",
    done: false,
    category: "Sova",
    hike: true
  },
  {
    id: 2,
    name: "Liggunderlag",
    done: false,
    category: "Sova",
    hike: true
  },
  {
    id: 3,
    name: "Pyamas eller liknande",
    done: false,
    category: "Sova",
    hike: true
  },
  //Extra-sov (1-10)
  {
    id: 4,
    name: "Kudde",
    done: false,
    category: "Extra-sov",
  },
  {
    id: 5,
    name: "Sovsäckslakan",
    done: false,
    category: "Extra-sov",
    hike: false
  },
  {
    id: 6,
    name: "Gosedjur",
    done: false,
    category: "Extra-sov",
  },
  //Kläder 10-30
  {
    id: 10,
    name: "Scoutskjorta (om du har)",
    done: false,
    category: "Kläder",
    hike: true
  },
  {
    id: 11,
    name: "Scouthalsduk + Sölja (om du har)",
    done: false,
    category: "Kläder",
    hike: true
  },
  {
    id: 12,
    name: "Underkläder (Kalsonger/Trosor + ev. BH)",
    done: false,
    category: "Kläder",
    hike: true
  },
  {
    id: 13,
    name: "Strumpor",
    done: false,
    category: "Kläder",
    hike: true
  },
  {
    id: 14,
    name: "Byxor",
    done: false,
    category: "Kläder",
    hike: true
  },
  {
    id: 15,
    name: "T-shirts/ Linnen eller liknande",
    done: false,
    category: "Kläder",
    hike: true
  },
  {
    id: 16,
    name: "Tjockare tröjor",
    done: false,
    category: "Kläder",
    hike: true
  },
  {
    id: 17,
    name: "Jacka efter årstid",
    done: false,
    category: "Kläder",
    hike: true
  },
  {
    id: 18,
    name: "Regnjacka",
    done: false,
    category: "Kläder",
    hike: true
  },
  {
    id: 19,
    name: "Regnbyxor",
    done: false,
    category: "Kläder",
    hike: true
  },
  //Extra-kläder (10-29)
  {
    id: 20,
    name: "Vantar",
    done: false,
    category: "Extra-kläder",
    hike: true
  },
  {
    id: 21,
    name: "Mössa",
    done: false,
    category: "Extra-kläder",
    hike: true
  },
  {
    id: 22,
    name: "Halsduk",
    done: false,
    category: "Extra-kläder",
  },
  {
    id: 23,
    name: "Långkalsonger/underställ",
    done: false,
    category: "Extra-kläder",
    hike: true
  },
  {
    id: 24,
    name: "Raggsockar",
    done: false,
    category: "Extra-kläder",
    hike: true
  },
  //Äta 30-39
  {
    id: 30,
    name: "Kåsa/mugg",
    done: false,
    category: "Äta",
    hike: true
  },
  {
    id: 31,
    name: "Djup tallrik",
    done: false,
    category: "Äta",
    hike: true
  },
  {
    id: 32,
    name: "Bestick",
    done: false,
    category: "Äta",
    hike: true
  },
  {
    id: 33,
    name: "Diskhandduk",
    done: false,
    category: "Äta",
    hike: true
  },
  {
    id: 34,
    name: "Vattenflaska med vatten - minst 3 liter",
    done: false,
    category: "Äta",
    hike: true
  },
  {
    id: 35,
    name: "Påse att förvara dina matsaker i",
    done: false,
    category: "Äta",
    hike: true
  },
  //Hygien 40-59
  {
    id: 40,
    name: "Tandborste",
    done: false,
    category: "Hygien",
    hike: true
  },
  {
    id: 41,
    name: "Tandkräm",
    done: false,
    category: "Hygien",
    hike: true
  },
  {
    id: 42,
    name: "Kam/Hårborste",
    done: false,
    category: "Hygien",
    hike: true
  },
  {
    id: 43,
    name: "Tvål",
    done: false,
    category: "Hygien",
    hike: false
  },
  {
    id: 44,
    name: "Liten handduk",
    done: false,
    category: "Hygien",
    hike: true
  },
  {
    id: 45,
    name: "Mediciner",
    done: false,
    category: "Vid behov",
    hike: true
  },
  {
    id: 46,
    name: "Deodorant",
    done: false,
    category: "Vid behov",
    hike: true
  },
  {
    id: 47,
    name: "Hudlotion",
    done: false,
    category: "Vid behov",
    hike: true
  },
  {
    id: 48,
    name: "Trosskydd/Mensskydd",
    done: false,
    category: "Vid behov",
    hike: true
  },
  {
    id: 49,
    name: "Hårsnoddar/-spännen",
    done: false,
    category: "Vid behov",
    hike: true
  },
  {
    id: 50,
    name: "Skavsårsplåster",
    done: false,
    category: "Vid behov",
    hike: true
  },
  //Övrigt 60-69
  {
    id: 60,
    name: "Penna + Papper",
    done: false,
    category: "Övrigt",
  },
  {
    id: 61,
    name: "Kniv (om du har knivbevis)",
    done: false,
    category: "Övrigt",
    hike: true
  },
  //Om du vill 70-79
  {
    id: 70,
    name: "Ficklampa",
    done: false,
    category: "Om du vill",
    hike: true
  },
  {
    id: 71,
    name: "Kamera",
    done: false,
    category: "Om du vill",
    hike: false
  },
  {
    id: 72,
    name: "Sittunderlag",
    done: false,
    category: "Om du vill",
  },
  {
    id: 73,
    name: "Arbetshandskar",
    done: false,
    category: "Om du vill",
  },
  {
    id: 74,
    name: "Lägerbålsfilt",
    done: false,
    category: "Om du vill",
  },
  {
    id: 75,
    name: "Godis",
    done: false,
    category: "Om du vill",
    hike: true
  },
  {
    id: 76,
    name: "Mobiltelefon",
    done: false,
    category: "Om du vill",
    hike: true
  },
  {
    id: 77,
    name: "Powerbank",
    done: false,
    category: "Om du vill",
    hike: true
  },
  //Sommarsaker 80-89
  {
    id: 80,
    name: "Shorts eller Kjol",
    done: false,
    category: "Sommarsaker",
    hike: true
  },
  {
    id: 81,
    name: "Sandaler eller liknande",
    done: false,
    category: "Sommarsaker",
  },
  {
    id: 82,
    name: "Solhatt/keps",
    done: false,
    category: "Sommarsaker",
    hike: true
  },
  {
    id: 83,
    name: "Myggmedel",
    done: false,
    category: "Sommarsaker",
    hike: true
  },
  {
    id: 84,
    name: "Solkräm",
    done: false,
    category: "Sommarsaker",
    hike: true
  },
  {
    id: 85,
    name: "Badkläder",
    done: false,
    category: "Sommarsaker",
  },
  {
    id: 86,
    name: "Badhandduk",
    done: false,
    category: "Sommarsaker",
  },
  //Skor 90-99
  {
    id: 90,
    name: "Kängor/skor att leka ute i, som passar årstiden",
    done: false,
    category: "Skor",
    hike: true
  },
  {
    id: 91,
    name: "Gummistövlar",
    done: false,
    category: "Skor",
  },
  //Väskor 100-109 Packa i: Stor ryggsäck/Bag
  {
    id: 100,
    name: "Stor ryggsäck",
    done: false,
    category: "Väskor",
    hike: true
  },
  {
    id: 101,
    name: "Liten ryggsäck",
    done: false,
    category: "Väskor",
  },
];

export const EquipmentProvider = ({ children }) => {
  const [equipment, setEquipment] = useState(list)
  const [nextId, setNextId] = useState(110)

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

  const resetList = () => {
    setEquipment(list)
  }

  return (
    <EquipmentContext.Provider
      value={{ equipment, nextId, addItem, deleteItem, toggleChecked, completeAll, resetList }}
    >
      {children}
    </EquipmentContext.Provider>
  )
}

export const useEquipment = () => useContext(EquipmentContext)
