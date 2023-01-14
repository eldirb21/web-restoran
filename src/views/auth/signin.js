import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './auth.css';
export const Signin = (props) => {
  const navigate = useNavigate();
  const [state, setstate] = useState({
    username: '',
    password: '',
    isLoading: false
  })
  const submitHandler = e => {
    e.preventDefault();
    navigate("/app");

  }
  const changeHandler = e => {

    setstate({ ...state, [e.target.name]: e.target.value });

  }
  return (
    <div className='container_auth'>
      <div className='card-form'>
        <p className='text-hallo'>Signin</p>
      <form onSubmit={submitHandler}>

        <input className='input' type="text" name="username" placeholder='Email' value={state.username}
          onChange={changeHandler} /><br />

        <input className='input' type="password" name="password" placeholder='Password' value={state.password}
          onChange={changeHandler} /><br />

        <input className='btn-submit' type="submit" name="submit" />
      </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)