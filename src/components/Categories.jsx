import React, { useState } from 'react';

const Categories = ({ value, onClickCategory }) => {
  const categories = [
    'Все',
    'Ручной',
    'Электростартер',
    'Румпленное',
    'Дистанционное',
    'Комбинированные',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
