import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery"
import { useParams } from 'react-router-dom';
//import { Link } from 'react-router-dom'
import Select from 'react-select';

function AddAdmin() {
    // const [input, setInput] = useState({});
    const [edit, setEdit] = useState([]) 
    const [image, setImage] = useState({});
    const [options,setOptions]= useState([])
    const [selectedId, setSelectedId] = useState();
    const [selectedType,setSelectedType]= useState()
    // const [data, setData] = useState({
    //     name: '',
    //     email: '',
    //     phone: null,
    //     username:'',
    //     roleId: null,
    //   });
     //const [picteam, setPicteam] = useState({})
    const [errors, setErrors] = useState([])
    const { id } = useParams()
   

    const handleSubmit = (e) => {
        e.preventDefault()

        $("#submitAdminBtn").attr("disabled", "disabled").text("Please wait...")
        $("#nameError").text("")
        $("#emailError").text("")
        $("#phoneError").text("")
        $("#usernameError").text("")
        $("#passwordError").text("")
        $("#imageError").text("")
        $("#roleIdError").text("")
        $("#emailError").text("")
        $("#emailError").text("")
        $("#adminTypeError").text("")
        $("#countryIdError").text("")




        // console.log("title", input.title)

        // console.log(`frontimage`, image)


        var formData = new FormData()
        formData.append("name", edit.name)
        formData.append("email", edit.email)
        formData.append("phone", edit.phone)
        formData.append("username", edit.username)
        formData.append("password", edit.password)
        formData.append("image", image)
        formData.append("roles", edit.roles)
        formData.append("roleId", selectedId)
        formData.append("adminType", selectedType)
        formData.append("countryId", edit.countryId)
      
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

        axios.post(`${baseURL}/admin/update`, formData,config)
            .then((response) => {
                $("#submitAdminBtn").attr("disabled", false).text("Submit")
                //console.log(response)

                if (response.data.status === 1) {
                    toast.success(response.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2500,
                        theme: "dark",
                    });
                    $("#submitAdminForm").trigger("reset")
                } else {
                    toast.error(response.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2500,
                        theme: "dark",
                    })
                }
            }).catch((error) => {
                $("#submitAdminBtn").attr("disabled", false).text("Submit")
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
                            }
                            else if (errorItem.path === "email" && (errorData.email === "" || errorData.email === undefined)) {
                                errorData[errorItem.path] = errorItem.msg
                            }
                            else if(errorItem.path === "phone" && (errorData.phone === "" || errorData.phone === undefined)){
                              errorData[errorItem.path] = errorItem.msg
                              
                            }
                            // else if(errorItem.path === "username" && (errorData.username === "" || errorData.username=== undefined)(errorData.username === "username" || errorData.username === undefined)){
                            //   errorData[errorItem.path] = errorItem.msg
                            // }
                            else if(errorItem.path === "password" && (errorData.password === "" || errorData.password === undefined)){
                                errorData[errorItem.path] = errorItem.msg
                              }
                              else if(errorItem.path === "image" && (errorData.image === "" || errorData.image === undefined)){
                                errorData[errorItem.path] = errorItem.msg
                              }
                              else if(errorItem.path === "roles" && (errorData.roles === "" || errorData.roles === undefined)){
                                errorData[errorItem.path] = errorItem.msg
                              }
                              else if(errorItem.path === "roleId" && (errorData.roleid === "" || errorData.roleId === undefined)){
                                errorData[errorItem.path] = errorItem.msg
                              }
                              else if((errorData.path === "adminType" || errorData.picteam === undefined)){
                                errorData[errorItem.path] = errorItem.msg
                              } else if((errorData.path === "countryId" || errorData.picteam === undefined)){
                                errorData[errorItem.path] = errorItem.msg
                              }
                                


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
        
        setEdit({ ...edit, [e.target.name]: e.target.value })
        //{selectedValue && setInput((prev)=>({...prev,adminType:selectedValue.adminType,rolesId:selectedValue.id}))}
        //console.log("input",input);
    }


    // const imageHandle = (e) => {

    //     setImage(e.target.files[0])
    //     //setPicteam(e.target.files[0])
    // }

    const imageHandle = (e) => {
  
        setImage(e.target.files[0])
        //setPicteam(e.target.files[0])
      }
    const handleChange = (opt) => {
        // console.log("opt",opt);
        // console.log("optId",opt.id)
        // console.log("optType",opt.adminType)
      //setSelectedValue({id:opt.id,adminType:opt.adminType})
      setSelectedId(opt.id)
      setSelectedType(opt.adminType)
      //console.log("value of selection",selectedValue);
    }

    

    const fetchTypes = async() => {
        const baseURL = 'http://localhost:1804'
       await axios.get(`${baseURL}/admin/types`)
        .then(response=>{
        //   console.log(response.data);
          const options = response.data
          setOptions(options)
        })
        .catch(error=>{
           console.log(error)
        })
      
    }
 
    const getAdminbyId = async() => {
        const baseURL = 'http://localhost:1804'
        await axios.get(`${baseURL}/admin/editadmin/${id}`)
            .then(response => {
                console.log("edit admin",response.data);
                const { editadmins } = response.data;
                setEdit(editadmins);
            })
            .catch(error => {
                console.log(error)
            })
    }


    useEffect(() => {
        fetchTypes();
        getAdminbyId(); 
      }, []); 

    //   useEffect(() => {
    //     setData(prevData => ({
    //       ...prevData,
    //       roleId: roleId,
    //     }));
    //   }, [selectedValue]); 
      
      
   // console.log("options",options);
   // console.log("value",setValue);
   //console.log("selected value",selectedValue);

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Edit Admin Details</h1>
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
                    <h3 className="card-title">Edit Records</h3>
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

                    <form action="/linking" id='submitAdminForm'onSubmit={handleSubmit} method='POST' >
                        <div className="row">
                            <div className="col-sm-6">
                                {/* text input */}
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" className="form-control" placeholder="Enter Name" onChange={textHandle} defaultValue={edit.name} />
                                    <span id="nameError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.name}</span> 
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" name="email" className="form-control" placeholder="Enter Email" onChange={textHandle}defaultValue={edit.email} />
                                     <span id="emailError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.email}</span>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" name="phone" className="form-control" placeholder="Enter Phone" onChange={textHandle} defaultValue={edit.phone}  />
                                    <span id="phoneError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.phone}</span> 
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" className="form-control" placeholder="Enter Usename" onChange={textHandle} defaultValue={edit.username} />
                                    <span id="usernameError" style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.username}</span>
                                </div>
                            </div>
                        </div>
{/* 
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" name="password" className="form-control" placeholder="Enter Password" onChange={textHandle} defaultValue={edit.password}  />
                                    <span id="passwordError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.password}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Image</label>
                                    <input type="file" name="image" className="form-control" accept = "image/png,image/jpeg,image/jpg,image/webp" placeholder="Enter Image" onChange={imageHandle} defaultValue={edit.image} />
                                    <span id="imageError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.image}</span>
                                </div>
                            </div>
                        </div> */}
                        <div className="row">
                        <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Roles</label>
                                    <input type="text" name="roles" className="form-control" placeholder="Provide role"  onChange={textHandle} defaultValue={edit.roles}  />
                                    <span id="rolesError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.roles}</span>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>RolesId</label>
                                    <input type="integer" name="roleId" className="form-control" value={selectedId} placeholder={edit.roleId}  />
                                    <span id="roleIdError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.roleId}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Admin Type</label>
                                    <Select
                                    //defaultValue={edit.adminType}
                                    name='adminType'
                                    placeholder={edit.adminType}
                                    id="options.id"
                                    value={options.id}
                                    onChange={handleChange}
                                    options={options}
                                    getOptionLabel={(options) => options['adminType']}
                                    getOptionValue={(options) => options['id']} 
                                    />
                                    <span id="adminTypeError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.adminType}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Country</label>
                                    <input type="text" name="countryId" className="form-control" placeholder="Enter Country" onChange={textHandle} defaultValue={edit.countryId} />
                                    <span id="countryIdError"style={{ color: 'red', backgroundColor: '', fontSize: "14px" }}>{errors?.countryId}</span>
                                </div>
                            </div>
                        </div>
                        <button type="submit" id="submitAdminBtn" className="btn btn-info" style={{ float: 'right' }}>Update</button>

                    </form>

                </div>


            </div>

        </div>
    )
}

export default AddAdmin
