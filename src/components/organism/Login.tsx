import { useEffect, useState } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { useNavigate } from "react-router";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { loadUserAsync, loginAsync } from "../../redux/auth/auth.slice";
import { useAppSelector } from "../../redux/hooks";
import styles from './Login.module.css'

export default function Login() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate()
  const { loading, isAuthenticated } = useAppSelector(state => state.auth);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  // Impede o submit do formulário

    // Verifique se o botão de "Register" não deve acionar este método
    const resultAction = await dispatch(loginAsync({ email, password }));

    if (loginAsync.fulfilled.match(resultAction)) {
      navigate('/dashboard');
    } else {
      console.error('Error logging in:', resultAction.payload);
    }
  };


  useEffect(() => {
    if(!isAuthenticated) {
      dispatch(loadUserAsync());
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  if(loading) return <h2>Loading...</h2>

  const handleRegister = (e: React.MouseEvent) => {
    e.preventDefault();  // Garante que o evento não seja propagado como um submit
    navigate('/register');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <div>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            className={styles.input}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <Input
            id="password"
            className={styles.input}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className={styles.button}>
          Login
        </Button>
        <Button type="button" onClick={handleRegister} className={styles.button}>
          Registrar
        </Button>

      </form>
    </div>
  )
}
