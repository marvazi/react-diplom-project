import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearItems } from '../redux/slices/cartSlice';

const OrderPage = () => {
  //обьявление необходимых состояний компнентов
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const [fio, setFio] = useState('');
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();
  // Функция для очищение корзиины по нажанию
  const handleClear = () => {
    //Достаем метод из Redux
    dispatch(clearItems());
    setSuccess(true);
    setTimeout(() => {
      nav('/');
    }, 2000);
  };

  return (
    //Верстка компонента
    <div>
      <div className="container container--cart">
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Корзина
            </h2>
          </div>
          <div className="content__items">
            <div>
              <div className="enter-form">
                <div className="form-group">
                  <input
                    value={fio}
                    onChange={(e) => setFio(e.target.value)}
                    type="text"
                    placeholder="Введите ФИО получателя"
                    className="form-input"
                  />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="phone"
                    placeholder="Введите номер телефона получателя"
                    className="form-input"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Введите почту получателя"
                    className="form-input"
                  />

                  <input
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
                    type="text"
                    placeholder="Введите адрес получателя"
                    className="form-input"
                  />
                </div>

                <button
                  onClick={() => setVisible(true)}
                  className="form-button"
                >
                  Сохранить
                </button>
              </div>
              {visible == true ? (
                <div className="success">
                  <p>{`Фио Получателя:  ${fio}`}</p>
                  <p>{`Номер телефона получателя:  ${phone}`}</p>
                  <p>{`Почта Получателя:  ${email}`}</p>
                  <p>{`Адрес Получателя:  ${adress}`}</p>
                </div>
              ) : (
                ''
              )}
            </div>
            {success == true ? (
              <div className="success">Успешное оформление заказа!!!.</div>
            ) : (
              ''
            )}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details"></div>
            <div className="cart__bottom-buttons">
              <Link to="/order">
                <button onClick={handleClear} className="button pay-btn">
                  <span>Оплатить сейчас</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
