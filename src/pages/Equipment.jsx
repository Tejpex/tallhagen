import { NavBar } from "../components/NavBar"
import { PackList } from "../components/PackList"
import { EquipmentProvider } from "../contexts/EquipmentContext"
import "./Equipment.css"
//import { TaskForm } from "./components/TaskForm";

//import { TasksDoneList } from "./components/TasksDoneList";

export const Equipment = () => {
  return (
    <div>
      <EquipmentProvider>
        <NavBar />
        <PackList />
      </EquipmentProvider>
    </div>
  )
}
