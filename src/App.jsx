import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefoultLayout from "./layout/DefoultLayout"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefoultLayout />}>
            <Route path='/' element={<h1>Aggiungere la lista dei viaggi qui!!</h1>} />
            <Route path="/add" element={<h1>Aggiungere il form per i viaggi qui!!</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
