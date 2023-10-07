import React,{ useState } from 'react'
import axios from 'axios'

export default function Categories() {
    const [input,setInput] = useState({ })
    
  const inputChange = (Event) => {
    const name = Event.target.name
    const value = Event.target.value
    setInput({ ...input, [name]: value })
  }
  const submit = (Event) => {
    Event.preventDefault()
    console.log(input);



    axios.post(`https://product-backend-h7jp.onrender.com/category`,input).then((response)=>{
     
    console.log("res=======>",response);
    if(response.data.success===true){

       
    }
  }).catch((err)=>{
    console.log(err);
  })
   
  }


  return (
    <>
    <div className="container">
    <div className="text">Select Product Category</div>
    <form action="#">
      <div className="form-row">
        <div className="input-data">
        <input type="text" required=""
           name="category"
           onChange={inputChange} />
          <div className="underline" />
          <label htmlFor="">Enter the category </label>
           
           
          <div className="form-row  submit-btn" >
          <div className="input-data">
            <div className="inner" />
            <input type="submit" defaultValue="submit"
             onClick={submit} />
          </div>
        </div>
     
        </div>
       </div>
    </form>
  </div>
  
 </>
  
  )
}
