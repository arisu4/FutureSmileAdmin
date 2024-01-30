// Original code
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import ReactPaginate from 'react-paginate';

// function Permissions() {
//   const [permissions, setPermissions] = useState([])
//   const [totalPages, setTotalPages] = useState(0)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [searchItem, setSearchItem] = useState()


//   const baseURL = 'http://localhost:1804'

//   const handleInputChange = (e) => {
//     setSearchItem(e.target.value.trim())
//   }


//   const fetchModules = async (page,term) => {

//     await axios.get(`${baseURL}/admin/permission?page=${page}&pageSize=21&search=${term}`)
//       .then(response => {
//         //console.log('response', response.data.PermissionData.data);
//         //setPermissions(response.data.PermissionData.data)
//         const { permissions, totalPages } = response.data;
//          setPermissions(permissions);
//         setTotalPages(totalPages);
//          console.log('permissions', permissions);
//       })
//       .catch(error => {
//         console.log(error)
//       })

//   }


//   useEffect(() => {
//     fetchModules(currentPage, searchItem);
//   }, [currentPage, searchItem]);


//   const handleChange = (e, id, index, value) => {
//     for (let x of permissions) {
//       if (x.id == id) {
//         if (e.target.name === 'module_access') {
//           //console.log('yes');
//           if (value == 1) {
//             permissions[index].module_access = 0
//             return setPermissions([...permissions])
//           }
//           else if (value == 0) {
//             permissions[index].module_access = 1
//             return setPermissions([...permissions])
//           }
//         }
//         else if(e.target.name === 'sub_module_access'){
//           if (value == 1) {
//             permissions[index].sub_module_access = 0
//             return setPermissions([...permissions])
//           }
//           else if (value == 0) {
//             permissions[index].sub_module_access = 1
//             return setPermissions([...permissions])
//           }
//         }
//         else if(e.target.name == 'access_item'){
//           if (value == 1) {
//             permissions[index].access_item = 0
//             return setPermissions([...permissions])
//           }
//           else if (value == 0) {
//             permissions[index].access_item = 1
//             return setPermissions([...permissions])
//           }
//          } else if(e.target.name == 'details_item'){
//           if (value == 1) {
//             permissions[index].details_item = 0
//             return setPermissions([...permissions])
//           }
//           else if (value == 0) {
//             permissions[index].details_item = 1
//             return setPermissions([...permissions])
//           }
//          }
//        else if(e.target.name == 'add_item'){
//         if (value == 1) {
//           permissions[index].add_item = 0
//           return setPermissions([...permissions])
//         }
//         else if (value == 0) {
//           permissions[index].add_item = 1
//           return setPermissions([...permissions])
//         }
//        } else if(e.target.name == 'edit_item'){
//         if (value == 1) {
//           permissions[index].edit_item = 0
//           return setPermissions([...permissions])
//         }
//         else if (value == 0) {
//           permissions[index].edit_item = 1
//           return setPermissions([...permissions])
//         }
//        }
//        else if(e.target.name == 'delete_item'){
//         if (value == 1) {
//           permissions[index].delete_item = 0
//           return setPermissions([...permissions])
//         }
//         else if (value == 0) {
//           permissions[index].delete_item = 1
//           return setPermissions([...permissions])
//         }
//        }
//        else if(e.target.name == 'status_item'){
//         if (value == 1) {
//           permissions[index].status_item = 0
//           return setPermissions([...permissions])
//         }
//         else if (value == 0) {
//           permissions[index].status_item = 1
//           return setPermissions([...permissions])
//         }
//        }
//       }
//     }

//   }


//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('permissions after', permissions);
//     axios.post(`${baseURL}/admin/updatepermission`, permissions)
//       .then((response) => {
//         console.log('response after', response);
//       }).catch((err) => {
//         console.log('err', err);
       
//       })
//   }

//   const handlePageChange = ({ selected: selectedPage }) => {
//     setCurrentPage(selectedPage + 1)
//   }

//   return (
//     <>
//       <div className="content-wrapper">
//         {/* Content Header (Page header) */}
//         <section className="content-header">
//           <div className="container-fluid">
//             <div className="row mb-2">
//               <div className="col-sm-6">
//                 <h1>Permissions</h1>

//               </div>
//               <div className="col-sm-6">
//                 <ol className="breadcrumb float-sm-right">
//                   <li className="breadcrumb-item"><a href="/link">Permisssions</a></li>
//                   <li className="breadcrumb-item active">Permissions</li>
//                 </ol>
//               </div>
//             </div>
//           </div>

//         </section>

//         <section className="content">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-12">

//                 <div className="card">
//                   <div className="card-header">
//                     <h3 className="card-title">Permission access</h3>
//                     {/* <Link className='btn btn-info' to="/addtestimonials" style={{ float: 'right' }}>Add Roles</Link>  */}
//                   </div>
//                   <form onSubmit={(e) => handleSubmit(e)}>

