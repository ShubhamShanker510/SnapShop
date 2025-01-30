import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUserData } from '../../redux/shareDate';

const ProfileBox = () => {
  const [login, setLogin] = useState(false);
  const userData = useSelector((store) => store.user.currentUser);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  useEffect(() => {
    if (userData !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [userData]);

  const handleClick = () => {
    dispatch(getUserData(null));
    navigate('/')
  };


  return (
    <div className='z-20 absolute top-9 right-0 bg-white block w-60 p-3 border border-gray-400 rounded-md shadow shadow-lg shadow-black'>
      {login && userData ? (
        <div className='text-gray-700 text-sm font-light'>
          <div className="name">
            <p>{userData.name || ""}</p>
          </div>
          <div className="email">
            <p>{userData.email || ""}</p>
          </div>
          <div className="phone">
            <p>{userData.phone || ""}</p>
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
