import React, { useContext, useEffect, useState } from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Pagination from '../Pagination';
import { AppContext } from '../App';

const Home = () => {
  const { searchValue } = useContext(AppContext);
  const [items, setItems] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sort: 'rating',
  });

  useEffect(() => {
    fetch(
      `https://63f7d02173bce6c4497652d6.mockapi.io/items-pizzas?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ''
      }$&sortBy=${sortType.sort}&order=desc`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage]);

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoryId}
            onClickCategory={(index) => setCategoryId(index)}
          />
          <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{pizzas}</div>
        <Pagination onChangePage={(num) => setCurrentPage(num)} />
      </div>
    </>
  );
};

export default Home;
