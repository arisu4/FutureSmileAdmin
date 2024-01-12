//import React from 'react'
import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import $ from "jquery"
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function EditTestimonials() {
  const [edit, setEdit] = useState([])
  const navigate = useNavigate();
  const { id } = useParams()

  const baseURL = 'http://localhost:1804'

  const handleSubmit = (e) => {
    e.preventDefault()

    //   $("#submitFaqBtn").attr("disabled", "disabled").text("Please wait...")
    //   $("#questionsError").text("")
    //   $("#solutionsError").text("")

    //console.log("edit object", edit)
    // var formData = new FormData()
    // formData.append("id",id)
    // formData.append("questions", edit.questions)
    // formData.append("solutions", edit.solutions)



    axios.post(`${baseURL}/admin/about/updatetestimonial`, edit)
      .then((response) => {
        //   $("#submitFaqBtn").attr("disabled", false).text("Submit")

        console.log(response)

        if (response.data.status === 1) {

          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "dark",
          });navigate('/testimonials')
          //$("#submitFaqForm").trigger("reset")
        } else {
          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
          })
        }
      })
  }

  const getTestimonialsbyId = async () => {
    await axios.get(`${baseURL}/admin/about/edittestimonial/${id}`)
      .then(response => {
        const { edittestimonials } = response.data;
        setEdit(edittestimonials);
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getTestimonialsbyId();
  }, []);



  const textHandle = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value })
  }

  
          
 
        // .catch((error) => {
        //   $("#submitTestimonialBtn").attr("disabled", false).text("Submit")
        //   console.log(error.response?.status)
        //   if (!error?.response) {
  
        //     toast.error(`No response from server.`, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
        //   } else if (error.response?.status === 404) {
        //     toast.error("Page not found.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
        //   } else if (error.response?.status === 500) {
        //     toast.error("Internal server error.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
        //   } else if (error.response?.status === 420 && error.response.data) {
        //     toast.error("Validation error.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
        //     const responseErrors = error.response.data.errors
        //     if (responseErrors) {
        //       const errorData = {}
  
        //       for (var errorItem of responseErrors) {
  
        //         if (errorItem.path === "name" && (errorData.name === "" || errorData.name === undefined)) {
  
        //           errorData[errorItem.path] = errorItem.msg
        //         } else if (errorItem.path === "designation" && (errorData.designation === "" || errorData.designation === undefined)) {
        //           errorData[errorItem.path] = errorItem.msg
        //         } else if (errorItem.path === "message" && (errorData.message === "" || errorData.message === undefined)) {
  
        //           errorData[errorItem.path] = errorItem.msg
        //         }
        //         setErrors(errorData)
        //       }
        //     }
        //   } else if (error?.code) {
        //     toast.error("Code: " + error.code, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
        //   } else {
        //     toast.error("Something went wrong.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
        //   }
        // })
    
  
   

  return (
    <>
        <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Edit Testimonial Data</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/faq">Testimonial</a></li>
                  <li className="breadcrumb-item active">Testimonial</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <div className="card card-default">
          <div className="card-header">
            <h3 className="card-title">Please Edit Data</h3>
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
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" onChange={textHandle} defaultValue={edit.name} placeholder="Edit Name" />
                    {/* <span id="questionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.questions}</span> */}
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Designation</label>
                    <input type="text" name="designation" className="form-control" onChange={textHandle} defaultValue={edit.designation} placeholder="Edit Designation" />
                    {/* <span id="questionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.questions}</span> */}
                  </div>
                </div>

              </div>
              
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" name="message" onChange={textHandle} rows={3} defaultValue={edit.message} placeholder="Edit Message" />
                    {/* <span id="solutionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.solutions}</span> */}
                  </div>
                </div>
              </div>
              <button type="submit" id="submitFaqBtn" className="btn btn-info" style={{ float: 'right' }}>Update</button>
            </form>
          </div>

        </div>
      </div>
    </>
  )

  }
export default EditTestimonials
