import React, { useState } from 'react';
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery"
//import { useForm } from "react-hook-form"


function AddVideos() {
  const [links, setlinks] = useState({});
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

     $("#submitTestimonialBtn").attr("disabled", "disabled").text("Please wait...")
     $("#linkError").text("")
   
    const baseURL = 'http://localhost:1804'

     axios.post(`${baseURL}/admin/about/createvideos`,links)
      .then((response) => {
         $("#submitVideoBtn").attr("disabled", false).text("Submit")

         console.log(response)

        if (response.data.status === 1) {
          
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "dark",
          });
          $("#submitVideoBtn").trigger("reset")
         
         
        } else {

          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,

          })
        } 
      })
       .catch((error) => {
        $("#submitVideoBtn").attr("disabled", false).text("Submit")
        console.log(`video error`,error.response?.status)
        if (!error?.response) {
          toast.error(`No response from server.`, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
        } else if (error.response?.status === 404) {
          toast.error("Page not found.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
        } else if (error.response?.status === 500) {
          toast.error("Internal server error.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
        } else if (error.response?.status === 420 && error.response.data) {
          toast.error("Validation error.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
          const responseErrors = error.response.data.errors
          console.log(responseErrors)
          if (responseErrors) {
            const errorData = {}

            for (var errorItem of responseErrors) {

              if (errorItem.path === "links" && (errorData.links === "" || errorData.links === undefined)) {

                errorData[errorItem.path] = errorItem.msg
              }
              setErrors(errorData)
            }
          }
        } else if (error?.code) {
          toast.error("Code: " + error.code, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
        } else {
          toast.error("Something went wrong.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
        }
       })
  

    
       
     
  }

  const textHandle = (e) => {
    setlinks({...links,[e.target.name]: e.target.value })
  }
  
  return (
    <>
      <div className="content-wrapper">

        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add Videos</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/link">Videos</a></li>
                  <li className="breadcrumb-item active">Add Videos</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <div className="card card-default">
          <div className="card-header">
            <h3 className="card-title">Please Add Data</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse">
                <i className="fas fa-minus" />
              </button>
              <button type="button" className="btn btn-tool" data-card-widget="remove">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          {/* /.card-header */}

          <div className="card-body">
            <form action="/linking" id='submitVideoForm' onSubmit={handleSubmit}  >
              <div className="row">

              <div className="col-sm-6">
                  {/* text input */}
                  <div className="form-group">
                    <label>Enter Video Link</label>
                    <input type="text" name="links" className="form-control" placeholder="Enter Video Link" onChange={textHandle} />
                    <span id="linkError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.links}</span> 
                  </div>
                </div>
              </div>
              <button type="submit" id='submitVideoBtn' className="btn btn-info" style={{ float: 'right' }}>Submit</button>
            </form>

          </div>


        </div>

      </div>
    </>
  )
}

export default AddVideos