//                     <div className="input-group input-group-sm container mt-3 w-25 mr-5 " id="searchform">
//                       <div className="input-group-prepend">
//                         <span className="input-group-text bg-gradient-info ">Search</span>
//                       </div>
//                       <input id="searchinput" type="text" placeholder="Type to Search..." onChange={handleInputChange} className="form-control" />
//                     </div>
//                     {/* /.card-header */}
//                     <div className="card-body">
//                       <table id="example2" className="table table-bordered table-striped table-responsive">
//                         <thead>
//                           <tr>
//                             <th>Sl no</th>
//                             <th>Role Id</th>
//                             <th>Module Id</th>
//                             <th>Sub module Id</th>
//                             <th>Module access</th>
//                             <th>Sub Module access</th>
//                             <th>Access item</th>
//                             <th>Details item</th>
//                             <th>Add item</th>
//                             <th>Edit item</th>
//                             <th>Delete item</th>
//                             <th>Status item</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {permissions &&
//                             permissions.map((datas, index) => (
//                               <tr key={datas.id}>
//                                 <td>{index + 1}</td>
//                                 <td>{datas.roleId}</td>
//                                 <td>{datas.moduleId}</td>
//                                 <td>{datas.subModuleId}</td>
//                                 <td><input type="checkbox" checked={datas.module_access == 1} onChange={(e) => handleChange(e, datas.id, index, datas.module_access)} name="module_access"   /></td>
//                                 <td><input type="checkbox" checked={datas.sub_module_access == 1}  onChange={(e) => handleChange(e, datas.id, index, datas.sub_module_access)} name="sub_module_access"  /></td>
//                                 <td><input type="checkbox" checked={datas.access_item == 1} onChange={(e) => handleChange(e, datas.id, index, datas.access_item )} name="access_item" /></td>
//                                 <td><input type="checkbox" checked={datas.details_item == 1} onChange={(e) => handleChange(e, datas.id, index, datas.details_item )} name="details_item" /></td>
//                                 <td><input type="checkbox" checked={datas.add_item == 1} onChange={(e) => handleChange(e, datas.id, index, datas.add_item )} name="add_item" /></td>
//                                 <td><input type="checkbox" checked={datas.edit_item == 1} onChange={(e) => handleChange(e, datas.id, index, datas.edit_item )} name="edit_item" /></td>
//                                 <td><input type="checkbox" checked={datas.delete_item == 1} onChange={(e) => handleChange(e, datas.id, index, datas.delete_item)} name="delete_item" /></td>
//                                 <td><input type="checkbox" checked={datas.status_item == 1} onChange={(e) => handleChange(e, datas.id, index, datas.status_item )} name="status_item" /></td> 
//                               </tr>

//                             ))}
//                         </tbody>
//                       </table>
//                       <br />
//                       <button className='btn btn-primary'>Submit</button>
//                     </div>
//                   </form>
//                   {/* /.card-body */}
//                 </div>
//                 {/* /.card */}
//                 {/* <a className='btn btn-primary' >Submit</a> */}
//                 <div className='float-right'>
//                    <ReactPaginate
//                      breakLabel="..."
//                      onPageChange={handlePageChange}
//                      initialPage={0}
//                      //forcePage ={currentPage}
//                      //pageRangeDisplayed={5}
//                      pageCount={totalPages}
//                      previousLabel="<<Previous"
//                      nextLabel="Next>>"
//                      renderOnZeroPageCount={null}
//                      activeClassName={"active"}
//                     breakClassName={'page-item'}
//                     breakLinkClassName={'page-link'}
//                      containerClassName={'pagination'}
//                      pageClassName={'page-item'}
//                      pageLinkClassName={'page-link'}
//                      previousClassName={'page-item'}
//                      previousLinkClassName={'page-link'}
//                      nextClassName={'page-item'}
//                     nextLinkClassName={'page-link'}
//                 />
//               </div>
//               </div>
//               {/* /.col */}
//             </div>
//             {/* /.row */}
//           </div>
//           {/* /.container-fluid */}
//         </section>
//       </div>

//     </>


//   )

// }

// export default Permissions



import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';

