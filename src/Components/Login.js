import React, {useState} from 'react'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
const handleSubmit  = (e)   =>{
    e.preventDefault();
    console.log(email);
}

  return (
    <form onSubmit={handleSubmit} className='text-center'>
      <label htmlFor="email">email</label>
      <input className='ml-5 hover:black text-black' value={email} onChange={(e) => setEmail((e.target.value)) } type="email" placeholder='youremail@gmail.com' id='email' name='email' />
      <br/>
      <label htmlFor="password">password</label>
      <input value={pass} onChange={(e) => setPass((e.target.value))} className='ml-5' type="password" placeholder='******' name="password" id="password" />
      <br />
      <button type='submit' className='bg-blue-900 text-white mt-3'>Login</button>
    </form>
  )
}

export default Login
