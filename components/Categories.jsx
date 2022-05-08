import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getCategories } from '../services';


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 shadow-lg rounded-lg p-8 pb-12 mb-8 ">
      <h3 className="text-white text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3 text-white`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
