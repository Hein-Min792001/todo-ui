import React, { useState } from 'react'
import { registerApiCall } from '../service/AuthService';

export const RegisterComponent = () => {
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleRegistrationForm = (e) => {
        e.preventDefault();
        const register = {name,username,email,password};
        registerApiCall(register).then((resp) => {
            console.log(resp);
        })
        .catch((err)=>console.log(err));
    };
  return (
    <div className='container mt-4'>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <h2 className='text-center'>
                        User Registration Form
                        </h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row mb-3">
                                <label className='col-md-3 mt-1 form-label'>Name</label>
                                <div className="col-md-9">
                                <input type="text"
                                className='form-control' 
                                name='name'
                                value={name}
                                placeholder='Enter name'
                                onChange={(e)=>setName(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className='col-md-3 mt-1 form-label'>UserName</label>
                                <div className="col-md-9">
                                <input type="text"
                                className='form-control' 
                                name='username'
                                value={username}
                                placeholder='Enter UserName'
                                onChange={(e)=>setUsername(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className='col-md-3 mt-1 form-label'>Email</label>
                                <div className="col-md-9">
                                <input type="email"
                                className='form-control' 
                                name='email'
                                value={email}
                                placeholder='Enter Email'
                                onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className='col-md-3 mt-1 form-label'>Password</label>
                                <div className="col-md-9">
                                <input type="password"
                                className='form-control' 
                                name='password'
                                value={password}
                                placeholder='Enter Password'
                                onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <button
                            className='btn btn-primary '
                            onClick={e => handleRegistrationForm(e)}>
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
