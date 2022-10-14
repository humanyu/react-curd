import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

function Edit(props) {
    const param = useParams();
    const [inputField, setInputField] = useState({name:'',email:'',phone:'',user_id:''});
     useEffect(() => {
       const fetchUser = async () => {
         const res = await fetch(
           "http://localhost/api/api.php?action=Details&user_id=" + param.id
         );
         const data = await res.json();
         console.log(data);
         if (data.status == 1) {
          setInputField({
            name: data.user.name,
            email: data.user.email,
            phone: data.user.phone,
            user_id: data.user.user_id,
          });
         }
       };
       fetchUser();
     }, []);
    const updateForm = () =>{
        if (inputField.name == '') {
            alert('Please Enter Name');
            return false;
        }
          if (inputField.email == "") {
            alert("Please Enter Email");
            return false;
          }
            if (inputField.phone == "") {
              alert("Please Enter Phone");
              return false;
            }
            
            fetch("http://localhost/api/api.php?action=Update", {
              method: "POST",
              headers: {
                "Accept-Encoding": "gzip;q=1.0,compress;q=0.5",
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                name: inputField.name,
                email: inputField.email,
                phone: inputField.phone,
                user_id: inputField.user_id,
              }),
            })
              .then((response) => response.json())
              .then((res) => {
                if (res.status == 1) {
                 
                  alert("Records has been updated successfully");
                } else {
                  alert("Something went wrong, try again later");
                }
              });
    }
  return (
    <div>
      <h1>This Is Update</h1>
      <div className="form">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setInputField({ ...inputField, name: e.target.value });
              }}
              name="name"
              value={inputField.name}
            ></input>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setInputField({ ...inputField, email: e.target.value });
              }}
              name="email"
              value={inputField.email}
            ></input>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setInputField({ ...inputField, phone: e.target.value });
              }}
              name="phone"
              value={inputField.phone}
            ></input>
          </div>
          <div className="form-group">
            <button
              type="button"
              onClick={() => {
                updateForm();
              }}
              className="btn btn-primary"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
