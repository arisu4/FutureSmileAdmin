//import React from 'react'
import React, { useState } from 'react';
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 import $ from "jquery"



function AddTeam() {
  const [input, setInput] = useState({});
  const [image, setImage] = useState({});
  //const [picteam, setPicteam] = useState({})
  const [errors, setErrors] = useState([])



  const handleSubmit = (e) => {
    e.preventDefault()

    $("#submitemberBtn").attr("disabled", "disabled").text("Please wait...")
    $("#nameError").text("")
    $("#designationError").text("")
    $("#imageError").text("") 
    console.log("input", input)
    console.log(input.name)
    console.log(`frontimage`,image)
    

    var formData = new FormData()
    formData.append("name", input.name)
    formData.append("designation", input.designation)
    formData.append("image", image)
   
    //formdata.append('picteam', picteam)
   
   
    // const config = {
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //   }
    // }
   
    const baseURL = 'http://localhost:1803'

    axios.post(`${baseURL}/admin/about/createmembers`, formData )
      .then((response) => {
        $("#submitMemberBtn").attr("disabled", false).text("Submit")
        console.log(response)

        if (response.data.status === 1) {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "dark",
          });
          $("#submitMemberForm").trigger("reset")
        } else {
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "dark",
          })
        }
      }).catch((error) => {
        $("#submitMemberBtn").attr("disabled", false).text("Submit")
        if (!error?.response) {
          toast.error(`No response from server.`, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
        } else if (error.response?.status === 404) {
          toast.error("Not found.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
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
              } 
              else if (errorItem.path === "image" && (errorData.image === "" || errorData.image === undefined)) {
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
    setInput({...input, [e.target.name]: e.target.value })
  }


  const imageHandle = (e) => {
  
    setImage(e.target.files[0])
    //setPicteam(e.target.files[0])
  }
  

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add members</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/link">Members</a></li>
                  <li className="breadcrumb-item active">Add member</li>
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

            <form action="/linking" id='submitMemberForm' onSubmit={handleSubmit} method='POST' >
              <div className="row">
                <div className="col-sm-6">
                  {/* text input */}
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter Name" onChange={textHandle} />
                    <span id="nameError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.name}</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Designation</label>
                    <input type="text" name="designation" className="form-control" placeholder="Enter Designation" onChange={textHandle} />
                    <span id="designationError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.designation}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Image</label>
                    <input type="file" name="image" className="form-control" placeholder="Enter Image" accept = "image/png,image/jpeg,image/jpg,image/webp" onChange={imageHandle} />
                    <span id="imageError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.image}</span>
                  </div>
                </div>

              </div>
              <button type="submit" id="submitMemberBtn"className="btn btn-info" style={{ float: 'right' }}>Submit</button>

            </form>

          </div>


        </div>

      </div>
    </>
  )
}

export default AddTeam
