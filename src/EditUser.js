import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';


const EditUser = (props) => {
    const [user, setUser] = useState(props.currentUser);

    useEffect(() => {
        setUser(props.currentUser);
    },[props]);
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
    };
  
    return (
       <div className="Form">
        <>{props.toastContainer}</>
       <div className='container'>        
        <div className="update"></div>
        <div className="title">UPDATE USER</div>
      <form onSubmit={(event) => {
          event.preventDefault();
          props.updateUser(user.id, user);
        }}>

        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Mobile</label>
          <input
            type="number"
            name="mob"
            value={user.mob}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <button className='btn'>Update</button>
          <button className='btn' onClick={() => props.setEditing(false)}>Cancel</button>
        </div>
      </form>
    </div>
    </div>

    );
}

export default EditUser