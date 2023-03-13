import React from 'react'

// const Table = (props) => {
//   return (
//     <ul>
//     {props.dataList.map((i,index)=>{
//       return <li key={index}>{index} {'\u2192'} {i} <button onClick={()=>props.deleteItem(index)}>Delete</button></li>
//     })}
// </ul>
//   )
// }

const Table =(props)=>{

  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Password</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Age</th>
          <th>Operation</th>
        </tr>
      </thead>

      <tbody>
        {
          props.dataList.map((user,index)=>(
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.mob}</td>
              <td>{user.age}</td>
              <td>
                <button className='btn' onClick={()=>props.editRow(user)}>Edit</button>
                <button className='btn' onClick={()=>props.deleteItems(index)}>Delete</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Table