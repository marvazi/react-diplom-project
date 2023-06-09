import React from 'react';
import Form from './Form';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  //Функции для определение является ли юзер юзером
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/');
      })
      .catch(console.error);
  };
  return (
    <div>
      <Form title="вход" handleClick={handleLogin}></Form>
    </div>
  );
};

export default Login;
