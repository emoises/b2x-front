import './App.css';
import Header from './components/organism/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/organism/Login'
import Dashboard from './components/organism/Dashboard'
import ProtectedRoute from './components/pages/ProtectedRoute';
import { Provider } from 'react-redux';
import { store } from './redux/auth.store';

function App() {
  return (
    <>
    <Provider store={store}>

      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}/>
          <Route path='dashboard' element={
            <ProtectedRoute user={true}>
              <Dashboard />
            </ProtectedRoute>
          }/>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
