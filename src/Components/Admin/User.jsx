import React, { useState, useEffect } from 'react'
//import {Link} from  'react-router-dom'
import axios from 'axios'

// { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPaginate from 'react-paginate';



function Users() {
  const [users,setUsers] = useState([])
  const[totalPages ,setTotalPages]= useState(0)
  const [currentPage,setCurrentPage] = useState(1)
  const [searchItem, setSearchItem] = useState()
 
 
   const baseURL  =  'http://localhost:1804'
 
   const handleInputChange = (e) => {
     setSearchItem(e.target.value.trim())
   }
 
   
 
 
 
    
   const fetchUsers= async(page,term) => {
     console.log(`roles called`);
    await axios.post(`${baseURL}/admin/cred?page=${page}&pageSize=3&search=${term}`)
     .then(response=>{
       console.log("users page",response)
        const {users,totalPages} = response.data;
         setUsers(users);
         setTotalPages(totalPages);
     })
     .catch(error=>{
        console.log(error)
     })
   
 }
 
 
 
 
 useEffect(() => {
   fetchUsers(currentPage,searchItem); 
 }, [currentPage,searchItem]); 
 
 
   
 const items = [];
 
   let num = 1
   for (const datas of users) {
 
       items.push(
       <tr key={datas.id}>
           <td>{num++}</td>
           <td>{datas.email}</td>
           <td>{datas.password}</td>
           <td>{datas.status}</td>
           {/* <td>{datas.status == 1 ? 'Unlocked' : datas.status == 0 ? 'Locked' : null}</td> */}
           <td>
     
         </td>
          
       </tr>
       )
   }
 
 
 
 
 
 
  
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
            <h1>Users</h1>

          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="/link">Users</a></li>
              <li className="breadcrumb-item active">Users</li>
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
                <table id="example2" className="table table-bordered table-striped table-responsive">
                  <thead>
                    <tr>
                      <th>Sl no</th>
                      <th>Email</th>
                      <th>Password</th>

                      <th>Status</th>
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

export default Users







