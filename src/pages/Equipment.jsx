import { NavBar } from "../components/NavBar"
import { PackList } from "../components/PackList"
import { PackedList } from "../components/PackedList"
import { AddItem } from "../components/AddItem"
import { EquipmentProvider } from "../contexts/EquipmentContext"
import "./Equipment.css"

export const Equipment = () => {
  return (
    <div>
      <EquipmentProvider>
        <NavBar />
        <PackList />
        <AddItem />
        <PackedList />
      </EquipmentProvider>
    </div>
  )
}
