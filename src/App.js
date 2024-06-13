import React, { useState } from 'react';

export default function App() {
  const [values, setValues] = useState({
    country: '', language: '', accept: false, select: false
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('Sending data...', values) // here I can send data to server
  }

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  return (
    <div className="container">
      <h1>Dropdowns, Checkboxes and Radiobuttons</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Country <select name="country" onChange={handleChange} value={values.country}>
            <option>*Select Country*</option>
            <option value="Hu" >Hungary</option>
            <option value="US" >U.S.A.</option>
            <option value="ES" >Spain</option>
          </select>
        </label>
        <div className="radio-container">
          <label>
            <input
              type="radio"
              name="language"
              value="javascript"
              onChange={handleChange}
              checked={values.language === 'javascript'}
            /> Javascript
          </label>
          <label>
            <input
              type="radio"
              name="language"
              value="kotlin"
              onChange={handleChange}
              checked={values.language === 'kotlin'}
            /> Kotlin
          </label>
        </div>
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              name="accept"
              onChange={handleChange}
              checked={values.accept}
            /> Accept terms and conditions
          </label>
          <label>
            <input
              type="checkbox"
              name="select"
              onChange={handleChange}
              checked={values.select}
            /> Send me emails
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}


