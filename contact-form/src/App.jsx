import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectOption, setSelectOption] = useState('');
  const [ischecked, setIsChecked] = useState(false);
  const handleChange = (e) =>{
    setInputValue(e.target.value)
      //console.log(e);
  }
 const handleSelect = (e) =>{
     setSelectOption(e.target.value);
 }
 const handleChecked = (e)=>{
      setIsChecked(e.target.checked);
 }
  return (
    <>
      <h1>Contact form</h1>
      <div className="card">
         <form>
              <div><input type="text" placeholder="Enter name" value={inputValue} onChange={handleChange}/></div>
              <div><select value={selectOption} onChange={handleSelect}>
                  <option>Select Option</option>
                  <option>Option1</option>
                  <option>Option2</option>
                  <option>Option3</option>
                  <option>Option4</option>
                  <option>Option5</option>
              </select></div>
              <label>
              <input type="checkbox" checked={ischecked} onChange={handleChecked} />
                Red
              </label>
         </form>
        <div> Name: {inputValue} </div>
         <div>Select Option: {selectOption}</div> 
        <div> Checkbox: {ischecked === true ? 'red color': ''}</div>
        checkbox display 2: {ischecked && "Red color checked"}
      </div>
    </>
  )
}

export default App
