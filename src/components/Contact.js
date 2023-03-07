import React,{useState} from 'react';

const Contact = () => {
  const [data, setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:""
  });
  const handleChange = (event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    alert(`
     My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is thatf I want to say ${data.msg}  
    `)
  }

  return (
    <>
      <div className='my-5 '>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">FullName</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={ data.fullname}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone }
                  onChange={handleChange}
                  placeholder="mobile number"

                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email }
                  onChange={handleChange}
                  placeholder="name@example.com"

                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg }
                  onChange={handleChange}
                  rows="3"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary mb-5" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
