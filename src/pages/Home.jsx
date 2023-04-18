import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';

const Home = () => {
  const [items, setItems] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sort: 'rating',
  });

  useEffect(() => {
    fetch(
      `https://63f7d02173bce6c4497652d6.mockapi.io/items-pizzas?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sort}&order=desc`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);
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
        <div className="content__items">
          {items.map((obj) => (
            <PizzaBlock key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
