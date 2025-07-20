import React, { useState } from 'react'

const Form = () => {

  const [username, Setsername] = useState('')
  const subform = (e) => {
    e.preventDefault();
    console.log("Form Submitted  " + username);
  }

  return (
    <div className="form">
      <form onSubmit={(e) => {
        subform(e)
      }}>
        <input type="text" placeholder='Enter Your name'
          value={username}
          onChange={(e) => {
            Setsername(e.target.value)
          }}
        />
        <button>Add Now</button>
      </form>
    </div>
  )
}

export default Form