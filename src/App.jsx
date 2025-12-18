import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalContext"
import DefoultLayout from "./layout/DefoultLayout"
import HomePage from "./pages/Homepage"
import AddTravel from "./pages/AddTravel"
import DetailTravel from "./pages/DetailsTravel"


function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefoultLayout />}>
              <Route path='/' element={<HomePage />} />
              <Route path="/add" element={<AddTravel />} />
              <Route path="/detail/:id" element={<DetailTravel />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>

    </>
  )
}

export default App
