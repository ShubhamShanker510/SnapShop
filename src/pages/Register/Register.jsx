import React from 'react'
import { indianStates } from '../../data'

const Register = () => {
  return (
    <div className='form'>
        <form action="">
            <div className="sec-1">
                <div className="f_name">
                    <input type="text" placeholder='Enter Your first Name..' />
                </div>
                <div className="m_name">
                    <input type="text" placeholder='Enter Your Middle Name..' />
                </div>
                <div className="l_name">
                    <input type="text" placeholder='Enter Your Last Name..' />
                </div>
            </div>
            <div className="sec-2">
                <div className="u_name">
                    <input type="text" placeholder='Enter Your Username..' />
                </div>
                <div className="email_address">
                    <input type="email" placeholder='Enter Your Email_Id...' />
                </div>
                <div className="phone">
                    <input type="text" placeholder='Enter Your Phone Number...' />
                </div>
            </div>
            <div className="sec-3">
                <div className="state">
                   <select name="Select Your State" id="">
                       {
                        indianStates.map((item,index)=>(
                            <option key={index} value={item}>{item}</option>
                        ))
                       }
                   </select>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Register