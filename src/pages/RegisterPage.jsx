import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../components/SignUp';

const RegisterPage = () => {
  return (
    <div className="main-div">
      <h1>Регистрация</h1>
      <SignUp></SignUp>
      <p>
        Уже есть аккаунт? <Link to="/login">Войдите</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
