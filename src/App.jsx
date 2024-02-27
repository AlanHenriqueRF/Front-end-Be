import { BrowserRouter, Routes, Route } from "react-router-dom"
import EmployesPage from "./pages/EmployesPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmployesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
