import React, { useState } from 'react';
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery"
//import { useForm } from "react-hook-form"


function AddBrands() {

  const [image, setImage] = useState({});
 // const [brandpic, setBrandpic] = useState({})
  const [errors, setErrors] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault()

    $("#submitBrandBtn").attr("disabled", "disabled").text("Please wait...")
    $("#brandError").text("")
    var formData = new FormData()

    formData.append("image", image)
    //formdata.append('brandpic', brandpic)

    // const config = {
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //   }
    // }
    const baseURL = 'http://localhost:1803'

    axios.post(`${baseURL}/admin/about/createbrands`, formData)
      .then((response) => {
        $("#submitBrandBtn").attr("disabled", false).text("Submit")
        console.log(response)

        if (response.data.status === 1) {
    
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "dark",
          });
          //$("#submitBrandBtn").trigger("reset") 
        } else {
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme:"dark"

          })
        }
      }).catch((error) => {
        $("#submitBrandBtn").attr("disabled", false).text("Submit")
        if (!error?.response) {
          toast.error(`No server response.`, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
        } else if (error.response?.status === 404) {
          toast.error("404 - Not found.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
        } else if (error.response?.status === 500) {
          toast.error("500 - Internal server error.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
        } else if (error.response?.status === 420 && error.response.data) {
          toast.error("Validation error.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
          const responseErrors = error.response.data.errors
          if (responseErrors) {
            const errorData = {}

            for (var errorItem of responseErrors) {

              if (errorItem.path === "image" && (errorData.image === "" || errorData.image === undefined)) {

                errorData[errorItem.path] = errorItem.msg
              }
              setErrors(errorData)
            }
          }
        }
        else if (error?.code) {
          toast.error("Code: " + error.code, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
        } else {
          toast.error("Something went wrong.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
        }
      })


  }


  const imageHandle = (e) => {

    setImage(e.target.files[0])
    //setBrandpic(e.target.files[0])
  }


  return (
    <>
      <div className="content-wrapper">

        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add Brands</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/link">Brands</a></li>
                  <li className="breadcrumb-item active">Add brands</li>
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
            <form action="/linking" id='submitBrandForm' onSubmit={handleSubmit}  >
              <div className="row">

                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Image</label>
                    <input type="file" name="image" className="form-control" placeholder="Enter Image" accept = "image/png,image/jpeg,image/jpg,image/webp" onChange={imageHandle} />
                    <span id="brandError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.image}</span>
                  </div>
                </div>
              </div>
              <button type="submit" id='submitBrandBtn' className="btn btn-info" style={{ float: 'right' }}>Submit</button>
            </form>

          </div>


        </div>

      </div>
    </>
  )
}

export default AddBrands
