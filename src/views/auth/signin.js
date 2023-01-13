import React, { useState } from 'react'
import { connect } from 'react-redux'

export const Signin = (props) => {
  const [state, setstate] = useState({
    username: '',
    password: '',
    isLoading: false
  })
  const submitHandler = e => {
    e.preventDefault();

    console.log(state);

  }
  const changeHandler = e => {

    setstate({ ...state, [e.target.name]: e.target.value });

  }
  return (
    <div>
      <form onSubmit={submitHandler}>

        <input type="text" name="username" value={state.username}
          onChange={changeHandler} /><br />

        <input type="password" name="password" value={state.password}
          onChange={changeHandler} /><br />

        <input type="submit" name="submit" />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)