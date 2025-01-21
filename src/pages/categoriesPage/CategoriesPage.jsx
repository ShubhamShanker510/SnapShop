import React, { useEffect, useState } from 'react'
import VerticalCards from '../../components/vertical_cards/VerticalCards';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Shimmer from '../../components/shimmer/Shimmer';

const CategoriesPage = ({headerData}) => {

    const [data,setData]=useState([])
    const {id}=useParams()
    let url=""
     if(id==="mens"){
        url="https://fakestoreapi.com/products/category/men's%20clothing";
     }
     else if(id==="womens"){
        url="https://fakestoreapi.com/products/category/women's%20clothing"
     }
     else if(id==="eletronics"){
        url="https://fakestoreapi.com/products/category/electronics"
     }
     else if(id==="jwelery"){
        url="https://fakestoreapi.com/products/category/jewelery"
     }

     useEffect(()=>{
        if(url){
            axios.get(url)
            .then((res)=>setData(res.data))
            .catch((err)=>console.log(err))
        }
     },[url])
   

  if(data.length===0){
      return <Shimmer/>
  }else{
   return (
      <div className='mens flex flex-col justify-center items-center'>
          <div className="intersted_head mb-5 font-bold text-lg text-slate-800 border-b-2 border-slate-900 ">
              {id} Products
          </div>
        <div className='flex flex-wrap'>
        <VerticalCards data={data}/>
        </div>
        </div>
    )
  }
}

export default CategoriesPage