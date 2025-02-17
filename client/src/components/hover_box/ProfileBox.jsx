import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUserData } from '../../redux/shareDate';
import axios from 'axios';
import { toast } from 'react-toastify';

const ProfileBox = () => {
  const [login, setLogin] = useState(false);
  const userData = useSelector((store) => store.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/user/get', {
          withCredentials: true,
        });
        
        console.log("Response in profile =>", response.data);
        
        if (response.status === 200) {
          setLogin(true);
        } 
        
        if(response.status !== 200){
          await axios.delete("http://localhost:3000/api/user/delete", {
            withCredentials: true,
          });
          dispatch(getUserData(null)); 
          navigate('/');
          setLogin(false);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        dispatch(getUserData(null)); 
        navigate('/');
      }
    };
    
    getData();
  }, []); 
  

  const handleClick = async() => {
   
    const response=await axios.delete("http://localhost:3000/api/user/delete", {
      withCredentials: true,
    });

    try {
      if(response.status === 200){
        toast.success("User Logout Successfully");
        dispatch(getUserData(null));
        navigate('/');
      }else{
        toast.error("Something went wrong")
      }
      
    } catch (error) {
      console.log("Error in logout=>", error)
    }
   
  };

  return (
    <div className='z-20 absolute top-9 right-0 bg-white block w-60 p-3 border border-gray-400 rounded-md shadow shadow-lg shadow-black'>
      {login && userData ? (
        <div className='text-gray-700 text-sm font-light'>
          <div className="name">
            <p>{userData.data.name || ""}</p>
          </div>
          <div className="email">
            <p>{userData.data.email || ""}</p>
          </div>
          <div className="phone">
            <p>{userData.data.phone || ""}</p>
          </div>
          <div className="button mt-4">
            <button className='text-white font-semibold p-1 text-sm font-light bg-red-600' onClick={handleClick}>Logout</button>
          </div>
        </div>
      ) : (
        <ul className='cursor-pointer inline-block text-gray-700 text-sm font-light'>
          <Link to='/register'>
            <li className='hover:text-red-600 hover:font-bold'>Create Your Account</li>
          </Link>
          <Link to='/login'>
            <li className='hover:text-red-600 hover:font-bold'>Login</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default ProfileBox;
