import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefoultLayout from "./layout/DefoultLayout"
import HomePage from "./pages/Homepage"
import AddTravel from "./pages/AddTravel"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefoultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path="/add" element={<AddTravel />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
