import { useEffect, useState } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { useNavigate } from "react-router";
import { AppDispatch, RootState } from "../../redux/auth.store";
import { useDispatch } from "react-redux";
import { loadUserAsync, loginAsync } from "../../redux/auth.slice";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../redux/auth.hook";

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
    }
  }, [isAuthenticated, navigate]);


  useEffect(() => {
    if (error) {
      navigate('/');
      alert('Usuário não autenticado');
    }
  }, [error, navigate]);

  if(loading) return <h2>Loading</h2>

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Senha
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Entrar
        </Button>
      </form>
    </div>
  );
}
