import { useState } from 'react';
import { database, set, ref } from './firebase';
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
 const handleSubmit = async()=>{
  //  e.preventDefault();
  // const res = await fetch("https://contact-form-62a0f-default-rtdb.firebaseio.com/contact-form.json",{
  //   method: "POST",
  //   headers: {
  //     "Content-Type" : "application/json"
  //   },
  //   body: JSON.stringify({
  //     inputValue: inputValue,
  //     selectOption: selectOption
  //   })
    
  // })
  // console.log(`${inputValue}`);
  set(ref(database,'users/'), {
    inputValue: inputValue,
    selectOption: selectOption
  })
 }
  return (
    <>
      <h1>Contact form</h1>
      <div className="card">
         <form method='post'>
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
              <input type='submit' onClick={handleSubmit}/>
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
