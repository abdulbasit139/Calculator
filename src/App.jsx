import './App.css'
import { useState } from 'react'

function App() {

  const [value, setValue] = useState('')

  const inputValue = (e) => {
    setValue(value + e.target.value)
  }

  const deleteDigit = () => {
    setValue(value.slice(0, -1))
  }

  const clearInput = () => {
    setValue("")
  }
  
  const calculate = () => {
    setValue(eval(value))
  }

  return (
    <>
      <div className="calc card shadow">
        <form action=''>
          <div>
            <input type='text' value={value} className='form-control'/>
          </div>
          <table className='table'>
            <thead>
              <th>.</th>
              <th>.</th>
              <th>.</th>
              <th>.</th>
            </thead>
            <tbody>
              <tr>
                <td><input type='button' value="DEL" onClick={deleteDigit} className='btn btn-danger' /></td>
                <td><input type='button' value="AC" onClick={clearInput} className='btn btn-primary' /></td>
                <td><input type='button' value="%" onClick={inputValue} className='btn btn-primary' /></td>
                <td><input type='button' value="/" onClick={inputValue} className='btn btn-primary' /></td>
              </tr>
              <tr>
                  <td><input type='button' value="7" onClick={inputValue} className='btn btn-primary' /></td>
                  <td><input type='button' value="8" onClick={inputValue} className='btn btn-primary' /></td>
                  <td><input type='button' value="9" onClick={inputValue} className='btn btn-primary' /></td>
                  <td><input type='button' value="+" onClick={inputValue} className='btn btn-primary' /></td>
              </tr>
              <tr>
                  <td><input type='button' value="4" onClick={inputValue} className='btn btn-primary' /></td>
                  <td><input type='button' value="5" onClick={inputValue} className='btn btn-primary' /></td>
                  <td><input type='button' value="6" onClick={inputValue} className='btn btn-primary' /></td>
                  <td><input type='button' value="-" onClick={inputValue} className='btn btn-primary' /></td>
              </tr>
              <tr>
                  <td><input type='button' value="1" onClick={inputValue} className='btn btn-primary' /></td>
                  <td><input type='button' value="2" onClick={inputValue} className='btn btn-primary' /></td>
                  <td><input type='button' value="3" onClick={inputValue} className='btn btn-primary' /></td>
                  <td><input type='button' value="*" onClick={inputValue} className='btn btn-primary' /></td>
              </tr>
              <tr>
                  <td><input type='button' value="0" onClick={inputValue} className='btn btn-primary' /></td>
                  <td><input type='button' value="00" onClick={inputValue} className='btn btn-primary' /></td>
                  <td colSpan={2}><input type='button' value="=" onClick={calculate} className='btn btn-primary w-100' /></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
}

export default App
