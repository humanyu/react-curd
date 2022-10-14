import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';


function List(props) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
       const fetchUsers = async () => {
         const res = await fetch("http://localhost/api/api.php?action=List");
         const data = await res.json();
         console.log(data);
         if (data.status == 1) {
           setUsers(data.list);
         }
       };
       fetchUsers();
    }, []);
   const deleteUser = (id) => {
    if (window.confirm("Are you sure?")) {
       fetch("http://localhost/api/api.php?action=Delete", {
              method: "POST",
              headers:{
                'Accept-Encoding':'gzip;q=1.0,compress;q=0.5',
              'Content-Type':'application/json',
              'Accept':'application/json',
              },
              body: JSON.stringify({
                user_id: id,
              }),
            }).then((response) => response.json()).then((res) => {
                if(res.status == 1){
                  alert('Deleted successfully');
                }
                });
    }
     
    }
  return (
    <div>
      <h1>This Is List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.user_id}>
              <td scope="row">{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <a
                  href="#"
                  onClick={() => {deleteUser(user.user_id)}}
                >
                  Delete
                </a>{" "}
                |<Link to={"/edit/" + user.user_id}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
