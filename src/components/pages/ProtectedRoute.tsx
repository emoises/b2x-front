import { Navigate } from "react-router"

type ProtectedRouteProps = {
  user: boolean;
  children: React.ReactNode;
}

export default function ProtectedRoute({ user, children }: ProtectedRouteProps) {
  console.log('this route is protected!')
  if(!user) {
    return <Navigate to='/' replace />
  }
  return <>{children}</>;
}
