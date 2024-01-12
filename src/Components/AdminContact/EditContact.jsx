//import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import $ from "jquery"
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function EditContact() {
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
  
  
  
      axios.post(`${baseURL}/admin/contact/updatecontact`, edit)
        .then((response) => {
          //   $("#submitFaqBtn").attr("disabled", false).text("Submit")
  
          console.log(response)
  
          if (response.data.status === 1) {
  
            toast.success(response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2500,
              theme: "dark",
            });navigate('/contact')
            //$("#submitFaqForm").trigger("reset")
          } else {
            toast.warning(response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2500,
            })
          }
        })
    }
  
    const getContactsbyId = async () => {
      await axios.get(`${baseURL}/admin/contact/editcontact/${id}`)
        .then(response => {
          const { editcontacts } = response.data;
          setEdit(editcontacts);
        })
        .catch(error => {
          console.log(error)
        })
    }
  
    useEffect(() => {
      getContactsbyId();
    }, []);
  
  
  
    const textHandle = (e) => {
      setEdit({ ...edit, [e.target.name]: e.target.value })
    }
  
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Edit Contact Records</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/faq">Contact</a></li>
                  <li className="breadcrumb-item active">Contact</li>
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
                    <label>Mobile Number</label>
                    <input type="text" name="mobile" className="form-control" onChange={textHandle} defaultValue={edit.mobile} placeholder="Edit Questions" />
                    {/* <span id="questionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.questions}</span> */}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" className="form-control" onChange={textHandle} defaultValue={edit.email} placeholder="Edit Questions" />
                    {/* <span id="questionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.questions}</span> */}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Facebook</label>
                    <input type="text" name="facebook_link" className="form-control" onChange={textHandle} defaultValue={edit.facebook_link} placeholder="Edit Facebook link" />
                    {/* <span id="questionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.questions}</span> */}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Twitter</label>
                    <input type="text" name="twitter_link" className="form-control" onChange={textHandle} defaultValue={edit.twitter_link} placeholder="Edit Twitter link" />
                    {/* <span id="questionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.questions}</span> */}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Linked In</label>
                    <input type="text" name=" linkedin_link" className="form-control" onChange={textHandle} defaultValue={edit. linkedin_link} placeholder="Edit LinkedIn" />
                    {/* <span id="questionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.questions}</span> */}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Instagram</label>
                    <input type="text" name="instagram_link" className="form-control" onChange={textHandle} defaultValue={edit.instagram_link} placeholder="Edit Instagram" />
                    {/* <span id="questionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.questions}</span> */}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea className="form-control" name="address" onChange={textHandle} rows={3} defaultValue={edit.address} placeholder="Edit Solutions" />
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

export default EditContact
