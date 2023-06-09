import React from 'react';
import empty from '../assets/img/empty-cart.png';
import { Link } from 'react-router-dom';
const CartEmpty = () => {
  return (
    <>
      <div class="cart cart--empty">
        <h2>
          Корзина пустая <span>😕</span>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ничего.
          <br />
          Для того, чтобы купить мотор, перейди на главную страницу.
        </p>
        <img src={empty} alt="Empty cart" />
        <Link className="button button--black" to="/">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
