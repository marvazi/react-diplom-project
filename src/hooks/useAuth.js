import { useSelector } from 'react-redux';

const useAuth = () => {
  //Собственный хук для определние юзера
  const { email, token, id } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
export default useAuth;
