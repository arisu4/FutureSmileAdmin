//import React from 'react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPaginate from 'react-paginate';
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";
//import $ from "jquery"



function FaqPage() {

  ///All states are defined here
  const [queries, setQueries] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchItem, setSearchItem] = useState()
  const navigate = useNavigate();
 


  const baseURL = 'http://localhost:1804'



  const handleInputChange = (e) => {
    setSearchItem(e.target.value.trim())
  }


  const deletefn = async (id) => {
    await axios.get((`${baseURL}/admin/query/deletefaq/${id}`))
      .then((response) => {
        if (response.data.status === 1) {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "dark",
          }); navigate('/faq')
        } else {
          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
          })
        }
      })
  }

  const statusfn = async (id) => {
    await axios.post((`${baseURL}/admin/query/statusquery/${id}`))
      .then((response) => {
        if (response.data.flag === 1) {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "dark",
          },);window.location.reload(); 
        } else {
          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "dark",
          })
        }
      })
  }



  const fetchQueries = async (page, term) => {
    // const searchTerm = e.target.value.trim();
    await axios.get(`${baseURL}/admin/query/showquery?page=${page}&pageSize=2&search=${term}`)
      .then(response => {
        const { queries, totalPages } = response.data;

        setQueries(queries);
        setTotalPages(totalPages);
      })
      .catch(error => {
        console.log(error)
      })

  }


  useEffect(() => {
    fetchQueries(currentPage, searchItem);
  }, [currentPage, searchItem]);



  //Dynamic data

  const items = [];

  let num = 1
  for (const datas of queries) {

    items.push(
      <tr key={datas.id}>

        <td>{num++}</td>
        <td>{datas.questions}</td>
        <td>{datas.solutions}</td>
        <td>{datas.status == 1 ? 'Unlocked' : datas.status == 0 ? 'Locked' : null}</td>
        <td>
          <Link to={`/editfaq/${datas.id}`}><FontAwesomeIcon title="Edit" icon="fa-solid fa-pen-to-square" /></Link> &nbsp;
          <FontAwesomeIcon onClick={() => deletefn(datas.id)} title="Delete" icon="fa-solid fa-trash-can" className='text-danger' /> &nbsp;
          <FontAwesomeIcon onClick={() => statusfn(datas.id)} title="Active" icon="fa-solid fa-lock"  /> &nbsp;
        </td>
      </tr>
    )
  }


  const handlePageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage + 1)
  }

  //console.log(`incoming data`,searchResult)

  return (
    <>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>FAQ</h1>

              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/faq">FAQ </a></li>
                  <li className="breadcrumb-item active">FAQ</li>
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
                  <h3 className="card-title">FAQ Entries. </h3>

                    <Link className='btn btn-info' to="/addfaq" style={{ float: 'right' }}>Add FAQ entries.</Link>
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
                          <th>Sl no </th>
                          <th>Questions</th>
                          <th>Solutions</th>
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
        {/* /.content */}

      </div>

    </>
  )
}

export default FaqPage
