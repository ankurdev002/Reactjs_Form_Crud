import React, { useState } from 'react'
import "./App.css"
import Table from './Table';
import Form from './Form';
import EditUser from './EditUser';
import { toast, ToastContainer } from 'react-toastify';


// const App = () => {
// const [data,setData]=useState([]);


// const handleChange = (value) =>  {
//   const copydata = [...data];
//   copydata.push(value);
//   setData(copydata);
// }

// const handleDelete =()=>{
//   const copydata = [...data];
//   copydata.length=0;
//   const copy=copydata.splice(0,copydata.length)
//   setData(copy);
// }

// const removeItem=(index)=>{
//   const copydata = [...data];
//   const copy=copydata.filter((v,i)=>i!==index);
//   setData(copy);
// }

// console.log(data)
// console.log(setData)
  
//   return(
//     <div>
  
//       <Child func={handleChange} delete={handleDelete} />
//       <SearchElement dataList={data} deleteItem={removeItem}/>
      

//     </div>
//   )
// }

// const App =()=>{
//   const [data,setData]=useState([{
//     name:"",
//     password:"",
//     email:"",
//     mob:"",
//     age:""
//   }]);

//   const handleSubmit=(event)=>{
    
//     event.preventDefault();
//     const copydata=[...data];
//     copydata.push(event.target.value);
//     setData(copydata)
    
//   }



// console.log(data)
// console.log(setData)
//   return(
//     <div>
//       <Child details={data} submit={handleSubmit} detailsData={setData}/>
//       <SearchElement/>
//     </div>
//   )
// }



// export default App


const App=()=> {

  const [data, setData] = useState([]);
  const handleChange = (value) =>  {
  value.id=Math.round(Math.random() * 9999);
  setData([...data, value])
};

const removeItem=(id)=>{
  const copydata = [...data];
  const copy=copydata.filter((v,i)=>i!==id);
  setData(copy);
  toast.error("Data Deleted Successfully")
};

const [editing, setEditing] = useState(false);
  const initialFormState = {    
  id:null, 
  name: "",
  password:"",
  email:"",
  mob:"",
  age:""
};

const [currentUser, setCurrentUser] = useState(initialFormState);


  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({id:user.id,
                    name: user.name, 
                    password: user.password,
                    email: user.email,
                    mob: user.mob,
                    age:  user.age });
                    console.log(currentUser)
  };

 
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setData(data.map((user) => (user.id === id ? updateUser : user)));
    toast(<div className='toastcontent'>
      <img src='https://cdn-icons-png.flaticon.com/64/9964/9964187.png'/>
      <p>Data Updated Succesfully</p></div>)
  };

  console.log(data)
  console.log(setData)

  return (<>
  <div className="flex-large">
          {editing ? (
            <div>
        
              <EditUser
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <Form func={handleChange}/>
            </div>
          )}
        </div>
            <Table dataList={data} 
            deleteItems={removeItem}
            editRow={editRow}/>
            <ToastContainer/>
            </>
  );
  }

  export default App