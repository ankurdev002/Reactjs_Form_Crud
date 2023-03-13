import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// const Child = (props) => {
//     const handleKey=(event)=>{


//      if(event.key==='Enter'){
      
//       props.func(event.target.value)
//       console.log(event.target.value);
//       event.currentTarget.value = "";
       
//     }
//    }
//   return (
//   <div className='formData'>
//     <input type="text" placeholder='Enter Value...' onKeyDown={handleKey}/>
//     <button onClick={props.delete}>Delete All At Once</button>
//   </div>
//   )
// }

const Form = (props) =>{
  const initialState={
    id:null,   
    name: "",
    password:"",
    email:"",
    mob:"",
    age:""};
  
  const [item, setItem] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItem({...item,[name]:value});
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    props.func(item);
    setItem(initialState);

    toast.success("Data Added Successfully")
    
  };




  return(
    <div className="Form">
      <ToastContainer/>
      <div className='container'>
        <div className="add-user"></div>
        <div className="title">ADD USER</div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={item.name}
            placeholder="Enter Name..."
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={item.password}
            placeholder="Enter Password..."
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={item.email}
            placeholder="Enter Email..."
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Mobile</label>
          <input
            type="number"
            name="mob"
            value={item.mob}
            placeholder="Enter Mobile..."
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={item.age}
            placeholder="Enter Age..."
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <button className="btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
    )

}

export default Form;