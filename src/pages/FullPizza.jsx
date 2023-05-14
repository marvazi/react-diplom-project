import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FullPizza = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://63f7d02173bce6c4497652d6.mockapi.io/items-pizzas/' + id
        );
        setData(data);
      } catch (e) {
        alert(e);
      }
    }
    fetchPizza();
  }, []);

  if (!data) {
    return 'ffasf';
  }
  return (
    <div>
      <img src={data.imageUrl} />
      <h2>{data.title}</h2>
      <h4>{data.price}</h4>
    </div>
  );
};

export default FullPizza;
