import { Navigate, useLocation } from "react-router"
import { useAppSelector } from "../../redux/hooks";

type ProtectedRouteProps = {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAppSelector(state => state.auth);
  const location = useLocation();


  console.log('this route is protected!')
  if(!isAuthenticated) {
    return <Navigate to='/' state={{ from: location }} replace />
  }
  return <>{children}</>;
}
