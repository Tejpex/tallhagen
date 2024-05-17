import { NavBar } from "../components/NavBar"
import { PackList } from "../components/PackList"
import { PackedList } from "../components/PackedList"
import { EquipmentProvider } from "../contexts/EquipmentContext"
import "./Equipment.css"

export const Equipment = () => {
  return (
    <div>
      <EquipmentProvider>
        <NavBar />
        <div className="main-view">
          <PackList />
          <PackedList />
        </div>
      </EquipmentProvider>
    </div>
  )
}
