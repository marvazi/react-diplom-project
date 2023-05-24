import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <div className="main-div">
      <h1>Вход</h1>
      <Login></Login>
      <p>
        Нет аккаунта? <Link to="/reg">Зарегистрируйтесь</Link>
      </p>
    </div>
  );
};

export default LoginPage;
