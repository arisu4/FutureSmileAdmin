//import React from 'react'
import React, { useState, useEffect } from 'react'
import {Link} from  'react-router-dom'
import axios from 'axios'
//import { $ } from 'react-jquery-plugin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPaginate from 'react-paginate';
//import { toast } from "react-toastify";
//import { useNavigate } from "react-router-dom";

//import DataTable from 'datatables.net';
//import 'bootstrap/dist/css/bootstrap.min.css';d
// import 'jquery/dist/jquery.min.js';
// import $ from 'jquery'; 

function Roles() {
 const [roles,setRoles] = useState([])
 const[totalPages ,setTotalPages]= useState(0)
 const [currentPage,setCurrentPage] = useState(1)
 const [searchItem, setSearchItem] = useState()
 //const navigate = useNavigate();

  const baseURL  =  'http://localhost:1804'

  const handleInputChange = (e) => {
    setSearchItem(e.target.value.trim())
  }

  

//   const statusfn = async (id) => {
//     await axios.post((`${baseURL}/admin/about/statustestimonial/${id}`))
//       .then((response) => {
//         if (response.data.status=== 1) {
//           toast.success(response.data.message, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 2500,
//             theme: "dark",
//           });
//         } else {
//           toast.warning(response.data.message, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 2500,
//             theme: "dark",
//           })
//         }
//       })
//   }


   
  const fetchRoles= async(page,term) => {
    console.log(`roles called`);
   await axios.post(`${baseURL}/admin/roles?page=${page}&pageSize=2&search=${term}`)
    .then(response=>{
       const {roles,totalPages} = response.data;
        setRoles(roles);
        setTotalPages(totalPages);
    })
    .catch(error=>{
       console.log(error)
    })
  
}




useEffect(() => {
  fetchRoles(currentPage,searchItem); 
}, [currentPage,searchItem]); 


  
const items = [];

  let num = 1
  for (const datas of roles) {

      items.push(
      <tr key={datas.id}>
          <td>{num++}</td>
          <td>{datas.role}</td>
          <td>{datas.role_description}</td>
          <td>{datas.adminType}</td>
          <td>{datas.user_id}</td>
          {/* <td>{datas.status == 1 ? 'Unlocked' : datas.status == 0 ? 'Locked' : null}</td> */}
          <td>
         <Link to={`/permissions`}><FontAwesomeIcon title="Edit" icon="fa-solid fa-pen-to-square" /></Link> &nbsp;
        </td>
         
      </tr>
      )
  }



// $('#example2').DataTable({
//   "paging": true,
//   "lengthChange": false,
//   "searching": true,
//   "ordering": true,
//   "info": true,
  
//   "autoWidth": false,
//   "responsive": true,

// })


 
const handlePageChange = ({selected:selectedPage})=>{
  setCurrentPage(selectedPage+1)
  
}
  
  return (
  
     <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Roles</h1>

              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/link">Roles</a></li>
                  <li className="breadcrumb-item active">Roles</li>
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
                  {/* <div className="card-header">
                    <h3 className="card-title">Different Roles</h3>
                    <Link className='btn btn-info' to="/addtestimonials" style={{ float: 'right' }}>Add Roles</Link> 
                  </div> */}
                  <form>
                  
                  <div className="input-group input-group-sm container mt-3 w-25 mr-5 " id="searchform">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-gradient-info ">Search</span>
                    </div>
                    <input id="searchinput" type="text" placeholder="Type to Search..." onChange={handleInputChange} className="form-control" />
                  </div>
                </form>
                  {/* /.card-header */}
                  <div className="card-body">
                    <table id="example2" className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Sl no</th>
                          <th>Roles</th>
                          <th>Description</th>
                          <th>Type</th>
                          <th>User_Id</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                         {items}
                      </tbody>
                   
                    </table>
                  </div>
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
         
  

 
  )
  
}

export default Roles
