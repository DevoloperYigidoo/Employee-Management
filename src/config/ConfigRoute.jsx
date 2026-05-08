import { Routes ,Route } from "react-router-dom"
import Register from "../components/auth/Register"
import Home from "../pages/Home"
import Login from "../components/auth/Login"
import ProtectedRoute from "./ProtectedRoute"

function ConfigRoute() {
  return (
    <Routes>
        <Route path='/register' element={<Register />}  />
        <Route path='/login' element={<Login />}  />
        <Route path="/" element={<ProtectedRoute> <Home /></ProtectedRoute>} />
    </Routes>
  )
}

export default ConfigRoute