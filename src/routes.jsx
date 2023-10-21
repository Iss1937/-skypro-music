import { Routes, Route } from 'react-router-dom'
import Main from './pages/main/Main'
import NotFound from './pages/not-found/NotFound'
import Favorites from './pages/favorites/Favorites'
import Category from './pages/category/Category'
import Login from './pages/login/Login'
import ProtectedRoute from './components/protected-route/ProtectedRoute'
import Register from './pages/register/Register'

function AppRoutes({ user, onAuthButtonClick }) {
  return (
    <Routes>
      <Route
        path="/login"
        element={<Login onAuthButtonClick={onAuthButtonClick} />}
      />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
