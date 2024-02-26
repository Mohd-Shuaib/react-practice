import React, { useState } from "react";

const Contact = () => {

  const [clickData, clickSetData] = useState();

  const [data, setData] = useState({
    fullname:'',
    email:'',
    password:'',
    msg:''

    

  })

  const inputVal = (event) => {
    const { name, value } = event.target;
    setData((prevVal) => ({
      ...prevVal,
      [name]: value
    }));
  };

  const inputClick = () =>{
    clickSetData(data)
    alert(`My Name is Mohd ${data.fullname} and My mobile email is ${data.email}  and My password is ${data.password} and My Message is ${data.msg}`)
  }


  return (
    <>
      <div className="container bg">
        <div className="heading te">
          <h1>Contact Us</h1>
        </div>

        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              name='fullname'
              value={data.fullname}
              onChange={inputVal}
              placeholder="Enter Full Name"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              name='email'
              value={data.email}
              onChange={inputVal}
              placeholder="Enter Email"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              name='password'
              value={data.password}
              onChange={inputVal}
              placeholder="Enter Password"
            />
          </div>

          <div class="mb-3">
           <textarea class="form-control" 
            placeholder="Enter Message"  name='msg'
            value={data.msg}
            onChange={inputVal} rows="3"></textarea>
          </div>

          <button type="submit" class="btn btn-primary"  onClick={inputClick}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