function Permissions() {
  const [permissions, setPermissions] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchItem, setSearchItem] = useState()


  const baseURL = 'http://localhost:1804'

  const handleInputChange = (e) => {
    setSearchItem(e.target.value.trim())
  }


  const fetchModules = async (page,term) => {

    await axios.get(`${baseURL}/admin/permission?page=${page}&pageSize=21&search=${term}`)
      .then(response => {
        //console.log('response', response.data.PermissionData.data);
        //setPermissions(response.data.PermissionData.data)
        const { permissions, totalPages } = response.data;
         setPermissions(permissions);
        setTotalPages(totalPages);
         console.log('permissions', permissions);
      })
      .catch(error => {
        console.log(error)
      })

  }


  useEffect(() => {
    fetchModules(currentPage, searchItem);
  }, [currentPage, searchItem]);


  const handleChange = (e, id, index, value) => {
    for (let x of permissions) {
      if (x.id == id) {
        if (e.target.name === 'module_access') {
          //console.log('yes');
          if (value == 1) {
            permissions[index].module_access = 0
            return setPermissions([...permissions])
          }
          else if (value == 0) {
            permissions[index].module_access = 1
            return setPermissions([...permissions])
          }
        }
        else if(e.target.name === 'sub_module_access'){
          if (value == 1) {
            permissions[index].sub_module_access = 0
            return setPermissions([...permissions])
          }
          else if (value == 0) {
            permissions[index].sub_module_access = 1
            return setPermissions([...permissions])
          }
        }
        else if(e.target.name == 'access_item'){
          if (value == 1) {
            permissions[index].access_item = 0
            return setPermissions([...permissions])
          }
          else if (value == 0) {
            permissions[index].access_item = 1
            return setPermissions([...permissions])
          }
         } else if(e.target.name == 'details_item'){
          if (value == 1) {
            permissions[index].details_item = 0
            return setPermissions([...permissions])
          }
          else if (value == 0) {
            permissions[index].details_item = 1
            return setPermissions([...permissions])
          }
         }
       else if(e.target.name == 'add_item'){
        if (value == 1) {
          permissions[index].add_item = 0
          return setPermissions([...permissions])
        }
        else if (value == 0) {
          permissions[index].add_item = 1
          return setPermissions([...permissions])
        }
       } else if(e.target.name == 'edit_item'){
        if (value == 1) {
          permissions[index].edit_item = 0
          return setPermissions([...permissions])
        }
        else if (value == 0) {
          permissions[index].edit_item = 1
          return setPermissions([...permissions])
        }
       }
       else if(e.target.name == 'delete_item'){
        if (value == 1) {
          permissions[index].delete_item = 0
          return setPermissions([...permissions])
        }
        else if (value == 0) {
          permissions[index].delete_item = 1
          return setPermissions([...permissions])
        }
       }
       else if(e.target.name == 'status_item'){
        if (value == 1) {
          permissions[index].status_item = 0
          return setPermissions([...permissions])
        }
        else if (value == 0) {
          permissions[index].status_item = 1
          return setPermissions([...permissions])
        }
       }
      }
    }

  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('permissions after', permissions);
    axios.post(`${baseURL}/admin/updatepermission`, permissions)
      .then((response) => {
        console.log('response after', response);
      }).catch((err) => {
        console.log('err', err);
       
      })
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
                  <form onSubmit={(e) => handleSubmit(e)}>

                    <div className="input-group input-group-sm container mt-3 w-25 mr-5 " id="searchform">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-gradient-info ">Search</span>
                      </div>
                      <input id="searchinput" type="text" placeholder="Type to Search..." onChange={handleInputChange} className="form-control" />
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <table id="example2" className="table table-bordered table-striped table-responsive">
                        <thead>
                          <tr>
                            <th>Sl no</th>
                            <th>Role Id</th>
                            <th>Module Id</th>
                            <th>Sub module Id</th>
                            <th>Module access</th>
                            <th>Sub Module access</th>
                            <th>Access item</th>
                            <th>Details item</th>
                            <th>Add item</th>
                            <th>Edit item</th>
                            <th>Delete item</th>
                            <th>Status item</th>
                          </tr>
                        </thead>
                        <tbody>
                          {permissions &&
                            permissions.map((datas, index) => (
                              <tr key={datas.id}>
                                <td>{index + 1}</td>
                                <td>{datas.roleId}</td>
                                <td>{datas.moduleId}</td>
                                <td>{datas.subModuleId}</td>
                                <td><input type="checkbox" checked={datas.module_access == 1} onChange={(e) => handleChange(e, datas.id, index, datas.module_access)} name="module_access"   /></td>
                                <td><input type="checkbox" checked={datas.sub_module_access == 1}  onChange={(e) => handleChange(e, datas.id, index, datas.sub_module_access)} name="sub_module_access"  /></td>
                                <td><input type="checkbox" checked={datas.access_item == 1} onChange={(e) => handleChange(e, datas.id, index, datas.access_item )} name="access_item" /></td>
                                <td><input type="checkbox" checked={datas.details_item == 1} onChange={(e) => handleChange(e, datas.id, index, datas.details_item )} name="details_item" /></td>
                                <td><input type="checkbox" checked={datas.add_item == 1} onChange={(e) => handleChange(e, datas.id, index, datas.add_item )} name="add_item" /></td>
                                <td><input type="checkbox" checked={datas.edit_item == 1} onChange={(e) => handleChange(e, datas.id, index, datas.edit_item )} name="edit_item" /></td>
                                <td><input type="checkbox" checked={datas.delete_item == 1} onChange={(e) => handleChange(e, datas.id, index, datas.delete_item)} name="delete_item" /></td>
                                <td><input type="checkbox" checked={datas.status_item == 1} onChange={(e) => handleChange(e, datas.id, index, datas.status_item )} name="status_item" /></td> 
                              </tr>

                            ))}
                        </tbody>
                      </table>
                      <br />
                      <button className='btn btn-primary'>Submit</button>
                    </div>
                  </form>
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





