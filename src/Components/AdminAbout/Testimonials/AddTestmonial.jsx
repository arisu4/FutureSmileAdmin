//import React from 'react'
import React, {  useState } from 'react';
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery"


function AddTestmonial() {
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault()
   
    $("#submitTestimonialBtn").attr("disabled", "disabled").text("Please wait...")
    $("#nameError").text("")
    $("#designationError").text("")
    $("#messageError").text("") 
    console.log("input", input)
    const baseURL = 'http://localhost:1804'

    axios.post(`${baseURL}/admin/about/createtestimonials`, input)
      .then((response) => {
        $("#submitTestimonialBtn").attr("disabled", false).text("Submit")
        

        console.log(response)

        if (response.data.status === 1) {
          
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "dark",
          });
          $("#submitTestimonialForm").trigger("reset")

         
        } else {

          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,

          })
        }



        
      }).catch((error) => {
        $("#submitTestimonialBtn").attr("disabled", false).text("Submit")
        console.log(error.response?.status)
        if (!error?.response) {

          toast.error(`No response from server.`, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
        } else if (error.response?.status === 404) {
          toast.error("Page not found.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
        } else if (error.response?.status === 500) {
          toast.error("Internal server error.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
        } else if (error.response?.status === 420 && error.response.data) {
          toast.error("Validation error.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
          const responseErrors = error.response.data.errors
          console.log("test errors",responseErrors );
          if (responseErrors) {
           
            const errorData = {}

            for (var errorItem of responseErrors) {
              console.log('erroritem',errorItem);
              if (errorItem.path === "name" && (errorData.name === "" || errorData.name === undefined)) {
                  console.log('erroritem inside',errorItem);
                errorData[errorItem.path] = errorItem.msg
              } else if (errorItem.path === "designation" && (errorData.designation === "" || errorData.designation === undefined)) {
                errorData[errorItem.path] = errorItem.msg
              } else if (errorItem.path === "message" && (errorData.message === "" || errorData.message === undefined)) {

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
    setInput({ ...input, [e.target.name]: e.target.value })
  }

 
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add Testimonials</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/link">Testimonials</a></li>
                  <li className="breadcrumb-item active">Add testimonials</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <div className="card card-default">
          <div className="card-header">
            <h3 className="card-title"> Edit Data</h3>
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
            <form actions="/linking" id='submitTestimonialForm' onSubmit={handleSubmit} method="POST" >
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter Name" onChange={textHandle} />
                    {/* <FormFieldError message=(error?.name)/> */}
                    <span id="nameError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.name}</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Designation</label>
                    <input type="text" name="designation" className=" form-control" placeholder="Enter Designation" onChange={textHandle} />
                    <span id="designationError" style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.designation}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">

                  <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" name="message" rows={3} placeholder="Enter Message" defaultValue={""} onChange={textHandle} />
                    <span id="messageError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.message}</span>
                  </div>
                </div>
              </div>
              <button type="submit" id="submitTestimonialBtn"className="btn btn-info" style={{ float: 'right' }}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddTestmonial
