import React, { useState } from "react";

function Add(props) {
    const [inputField, setInputField] = useState({name:'',email:'',phone:''});
    const submitForm = () =>{
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
            
            fetch("http://localhost/api/api.php?action=Add", {
              method: "POST",
              headers:{
                'Accept-Encoding':'gzip;q=1.0,compress;q=0.5',
              'Content-Type':'application/json',
              'Accept':'application/json',
              },
              body: JSON.stringify({
                name: inputField.name,
                email: inputField.email,
                phone: inputField.phone,
              }),
            }).then((response) => response.json()).then((res) => {
                if(res.status == 1){
             setInputField({ name: "", email: "", phone: "" });
             alert('Records has been added successfully');
                } else {
                    alert('Something went wrong, try again later');
                }
            });
    }
  return (
    <div>
      <h1>This Is Add</h1>
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
                submitForm();
              }}
              className="btn btn-primary"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;
