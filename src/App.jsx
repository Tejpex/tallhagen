import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { Equipment } from "./pages/Equipment"
import { SignUpInfo } from "./pages/SignUpInfo"
import './App.css'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/packning" element={<Equipment />} />
          <Route path="/sign-up" element={<SignUpInfo />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
