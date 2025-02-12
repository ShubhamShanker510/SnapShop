import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getUserData } from '../../redux/shareDate';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [form,setForm]=useState({
        email1:"",
        password1:""
    })
    const dispatch=useDispatch();
    const navigate=useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit=async (e)=>{
        e.preventDefault();

        const {email1,password1}=form
        let isValid=true;
        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!emailRegex.test(email1)){
            isValid=false;
        }

        if(isValid){
            try {
                const response=await axios.get(`http://localhost:3000/user/${email1}`);
                const {name,email,password,phone}=response.data;
                if(password===password1){
                    console.log(response.data);
                    dispatch(getUserData(response.data));
                    toast.success("Login Successfull")
                    setTimeout(()=>{
                        navigate('/')
                    })
                }
                else{
                    toast.error("Invalid Credentials")
                }
            
            } catch (error) {
                console.log(
                    "login error",error
                )
                toast.error("Something went wrong")
            }
        }

    }


  return (
    <div className="login flex flex-col justify-center items-center mt-20">
       <form action="" onSubmit={handleSubmit} className='border border-black p-10 flex flex-col items-center rounded-sm shadow shadow-md shadow-gray-700'>
            <div className="email mb-3">
                <input type="email" name='email1' value={form.email1} onChange={handleChange} required placeholder='Enter Your EmailId'  className='border border-black p-1 font-semibold'/>
            </div>
            <div className="pass mb-10">
                <input type="password" name='password1' value={form.password1} onChange={handleChange} required placeholder='Enter Your password'  className='border border-black p-1 font-semibold'/>
            </div>
            <div className="button flex justify-center items-center font-semibold text-white ">
                <button className='px-[80px] py-1 bg-red-600 hover:bg-red-700 shadow shadow-md hover:shadow-gray-400'>Login</button>
            </div>
       </form>
        <ToastContainer/>
    </div>
  )
}

export default Login