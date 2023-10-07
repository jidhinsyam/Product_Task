import React,{ useState,useEffect } from 'react'
import axios from 'axios'


export default function Productform() {
    const[file,setFile]=useState()
    const [input,setInput] = useState({ })
    console.log(input);
  const inputChange = (Event) => {
    const name = Event.target.name
    const value = Event.target.value
    setInput({ ...input, [name]: value })
  }
  const submit = (Event) => {
    Event.preventDefault()
    console.log(input);
 
console.log(input);

  const data =new FormData()
    data.append('name',file.name)
    data.append('file',file)
    data.append('productname',input.productname)
    data.append('type',input.type)
    data.append('details',input.details)
    data.append('category',input.category)
    data.append('subcategory',input.subcategory)


    axios.post(`https://product-backend-h7jp.onrender.com/product`,data).then((response)=>{
     
    console.log("res=======>",response);
    if(response.data.success===true){

       
    }
  }).catch((err)=>{
    console.log(err);
  })
   
  }


  const [category, setCategory] = useState([])
  console.log(category);
  useEffect(() => {
    axios.get('https://product-backend-h7jp.onrender.com/category/view-category').then((response) => {
        
        setCategory(response.data.details)
    }).catch((err) => {
        console.log(err);
    })
  }, [])


  const [subcategory, setSubcategory] = useState([])
  console.log(subcategory);
  useEffect(() => {
    axios.get('https://product-backend-h7jp.onrender.com/subcategory/view-subcategory').then((response) => {
        
        setSubcategory(response.data.details)
    }).catch((err) => {
        console.log(err);
    })
  }, [])
 
  return (
    < > 
    <div className="container">
  <div className="text">Add Your Product</div>
  <form action="#">
    <div className="form-row">

    <select className="form-select input-data" aria-label="Default select example" name="category" onChange={inputChange} >
   
   <option selected="">choose Product Category</option>
 
    {category.map((data, key)=>(   
    <option value={data._id}>{data.category} </option> 
 
    ))}   
  
 </select>
     


     
 <select className="form-select input-data" aria-label="Default select example" name="subcategory" onChange={inputChange} >
   
   <option selected="">choose Product subCategory</option>
 
  {subcategory.map((data, key)=>(   
    <option value={data._id}>{data.Subcategory}</option> 
 
     ))}   
  
 </select>
     
    </div>
    <div className="form-row">
      <div className="input-data">
        <input type="text" required="" 
        name="productname"
        onChange={inputChange}/>
        <div className="underline" />
        <label htmlFor="">Product Name</label>
      </div>
      <div className="input-data">
        <input type="text" required="" placeholder='example:product is mobile give android or ios etc'name="type"
        onChange={inputChange} />
        <div className="underline" />
        
        <label htmlFor="">Type</label>
      </div>
    </div>
    <div className="form-row">
      <div className="input-data">
        <input type="text" required="" 
        name="details"
        onChange={inputChange}/>
        <div className="underline" />
        <label htmlFor="">Product Details</label>
      </div>
      <div className="input-data">
      <input
                  type="file"
                  className="form-control p-4"
                  id="file"
                  placeholder="image"
                  required="required"
                  data-validation-required-message="name"
                  name="image"
                  onChange={(Event)=> { setFile(Event.target.files[0]); setInput({...input, image: Event.target.files[0].name})}}
                />
                <p className="help-block text-danger" />
      
    
        <div className="form-row submit-btn1">
          <div className="input-data">
            <div className="inner" />
            <input type="submit" defaultValue="submit" onClick={submit} />
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

    
    </ >
  )
}
