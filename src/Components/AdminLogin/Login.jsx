//import React from 'react'
import React,{useState} from 'react'
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";




function Login() {
const [input,setInput] = useState()
const [errors, setErrors] = useState()
const navigate = useNavigate();


const handleSubmit = (e) => {
  e.preventDefault()

  // $("#submitTestimonialBtn").attr("disabled", "disabled").text("Please wait...")
  // $("#titleError").text("")
  // $("#imageError").text("")
  
 

  // var formData = new FormData()
  // formData.append("email", input.email)
  // formData.append("password", input.password)
 
  //formdata.append('picteam', picteam)
 
  // const config = {
  //   headers: {
  //     "Content-Type": "multipart/form-data"
  //   }
  // }
  

  // const config = {
  //   form:{
  //     contentType:'content-type=multipart/form-data'
  //   }
  // }
 
  const baseURL = 'http://localhost:1803'

  axios.post(`${baseURL}/admin/login`,input)
    .then((response) => {
      //$("#submitGalleryBtn").attr("disabled", false).text("Submit")
      console.log(response)

      if (response.data.status === 1) {
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2500,
          theme: "dark",
        });navigate('/adminhome')
        //$("#submitGalleryForm").trigger("reset")
      } else {
        toast.error(response.data.status === 0, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2500,
          theme: "dark",
        });navigate('/')
      }
    }).catch((error) => {
      //$("#submitGalleryBtn").attr("disabled", false).text("Submit")
      if (!error?.response) {
        toast.error(`No response from server.`, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
      } else if (error.response?.status === 404) {
        toast.error("Not found.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
      } else if (error.response?.status === 500) {
        toast.error("Internal server error", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
      } else if (error.response?.status === 400) {
        toast.error("Bad Credentials", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
      } else if (error.response?.status === 420 && error.response.data) {
        toast.error("Not an admin.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
        const responseErrors = error.response.data.errors
        if (responseErrors) {
          const errorData = {}
          for (var errorItem of responseErrors) {
            if (errorItem.path === "email" && (errorData.email=== "" || errorData.email === undefined)) {
              errorData[errorItem.path] = errorItem.msg
            } 
            else if (errorItem.path === "password" && (errorData.password === "" || errorData.password === undefined)) {
              errorData[errorItem.path] = errorItem.msg
            }
            // else if(errorItem.path === "image" && (errorData.image.mimetype === "image/jpg" || errorData.image.mimetype === "image/jpeg" ||errorData.image.mimetype === "image/png" )){
            //   errorData[errorItem.path] = errorItem.msg
            //   console.log(errorData.image.mimetype)
            // }
            // else if((errorData.picteam === "" || errorData.picteam === undefined)){
            //   errorData[errorItem.path] = errorItem.msg
            // }
           
            setErrors(errorData)
          }
        }
      } else if (error?.code) {
        toast.error("Code: " + error.code, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
      } else {
        toast.error("Something went wrong.",{ position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
      }
    })


}


  const textHandle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  } 

  return (
    <>
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="/"><b>Future Smile Admin</b></a>
          </div>

          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form action="/adminhome" onSubmit={handleSubmit} method="post">

                <div className="input-group mb-3">
                  <input type="email" name="email" className="form-control" placeholder="Email" onChange={textHandle}/>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <input type="password" name="password" className="form-control" placeholder="Password" onChange={textHandle} />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                    </div>
                  </div>
                 
                  <div className="col-4">
                    <button type="submit" className="btn btn-info btn-block" >Sign In</button>
                  </div>
                  
                </div>
              </form>


            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login
