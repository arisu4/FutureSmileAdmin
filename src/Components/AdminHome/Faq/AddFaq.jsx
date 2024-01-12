//import React from 'react'
import React, { useState } from 'react';
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery"

function AddFaq() {
    const [input, setInput] = useState({});
    const [errors, setErrors] = useState([])
  
  
    const handleSubmit = (e) => {
      e.preventDefault()
     
      $("#submitFaqBtn").attr("disabled", "disabled").text("Please wait...")
      $("#questionsError").text("")
      $("#solutionsError").text("")
    
      console.log("input", input)
      const baseURL = 'http://localhost:1804'
  
      axios.post(`${baseURL}/admin/home/createfaq`, input)
        .then((response) => {
          $("#submitFaqBtn").attr("disabled", false).text("Submit")
          
  
          console.log(response)
  
          if (response.data.status === 1) {
            
            toast.success(response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2500,
              theme: "dark",
            });
            $("#submitFaqForm").trigger("reset")
           
          } else {
  
            toast.warning(response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2500,
  
            })
          }
  
  
  
          
        }).catch((error) => {
          $("#submitFaqBtn").attr("disabled", false).text("Submit")
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
  
                if (errorItem.path === "questions" && (errorData.questions === "" || errorData.questions === undefined)) {
  
                  errorData[errorItem.path] = errorItem.msg
                } else if (errorItem.path === "solutions" && (errorData.solutions === "" || errorData.solutions === undefined)) {
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
                  <h1>Add FAQ Entries</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="/faq">FAQ</a></li>
                    <li className="breadcrumb-item active">FAQ</li>
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
              <form actions="/linking" id='submitFaqForm' onSubmit={handleSubmit} method="POST" >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Questions</label>
                      <input type="text" name="questions" className="form-control" placeholder="Enter Questions" onChange={textHandle} />
                      {/* <FormFieldError message=(error?.name)/> */}
                      <span id="questionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.questions}</span>
                    </div>
                  </div>
                
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Solutions</label>
                      <textarea className="form-control" name="solutions" rows={3} placeholder="Enter Solutions" defaultValue={""} onChange={textHandle} />
                      <span id="solutionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.solutions}</span>
                    </div>
                  </div>
                </div>
                <button type="submit" id="submitFaqBtn"className="btn btn-info" style={{ float: 'right' }}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </>
    )
}

export default AddFaq
