import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({
  user,
  redirectPath = '/login',
  isAllowed,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}
export default ProtectedRoute
