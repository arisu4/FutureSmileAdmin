import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery"
import { Link } from 'react-router-dom'
import Select, { components } from 'react-select';

function AddAdmin() {
    const [input, setInput] = useState({});
    const [image, setImage] = useState({});
    const [options,setOptions]= useState([])
    const [value, setValue] = useState([]);
    //const [picteam, setPicteam] = useState({})
    const [errors, setErrors] = useState([])

   

    const handleSubmit = (e) => {
        e.preventDefault()

        $("#submitTestimonialBtn").attr("disabled", "disabled").text("Please wait...")
        $("#titleError").text("")
        $("#imageError").text("")

        console.log("title", input.title)

        console.log(`frontimage`, image)


        var formData = new FormData()
        formData.append("title", input.title)
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

        axios.post(`${baseURL}/admin/gallery/creategallery`, formData, config)
            .then((response) => {
                $("#submitGalleryBtn").attr("disabled", false).text("Submit")
                console.log(response)

                if (response.data.status === 1) {
                    toast.success(response.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2500,
                        theme: "dark",
                    });
                    $("#submitGalleryForm").trigger("reset")
                } else {
                    toast.error(response.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2500,
                        theme: "dark",
                    })
                }
            }).catch((error) => {
                $("#submitGalleryBtn").attr("disabled", false).text("Submit")
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
                            if (errorItem.path === "title" && (errorData.title === "" || errorData.title === undefined)) {
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
                    toast.error("Something went wrong.", { position: toast.POSITION.TOP_RIGHT, autoClose: 2000, theme: "dark" });
                }
            })


    }



    const textHandle = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }


    // const imageHandle = (e) => {

    //     setImage(e.target.files[0])
    //     //setPicteam(e.target.files[0])
    // }

    const handleChange = () => {
      setValue(value) 

    }

    const fetchTypes = async() => {
        const baseURL = 'http://localhost:1804'
       await axios.get(`${baseURL}/admin/types`)
        .then(response=>{
          console.log(response.data);
          const options = response.data
          setOptions(options)
        })
        .catch(error=>{
           console.log(error)
        })
      
    }


    useEffect(() => {
        fetchTypes(); 
      }, []); 
      
      
    console.log("options",options);
   // console.log("value",setValue);


    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Admin</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/link">Admin</a></li>
                                <li className="breadcrumb-item active">Admin</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <div className="card card-default">
                <div className="card-header">
                    <h3 className="card-title">Please Add Records</h3>
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

                    <form action="/linking" onSubmit={handleSubmit} method='POST' >
                        <div className="row">
                            <div className="col-sm-6">
                                {/* text input */}
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" className="form-control" placeholder="Enter Name" onChange={textHandle} />
                                    {/* <span id="titleError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.title}</span> */}
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" name="email" className="form-control" placeholder="Enter Email" onChange={textHandle} />
                                    {/* <span id="imageError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.image}</span> */}
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" name="phone" className="form-control" placeholder="Enter Phone" onChange={textHandle} />
                                    {/* <span id="descriptionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.description}</span> */}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" className="form-control" placeholder="Enter Usename" onChange={textHandle} />
                                    {/* <span id="descriptionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.description}</span> */}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" name="password" className="form-control" placeholder="Enter Password" onChange={textHandle} />
                                    {/* <span id="descriptionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.description}</span> */}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Image</label>
                                    <input type="text" name="username" className="form-control" placeholder="Enter Image" onChange={textHandle} />
                                    {/* <span id="descriptionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.description}</span> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>RolesId</label>
                                    <input type="text" name="roleId" className="form-control" placeholder="Role Id" onChange={textHandle} />
                                    {/* <span id="descriptionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.description}</span> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Admin Type</label>
                                    <Select
                                     value={value}
                                     onChange={handleChange}
                                     options={options}
                                     getOptionLabel={(options) => options['adminType']}
                                     getOptionValue={(options) => options['id']} 
                                    />
                                    {/* <span id="descriptionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.description}</span> */}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Country</label>
                                    <input type="text" name="countryId" className="form-control" placeholder="Enter Country" onChange={textHandle} />
                                    {/* <span id="descriptionError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.description}</span> */}
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-info" style={{ float: 'right' }}>Submit</button>

                    </form>

                </div>


            </div>

        </div>
    )
}

export default AddAdmin
