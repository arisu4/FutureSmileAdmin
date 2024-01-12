//import React from 'react'
import React, { useState } from 'react';
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery"

function AdminContact() {
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState()


  const handleSubmit = (e) => {
    e.preventDefault()
   
    $("#submitContactBtn").attr("disabled", "disabled").text("Please wait...")
    $("#numberError").text("")
    $("#emailError").text("")
    $("#addressError").text("") 
    console.log("input", input)
    const baseURL = 'http://localhost:1804'

    axios.post(`${baseURL}/admin/contact/createcontact`, input)
      .then((response) => {
        $("#submitContactBtn").attr("disabled", false).text("Submit")
        

        console.log(response)

        if (response.data.status === 1) {
          
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "dark",
          });
          $("#submitContactForm").trigger("reset")
         
        } else {

          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,

          })
        }



        
      }).catch((error) => {
        $("#submitContactBtn").attr("disabled", false).text("Submit")
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
          if (responseErrors) {
            const errorData = {}

            for (var errorItem of responseErrors) {

              if (errorItem.path === "name" && (errorData.name === "" || errorData.name === undefined)) {

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
                <h1>Add Contacts</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/link">Contacts</a></li>
                  <li className="breadcrumb-item active">Add Contacts</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <div className="card card-default">
          <div className="card-header">
            <h3 className="card-title">Please Enter Data</h3>
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
            <form actions="/linking" id='submitContactForm' onSubmit={handleSubmit} method="POST" >
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="number" name="mobile" className="form-control" placeholder="Enter Number" onChange={textHandle} />
                    {/* <FormFieldError message=(error?.name)/> */}
                    <span id="numberError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.number}</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className=" form-control" placeholder="Enter Email" onChange={textHandle} />
                    <span id="emailError" style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.email}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">

                  <div className="form-group">
                    <label>Address</label>
                    <textarea className="form-control" name="address" rows={3} placeholder="Enter Address" defaultValue={""} onChange={textHandle} />
                    <span id="addressError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.address}</span>
                  </div>

                 <div className="form-group">
                    <label>Facebook</label>
                    <textarea className="form-control" name="facebook_link" rows={3} placeholder="Enter link" defaultValue={""} onChange={textHandle} />
                    <span id="addressError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.address}</span>
                  </div>

                  <div className="form-group">
                    <label>Twitter</label>
                    <textarea className="form-control" name="twitter_link" rows={3} placeholder="Enter link" defaultValue={""} onChange={textHandle} />
                    <span id="addressError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.address}</span>
                  </div>

                  <div className="form-group">
                    <label>Linked In</label>
                    <textarea className="form-control" name="linkedin_link" rows={3} placeholder="Enter link" defaultValue={""} onChange={textHandle} />
                    <span id="addressError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.address}</span>
                  </div>
                  <div className="form-group">
                    <label>Instagram</label>
                    <textarea className="form-control" name="instagram_link" rows={3} placeholder="Enter link" defaultValue={""} onChange={textHandle} />
                    <span id="addressError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.address}</span>
                  </div>


                </div>
              </div>
              <button type="submit" id="submitContactBtn"className="btn btn-info" style={{ float: 'right' }}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminContact
