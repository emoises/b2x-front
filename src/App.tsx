import './App.css';
import Header from './components/organism/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/organism/Login';
import Dashboard from './components/organism/Dashboard';
import ProtectedRoute from './components/pages/ProtectedRoute';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Register from './components/organism/Register';
import { useAppSelector } from './redux/hooks';
// import AuthCheck from './components/organism/AuthCheck';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
