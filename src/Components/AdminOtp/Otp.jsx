import React,{useState} from 'react'
//import OtpInput from 'react-otp-input';
import "../../App.css"

function Otp() {
 const [otp,setOtp] = useState(new Array(6).fill("")) 
 //const [otp, setOtp] = useState('');
 
 const handleChange =(element,index)=>{
  if(isNaN(element.value)) return false
  setOtp([...otp.map((d,idx)=>(idx===index)?element.value:d)])
  if(element.nextSibling){
    element.nextSibling.focus()
  }
 }
 const handleSubmit =(element,index)=>{
  if(isNaN(element.value)) return false
  setOtp([...otp.map((d,idx)=>(idx===index)?element.value:d)])
  if(element.nextSibling){
    element.nextSibling.focus()
  }
 }


  return (
    <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="/"><b>Verify your OTP</b></a>
          </div>

          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Enter OTP</p>
              <form action="/adminhome" onSubmit={handleSubmit} method="post">

                <div className="input-group mb-3">
                  {/* <input type="email" name="email" className="form-control" placeholder="Email" /> */}
                  <div className='otp-area'>
                    {
                      otp.map((data,index)=>{
                        return<input type='text'
                        // value={data}
                        maxLength={1}
                        // onChange={(e)=>handleChange(e,index)}
                        />
                      })
                    }

                  </div>
                  <div className="input-group-append">
                    
                  </div>
                </div>

              

                <div className="row">
                  <div className="col-12">
                    <button type="submit" className="btn btn-info btn-block">Verify OTP</button>
                  </div>
                </div>
              </form>


            </div>

          </div>
        </div>
      </div>
   
    //  <OtpInput
    //   value={otp}
    //   onChange={setOtp}
    //   numInputs={6}
    //   renderSeparator={<span>-</span>}
    //   renderInput={(props) => <input {...props} />}
    // />
  
  )
}

export default Otp

