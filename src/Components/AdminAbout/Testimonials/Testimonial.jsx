//import React from 'react'
import React, { useState, useEffect } from 'react'
import {Link} from  'react-router-dom'
import axios from 'axios'
//import { $ } from 'react-jquery-plugin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPaginate from 'react-paginate';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

//import DataTable from 'datatables.net';
//import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
// import $ from 'jquery'; 

function Testimonial() {
 const [testimonials,setTestimonials] = useState([])
 const[totalPages ,setTotalPages]= useState(0)
 const [currentPage,setCurrentPage] = useState(1)
 const [searchItem, setSearchItem] = useState()
 const navigate = useNavigate();

  const baseURL  =  'http://localhost:1803'

  const handleInputChange = (e) => {
    setSearchItem(e.target.value.trim())
  }

  const deletefn = async (id) => {
    await axios.get((`${baseURL}/admin/about/deletetestimonial/${id}`))
      .then((response) => {
        if (response.data.status === 1) {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "dark",
          }); 
        } else {
          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
          })
        }
      })
  }

  const statusfn = async (id) => {
    await axios.post((`${baseURL}/admin/about/statustestimonial/${id}`))
      .then((response) => {
        if (response.data.flag === 1) {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "dark",
          });
        } else {
          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "dark",
          })
        }
      })
  }


   
  const fetchTestimonials =  async(page,term) => {
        
    await axios.get(`${baseURL}/admin/about/showtestimonials?page=${page}&pageSize=2&search=${term}`)
    .then(response=>{
       const {testimonials,totalPages} = response.data;
        setTestimonials(testimonials);
        setTotalPages(totalPages);
    })
    .catch(error=>{
       console.log(error)
    })
  
}




useEffect(() => {
  fetchTestimonials(currentPage,searchItem); 
}, [currentPage,searchItem]); 


  
const items = [];

  let num = 1
  for (const datas of testimonials) {

      items.push(
      <tr key={datas.id}>
          <td>{num++}</td>
          <td>{datas.name}</td>
          <td>{datas.designation}</td>
          <td>{datas.message}</td>
          <td>{datas.status == 1 ? 'Unlocked' : datas.status == 0 ? 'Locked' : null}</td>
          <td>
          <Link to={`/edittestimonials/${datas.id}`}><FontAwesomeIcon title="Edit" icon="fa-solid fa-pen-to-square" /></Link> &nbsp;
          <FontAwesomeIcon onClick={() => deletefn(datas.id)} title="Delete" icon="fa-solid fa-trash-can" className='text-danger' /> &nbsp;
          <FontAwesomeIcon onClick={() => statusfn(datas.id)} title="Active" icon="fa-solid fa-lock"  /> &nbsp;
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
    <>
     <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Testimonials</h1>

              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/link">Testimonials </a></li>
                  <li className="breadcrumb-item active">Testimonials </li>
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
                    <h3 className="card-title">Testimonials Data</h3>
                    <Link className='btn btn-info' to="/addtestimonials" style={{ float: 'right' }}>Add Testimonials</Link> 
                  </div>
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
                          <th>Index</th>
                          <th>Name</th>
                          <th>Designation</th>
                          <th>Message</th>
                          <th>Status</th>
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
         
    </>

 
  )
  
}

export default Testimonial
