//import React from 'react'
import React, { useState, useEffect } from 'react'
import {Link} from  'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPaginate from 'react-paginate';

function OurStory() {
  const [stories,setStories] = useState([])
 const[totalPages ,setTotalPages]= useState(0)
const [currentPage,setCurrentPage] = useState(1)
const [searchItem, setSearchItem] = useState()
 
   const baseURL  =  'http://localhost:1804'
 
   const handleInputChange = (e) => {
    setSearchItem(e.target.value.trim())
  }
    
   const fetchStories =  (page) => {
     axios.get(`${baseURL}/admin/about/showstory?page=${page}&pageSize=1`)
     .then(response=>{
        const {stories,totalPages} = response.data;
         setStories(stories);
         setTotalPages(totalPages);
     })
     .catch(error=>{
        console.log(error)
     })
   
 }
 
 useEffect(() => {
   fetchStories(currentPage); 
 }, [currentPage]); 
 
 
   
 const items = [];
 
   let num = 1
   for (const datas of stories) {
 
       items.push(<tr >
           <td>{num++}</td>
           <td>{datas.description}</td>
           <td>{<img src={process.env.REACT_APP_PUBLIC_STORY+datas.image1} height={80} alt="story.jpg"/>}</td>
           <td>{<img src={process.env.REACT_APP_PUBLIC_STORY+datas.image2} height={80} alt="story.jpg"/>}</td>
           <td>{<img src={process.env.REACT_APP_PUBLIC_STORY+datas.image3} height={80} alt="story.jpg"/>}</td>
           <td>{<img src={process.env.REACT_APP_PUBLIC_STORY+datas.image4} height={80} alt="story.jpg"/>}</td>
         
           <td>
          <FontAwesomeIcon title="Edit"icon="fa-solid fa-pen-to-square" /> &nbsp; 
          <FontAwesomeIcon  title="Delete" icon="fa-solid fa-trash-can"  className='text-danger'  /> &nbsp;  
          <FontAwesomeIcon title="Active" icon="fa-solid fa-lock" /> &nbsp; 
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
                <h1>Story Data</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/link">Story</a></li>
                  <li className="breadcrumb-item active">Story</li>
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
                    <h3 className="card-title">Story</h3>
                    <Link className='btn btn-info'style={{ float: 'right' }} to="/addstory">Add Story</Link>
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
                    <table id="example1" className="table table-bordered table-striped">
                      <thead>
                        <tr>
                        <th>Sl no</th>
                          <th>Description</th>
                          <th>Image_1</th>
                          <th>Image_2</th>
                          <th>Image_3</th>
                          <th>Image_3</th>
                          <th>Actions</th> 
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

export default OurStory
