
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import $ from "jquery"
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function EditFaq() {
  const [edit, setEdit] = useState([])
  const navigate = useNavigate();
  const { id } = useParams()

  const baseURL = 'http://localhost:1803'

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



    axios.post(`${baseURL}/admin/query/updatefaq`, edit)
      .then((response) => {
        //   $("#submitFaqBtn").attr("disabled", false).text("Submit")

        console.log(response)

        if (response.data.status === 1) {

          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "dark",
          });navigate('/faq')
          //$("#submitFaqForm").trigger("reset")
        } else {
          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
          })
        }
      })
  }

  const getQueriesbyId = async () => {
    await axios.get(`${baseURL}/admin/query/editfaq/${id}`)
      .then(response => {
        const { editqueries } = response.data;
        setEdit(editqueries);
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getQueriesbyId();
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
                <h1>Edit FAQ Entries</h1>
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
                    <label>Questions</label>
                    <input type="text" name="questions" className="form-control" onChange={textHandle} defaultValue={edit.questions} placeholder="Edit Questions" />
                    {/* <span id="questionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.questions}</span> */}
                  </div>
                </div>

              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Solutions</label>
                    <textarea className="form-control" name="solutions" onChange={textHandle} rows={3} defaultValue={edit.solutions} placeholder="Edit Solutions" />
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

export default EditFaq
