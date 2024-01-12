//import React from 'react'
import React, { useState, useEffect } from 'react'
//import {Link} from  'react-router-dom'
import axios from 'axios'
//import { $ } from 'react-jquery-plugin'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPaginate from 'react-paginate';
//import { toast } from "react-toastify";
//import { useNavigate } from "react-router-dom";

//import DataTable from 'datatables.net';
//import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
// import $ from 'jquery'; 

function Permissions() {
  const [permissions, setPermissions] = useState([])
  const [input, setInput] = useState({})
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchItem, setSearchItem] = useState()

  
  const [checked, setChecked] = useState([]);

  //const navigate = useNavigate();

  const baseURL = 'http://localhost:1804'


  const handleInputChange = (e) => {
    setSearchItem(e.target.value.trim())
  }




  const fetchModules = async (page,term) => {

    await axios.get(`${baseURL}/admin/permission?page=${page}&pageSize=21&search=${term}`)
      .then(response => {
        const { permissions, totalPages } = response.data;
        setPermissions(permissions);
        setTotalPages(totalPages);
      })
      .catch(error => {
        console.log(error)
      })

  }




  // const handleChange = (e,id,role_id,module_id,sub_module_id) => {
  //   {e.target.value == 'on' ? setChecked(false):setChecked(true)}
    
  //   console.log('e.target.name',e.target.name,"e.target.value", e.target.value);
  //   //e.preventDefault()
  //   const obj={
  //     id:id,
  //     role_id:role_id,
  //     module_id:module_id,
  //     sub_module_id:sub_module_id
  //   }
  //   setInput({ ...input,obj,[e.target.name]: e.target.value })
  // }

  // console.log("input details",input)



  useEffect(() => {
    fetchModules(currentPage, searchItem);
  }, [currentPage, searchItem]);



  // const items = [];

  // let num = 1
  // for (const datas of permissions) {

  //   items.push(
  //     <tr key={datas.id}>
  //       <td>{num++}</td>
  //       <td>{datas.role_id}</td>
  //       <td>{datas.module_id}</td>
  //       <td>{datas.sub_module_id}</td>
  //       {datas.module_access === 1 || checked == true?
  //         <td><input type="checkbox" onChange={(e)=>handleChange(e,datas.id,datas.role_id,datas.module_id,datas.sub_module_id)} name="module_access"  checked/></td> :
  //         checked == false ? <td><input type="checkbox" onChange={(e)=>handleChange(e,datas.id,datas.role_id,datas.module_id,datas.sub_module_id)} name="module_access"  /></td>: null}

  //       {datas.sub_module_access == 1 ?
  //       <td><input type="checkbox" onChange={(e)=>handleChange(e,datas.id,datas.role_id,datas.module_id,datas.sub_module_id)} name="sub_module_access" value='1' checked /></td>:
  //       <td><input type="checkbox" onChange={(e)=>handleChange(e,datas.id,datas.role_id,datas.module_id,datas.sub_module_id)} name="sub_module_access" value='0' /></td>}

  //       {datas.access_item == 1 ?
  //       <td><input type="checkbox" onChange={(e)=>handleChange(e,datas.id,datas.role_id,datas.module_id,datas.sub_module_id)} name="acess_item" value='1' checked /></td>:
  //       <td><input type="checkbox" onChange={(e)=>handleChange(e,datas.id,datas.role_id,datas.module_id,datas.sub_module_id)} name="access_item" value='0' /></td>}
       
  //      {datas.details_item == 1 ?
  //       <td><input type="checkbox" onChange={(e)=>handleChange(e,datas.id,datas.role_id,datas.module_id,datas.sub_module_id)} name="details_item" value='1' checked /></td>:
  //       <td><input type="checkbox" onChange={(e)=>handleChange(e,datas.id,datas.role_id,datas.module_id,datas.sub_module_id)} name="details_item" value='0' /></td>}
       
 
  //       {datas.add_item == 1 ?
  //         <td><input type="checkbox" onChange={(e)=>handleChange(e,datas.id,datas.role_id,datas.module_id,datas.sub_module_id)} name="add_item" value='1' checked /></td> :
  //         <td><input type="checkbox" onChange={(e)=>handleChange(e,datas.id,datas.role_id,datas.module_id,datas.sub_module_id)} name="add_item" value='0' /></td>}

  //       {datas.edit_item == 1 ?
  //         <td><input type="checkbox" onChange={(e)=>handleChange(e,datas.id,datas.role_id,datas.module_id,datas.sub_module_id)} name="edit_item" value='1' checked /></td> :
  //         <td><input type="checkbox" onChange={(e)=>handleChange(e,datas.id,datas.role_id,datas.module_id,datas.sub_module_id)} name="edit_item" value='0' /></td>}

  //      {datas.delete_item == 1 ?
  //         <td><input type="checkbox" onChange={(e)=>handleChange(e,datas.id,datas.role_id,datas.module_id,datas.sub_module_id)} name="delete_item" value='1' checked /></td> :
  //         <td><input type="checkbox" onChange={(e)=>handleChange(e,datas.id,datas.role_id,datas.module_id,datas.sub_module_id)} name="delete_item" value='0' /></td>}

  //        {datas.status_item == 1 ?
  //         <td><input type="checkbox" onChange={(e)=>handleChange(e,datas.id,datas.role_id,datas.module_id,datas.sub_module_id)} name="status_item" value='1' checked /></td> :
  //         <td><input type="checkbox" onChange={(e)=>handleChange(e,datas.id,datas.role_id,datas.module_id,datas.sub_module_id)} name="status_item" value='0' /></td>}
 
  //     </tr>
  //   )
  // }
  const handleSubmit = async(e) => {
    // console.log("input",input)
    console.log("checked",checked)
    e.preventDefault()
    const baseURL = 'http://localhost:1804'
   await axios.post(`${baseURL}/admin/updatepermission`,checked)
    .then(response=>{
      console.log(response);
    })
  
  }

  const handleChange =(event)=>{
    const {value,checked,name,id} = event.target
    console.log('checked',checked);
    const obj={
      id:id,
      name:name,
      value:value
    }
    if(checked){
      setChecked(pre=>[...pre,obj])
    }else(
      setChecked(pre=>{
        return[...pre.filter(skill => skill === name)]
      })
    )
 }
 

  const items = [];

  let num = 1
  for (const datas of permissions) {

    items.push(
      <tr key={datas.id}>
        <td>{num++}</td>
        <td>{datas.role_id}</td>
        <td>{datas.module_id}</td>
        <td>{datas.sub_module_id}</td>
      
        <td><input type="checkbox" value="1" id={datas.id} onChange={handleChange}  name="module_access"  checked = {datas.module_access == 1}/></td>
        <td><input type="checkbox" value="1" id={datas.id}onChange={handleChange}  name="sub_module_access"  /></td>
        <td><input type="checkbox" value="1" id={datas.id} onChange={handleChange}  name="access_item"  /></td>
        <td><input type="checkbox" value="1"id={datas.id}onChange={handleChange}  name="add_item"  /></td>
        <td><input type="checkbox" value="1" id={datas.id} onChange={handleChange}  name="edit_item"  /></td>
        <td><input type="checkbox" value="1" id={datas.id} onChange={handleChange}  name="details_item"  /></td>
        <td><input type="checkbox" value="1"  id={datas.id} onChange={handleChange}  name="delete_item"  /></td>
        <td><input type="checkbox" value="1"  id={datas.id} onChange={handleChange}  name="status_item"  /></td>
      </tr>
    )
  }



  const handlePageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage + 1)
  }

  return (
    <>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Permissions</h1>

              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/link">Permisssions</a></li>
                  <li className="breadcrumb-item active">Permissions</li>
                </ol>
              </div>
            </div>
          </div>

        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">

                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Permission access</h3>
                    {/* <Link className='btn btn-info' to="/addtestimonials" style={{ float: 'right' }}>Add Roles</Link>  */}
                  </div>
                  <form onSubmit={handleSubmit} >

                    <div className="input-group input-group-sm container mt-3 w-25 mr-5 " id="searchform">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-gradient-info ">Search</span>
                      </div>
                      <input id="searchinput" type="text" placeholder="Type to Search..." onChange={handleInputChange} className="form-control" />
                    </div>
                    <div className="card-body">
                    <table id="example2" className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Sl no</th>
                          <th>Role_id</th>
                          <th>Module_id</th>
                          <th>Sub_module_id</th>
                          <th>Module_access</th>
                          <th>Sub_Module_access</th>
                          <th>Access_item</th>
                          <th>Add_item</th>
                          <th>Edit_Item</th>
                          <th>Details_item</th>
                          <th>Delete_Item</th>
                          <th>Status_item</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items}
                      </tbody>

                    </table>

                  </div>
                  <button type="submit" className="btn btn-info" style={{ float: 'left' }}>Submit</button>
                  </form>
                  {/* /.card-header */}
                 

                  {/* /.card-body */}
                </div>
                
                {/* /.card */}
                {/* <a className='btn btn-primary' >Submit</a> */}
                <div className='float-right'>
                  <ReactPaginate
                    breakLabel="..."
                    onPageChange={handlePageChange}
                    initialPage={0}
                    //forcePage ={currentPage}
                    //pageRangeDisplayed={5}
                    pageCount={totalPages}
                    previousLabel="<<Previous"
                    nextLabel="Next>>"
                    renderOnZeroPageCount={null}
                    activeClassName={"active"}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                  />
                </div>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
      </div>

    </>


  )

}

export default Permissions
