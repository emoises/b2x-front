import { useAppSelector } from '../../redux/auth.hook';
import styles from './Header.module.css'
import { logout } from '../../redux/auth.slice';
import { AppDispatch } from '../../redux/auth.store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { authAPI } from '../../services/auth.service';
import { Button } from '../atoms/Button';


export default function Header() {
  const { user, isAuthenticated } = useAppSelector(state => state.auth);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);


  const handleLogout = async () => {
    await authAPI.post('/logout')
    dispatch(logout());
  };


  return (
    <div className={styles.container}>
      <p>My Page</p>
      { isAuthenticated ? (
      <div className={styles.userContainer}>
        <p className={styles.username}>{user?.email.slice(0,2).toUpperCase()}</p>
        <Button onClick={handleLogout}>Sair</Button>
      </div>
      ) : null}
    </div>
  )
}
