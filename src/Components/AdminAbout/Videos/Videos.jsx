//import React from 'react'
import React, { useState, useEffect } from 'react'
import {Link} from  'react-router-dom'
import axios from 'axios'
//import {$,jQuery} from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPaginate from 'react-paginate';
import { toast } from "react-toastify";

function Videos() {
  //$('#my-card [data-card-widget="card-refresh"]').CardRefresh(options)
  const [videos,setVideos] = useState([])
   const[totalPages ,setTotalPages]= useState(0)
   const [currentPage,setCurrentPage] = useState(1)
   const [searchItem, setSearchItem] = useState()
 
   const baseURL  =  'http://localhost:1804'
 
   const handleInputChange = (e) => {
    setSearchItem(e.target.value.trim())
  }

  const deletefn = async (id) => {
    await axios.get((`${baseURL}/admin/about/deletevideo/${id}`))
      .then((response) => {
        if (response.data.status === 1) {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "dark",
          }); window.location.reload(); //navigate('/faq')
        } else {
          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
          })
        }
      })
  }

   
   const fetchVideos =  (page) => {
         
     axios.get(`${baseURL}/admin/about/showvideos?page=${page}&pageSize=2 `)
     .then(response=>{
        const {videos,totalPages} = response.data;
         setVideos(videos);
         setTotalPages(totalPages);
     })
     .catch(error=>{
        console.log(error)
     })
   
 }
 
 useEffect(() => {
   fetchVideos(currentPage); //currentPage
 }, [currentPage]); 
 
   
 const items = [];
 
   let num = 1
   for (const datas of videos) {
 
       items.push(<tr >
           <td>{num++}</td>
           <td>{datas.links}</td>
           <td>
          <FontAwesomeIcon onClick={() => deletefn(datas.id)}  title="Delete" icon="fa-solid fa-trash-can"  className='text-danger' /> &nbsp;
           </td>
          
       </tr>
       )
   }
 
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
                <h1>Videos</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/link">Videos</a></li>
                  <li className="breadcrumb-item active">Videos</li>
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
                    <h3 className="card-title">Videos Data</h3>
                    <Link className='btn btn-info' style={{ float: 'right' }} to="/addvideos">Add Videos</Link>
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
                          <th>Slno</th>
                          <th>Links</th>
                        </tr>
                      </thead>
                      <tbody>
                      {items}


                      </tbody>
                      {/* <tfoot>
                            <tr>
                              <th>Rendering engine</th>
                              <th>Browser</th>
                              <th>Platform(s)</th>
                              <th>Engine version</th>
                              <th>CSS grade</th>
                            </tr>
                          </tfoot> */}
                    </table>

                  </div>
                  {/* /.card-body */}

                </div>
                {/* /.card */}
                {/* <button className='btn btn-primary'>Submit</button> */}
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
        {/* /.content */}
      </div>
    </>
  )
}

export default Videos
