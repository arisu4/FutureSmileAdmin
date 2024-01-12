//import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import $ from "jquery"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function EditGallery() {
    // const [input, setInput] = useState({});
    const [image, setImage] = useState({});
    const [edit, setEdit] = useState([])
    //const [picteam, setPicteam] = useState({})
    const [errors, setErrors] = useState([])
    //const navigate = useNavigate();
    const { id } = useParams()

    const baseURL = 'http://localhost:1803'

    const handleSubmit = (e) => {
        e.preventDefault()

        // $("#submitTestimonialBtn").attr("disabled", "disabled").text("Please wait...")
        // $("#titleError").text("")
        // $("#imageError").text("")


        var formData = new FormData()
        formData.append("id",edit.id)
        formData.append("title", edit.title)
        formData.append("image", image)

        //formdata.append('picteam', picteam)

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }


        // const config = {
        //   form:{
        //     contentType:'content-type=multipart/form-data'
        //   }
        // }

        const baseURL = 'http://localhost:1804'

       axios.post(`${baseURL}/admin/gallery/updategallery`,formData,config)
        .then((response) => {
        //   $("#submitGalleryBtn").attr("disabled", false).text("Submit")
          console.log(response)
  
          if (response.data.status === 1) {
            toast.success(response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2500,
              theme: "dark",
            });
            //$("#submitGalleryForm").trigger("reset")
          } else {
            toast.error(response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2500,
              theme: "dark",
            })
          }
        })

        // axios.post(`${baseURL}/admin/gallery/editgallery`,formData,config)
        //   .then((response) => {
        //     //$("#submitGalleryBtn").attr("disabled", false).text("Submit")
        //     console.log(response)

        //     if (response.data.status === 1) {
        //       toast.success(response.data.message, {
        //         position: toast.POSITION.TOP_RIGHT,
        //         autoClose: 2500,
        //         theme: "dark",
        //       });
        //       //$("#submitGalleryForm").trigger("reset")
        //     } else {
        //       toast.error(response.data.message, {
        //         position: toast.POSITION.TOP_RIGHT,
        //         autoClose: 2500,
        //         theme: "dark",
        //       })
        //     }
        //   })
        //   .catch((error) => {
        //     //$("#submitGalleryBtn").attr("disabled", false).text("Submit")
        //     if (!error?.response) {
        //       toast.error(`No response from server.`, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
        //     } else if (error.response?.status === 404) {
        //       toast.error("Not found.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
        //     } else if (error.response?.status === 500) {
        //       toast.error("Internal server error.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
        //     } else if (error.response?.status === 420 && error.response.data) {
        //       toast.error("Validation error.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" })
        //       const responseErrors = error.response.data.errors
        //       if (responseErrors) {
        //         const errorData = {}
        //         for (var errorItem of responseErrors) {
        //           if (errorItem.path === "title" && (errorData.title === "" || errorData.title === undefined)) {
        //             errorData[errorItem.path] = errorItem.msg
        //           } 
        //           else if (errorItem.path === "image" && (errorData.image === "" || errorData.image === undefined)) {
        //             errorData[errorItem.path] = errorItem.msg
        //           }
        //           // else if(errorItem.path === "image" && (errorData.image.mimetype === "image/jpg" || errorData.image.mimetype === "image/jpeg" ||errorData.image.mimetype === "image/png" )){
        //           //   errorData[errorItem.path] = errorItem.msg
        //           //   console.log(errorData.image.mimetype)
        //           // }
        //           // else if((errorData.picteam === "" || errorData.picteam === undefined)){
        //           //   errorData[errorItem.path] = errorItem.msg
        //           // }

        //           setErrors(errorData)
        //         }
        //       }
        //     } else if (error?.code) {
        //       toast.error("Code: " + error.code, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
        //     } else {
        //       toast.error("Something went wrong.",{ position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
        //     }
        //   })
    }
    const getGalleriesbyId = async() => {
        await axios.get(`${baseURL}/admin/gallery/editgallery/${id}`)
            .then(response => {
                const { editgalleries } = response.data;
                setEdit(editgalleries);
            })
            .catch(error => {
                console.log(error)
            })
    }


    useEffect(() => {
        getGalleriesbyId();
    }, []);


    const textHandle = (e) => {
        setEdit({ ...edit, [e.target.name]: e.target.value })
    }


    const imageHandle = (e) => {
        setImage(e.target.files[0])
    }

    return (
        <>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Edit Gallery Data</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to=""></Link>Gallery</li>
                                    <li className="breadcrumb-item active">Gallery</li>
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

                        <form action="/linking" id='submitGalleryForm' onSubmit={handleSubmit} method='POST' >
                            <div className="row">
                                <div className="col-sm-6">
                                    {/* text input */}
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input type="text" name="title" className="form-control" placeholder="Enter Title" onChange={textHandle} defaultValue={edit.title} />
                                        <span id="titleError" style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.title}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Old Image</label><br />
                                        <img src={process.env.REACT_APP_PUBLIC_GALLERY+edit.image} height={150} alt="gallery.jpg"/>
                                        <span id="imageError" style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.image}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input type="file" name="image" className="form-control" accept="image/png,image/jpeg,image/jpg,image/webp" placeholder="Enter Image" defaultValue={edit.image} onChange={imageHandle} />
                                        <span id="imageError" style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.image}</span>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" id="submitGalleryBtn" className="btn btn-info" style={{ float: 'right' }}>Update</button>

                        </form>

                    </div>


                </div>

            </div>
        </>
    )
}

export default EditGallery
