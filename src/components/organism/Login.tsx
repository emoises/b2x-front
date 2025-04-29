import { useEffect, useState } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { useNavigate } from "react-router";
import { AppDispatch } from "../../redux/auth.store";
import { useDispatch } from "react-redux";
import { loadUserAsync, loginAsync } from "../../redux/auth.slice";
import { useAppSelector } from "../../redux/auth.hook";
import styles from './Login.module.css'

export default function Login() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate()
  const { user, error, loading, isAuthenticated } = useAppSelector(state => state.auth);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('email', email)
    console.log('password', password)

    const resultAction = await dispatch(loginAsync({ email, password }))

    if (loginAsync.fulfilled.match(resultAction)) {
      navigate('/dashboard')
    }
    else {
      console.error('Erro ao logar:', resultAction.payload)
    }
  }

  useEffect(() => {
    dispatch(loadUserAsync());
  }, [dispatch]);

  useEffect(() => {
    console.log('User:', user);
    console.log('Error:', error);
    console.log('Loading:', loading);
  }, [user, error, loading]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);


  useEffect(() => {
    if (error) {
      navigate('/');
    }
  }, [error, navigate]);

  if(loading) return <h2>Loading</h2>

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
            Senha
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
          Entrar
        </Button>
      </form>
    </div>
  )
}
