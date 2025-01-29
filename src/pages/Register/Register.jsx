import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        phone: ""
    });

    const navigate=useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        

        const { name, email, phone, password } = form;

        let isValid = true;
        const newErrors = { email: "", phone: "" };

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email address.";
            isValid = false;
        }

     
        if (!/^\d{10}$/.test(phone)) {
            newErrors.phone = "Phone number must be 10 digits.";
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
           const userData={
            "id":email,
            "name":name,
            "email":email,
            "phone":phone,
            "password":password,
            "wishlist":[],
            "cart":[]
           }
            axios.post("http://localhost:3000/user",userData)
            .then(()=>{
                toast("Registered")
                setTimeout(()=>{
                    navigate('/login')
                })
            })
        }
    };

    return (
        <div className='form flex flex-col justify-center items-center mt-20'>
            <div className="header text-[50px] font-bold">
                <p>CREATE YOUR ACCOUNT</p>
            </div>
            <form onSubmit={handleSubmit} className='border border-black p-10 flex flex-col items-center rounded-sm shadow shadow-md shadow-gray-700'>
                <div className="fullname mb-3">
                    <input
                        type="text"
                        name="name"
                        placeholder='Enter Your Full Name'
                        className='border font-semibold border-black p-1'
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="email mb-3">
                    <input
                        type="email"
                        name="email"
                        placeholder='Enter Your Email'
                        className='border border-black p-1 font-semibold'
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </div>
                <div className="phone mb-3">
                    <input
                        type="tel"
                        name="phone"
                        maxLength={10}
                        minLength={10}
                        placeholder='Enter Your Phone Number'
                        className='border border-black p-1 font-semibold'
                        value={form.phone}
                        onChange={handleChange}
                        required
                    />
                    {errors.phone && <p className="text-red-600">{errors.phone}</p>}
                </div>
                <div className="pass mb-10">
                    <input
                        type="password"
                        name="password"
                        placeholder='Enter Your Password'
                        className='border border-black p-1 font-semibold'
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="button flex justify-center items-center font-semibold text-white">
                    <button type="submit" className='px-[80px] py-1 bg-red-600 hover:bg-red-700 shadow shadow-md hover:shadow-gray-400'>
                        Register
                    </button>
                </div>
                <p className='text-sm'>Already have an account. <Link to='/login' className='text-blue-500'><span>Login here</span></Link></p>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Register;
