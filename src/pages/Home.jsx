import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzasSlice';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Pagination from '../Pagination';
import useAuth from '../hooks/useAuth';
import RegisterPage from './RegisterPage';

const Home = () => {
  // const { isAuth, email } = useAuth();
  const categoryId = useSelector((state) => state.filterSlice.categoryId);
  const sortType = useSelector((state) => state.filterSlice.sortType);
  const currentPage = useSelector((state) => state.filterSlice.currentPage);
  const items = useSelector((state) => state.pizzaSlice.items);
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  const { searchValue } = useContext(AppContext);
  // const [items, setItems] = useState([]);

  const onClickCategory = (i) => {
    dispatch(setCategoryId(i));
  };
  const onChangePage = (num) => {
    dispatch(setCurrentPage(num));
  };
  const getPizzas = async () => {
    try {
      dispatch(fetchPizzas({ categoryId, sortType, currentPage }));
    } catch (error) {
      alert('Упс, что то пошло не так');
    }
  };
  useEffect(() => {
    getPizzas();
    window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage]);

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock {...obj} />);
  return isAuth ? (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onClickCategory={onClickCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все моторы</h2>
        <div className="content__items">{pizzas}</div>
        <Pagination onChangePage={onChangePage} />
      </div>
    </>
  ) : (
    <RegisterPage></RegisterPage>
  );
};

export default Home;
