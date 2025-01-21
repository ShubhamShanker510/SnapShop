import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VerticalCards from '../../components/vertical_cards/VerticalCards';
import Shimmer from '../../components/shimmer/Shimmer';
import { useLocation } from 'react-router-dom';

const HeaderPage = () => {
  const [filteredData, setFilteredData] = useState(null);
  const location = useLocation();
  const { category,data } = location.state || {}; 

  let url=""
  if(data==="mens"){
     url="https://fakestoreapi.com/products/category/men's%20clothing";
  }
  else if(data==="womens"){
     url="https://fakestoreapi.com/products/category/women's%20clothing"
  }
  else if(data==="electronics"){
     url="https://fakestoreapi.com/products/category/electronics"
  }
  else if(data==="jewelery"){
     url="https://fakestoreapi.com/products/category/jewelery"
  }else{
    url="https://fakestoreapi.com/products/"
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const userData = response.data;

        if (category) {
            console.log(category)
          const filtered = userData.filter(product => product.title.toLowerCase().includes(category.toLowerCase()));
          setFilteredData(filtered.length > 0 ? filtered : userData);
        } else {
          setFilteredData(userData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setFilteredData([]);
      }
    };

    fetchData();
  }, [category]);

  if (!filteredData) {
    return (
      <div className=''>
        <Shimmer />
      </div>
    );
  } else {
    return (
      <div className=''>
        <VerticalCards data={filteredData} />
      </div>
    );
  }
};

export default HeaderPage;
