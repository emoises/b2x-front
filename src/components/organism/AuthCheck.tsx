import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { loadUserAsync } from "../../redux/auth/auth.slice";
import { useAppDispatch } from "../../redux/hooks";

export default function AuthCheck() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAppSelector(state => state.auth);
  const hasLoadUser = useRef(false);

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(loadUserAsync());
      hasLoadUser.current = true;
    }
  }, [dispatch, isAuthenticated, hasLoadUser]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (loading) return <h2>Loading...</h2>;

  return null;
}
