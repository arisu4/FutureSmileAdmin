import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Sidebar() {
  const [modules, setModules] = useState([])
  const [submodules, setSubmodules] = useState([])
  //let { id } = useParams()

  const baseURL = 'http://localhost:1804'

  const fetchSidebar = () => {
    axios.get(`${baseURL}/admin/module`)
      .then(response => {
        const modules = response.data;
        //console.log(`sidebar modules`, modules)
        setModules(modules);
      })
      .catch(error => {
        console.log(error)
      })

  }

  useEffect(() => {
    fetchSidebar()
  }, [])

  const handleClick = (id) => {
    console.log("handle click ", id);
    axios.get(`${baseURL}/admin/submodules/${id}`)
      .then(response => {
        const submodules = response.data;
        //console.log(`sidebar submodules`, submodules)
        setSubmodules(submodules);
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="index3.html" className="brand-link">
        <img src="assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
        <span className="brand-text font-weight-light ">Future Smile</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User " />
          </div>
          <div className="info ">
            <Link to="/link" className="d-block">Alexander Pierce</Link>
          </div>
        </div>
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {modules.map(modules => (
              <li className="nav-item" key={modules.id} onClick={() => handleClick(modules.id)}>
                <p className="nav-link">
                  <FontAwesomeIcon title={modules.name} icon={modules.icon} />&nbsp;
                  {modules.name}
                </p>
                <ul className="nav nav-treeview">
                  {submodules.map(submodules => (
                    <li className="nav-item" key={submodules.id}>
                      <Link to={submodules.link} className="nav-link active">
                        <i className="far fa-circle nav-icon"></i>
                        <p>{submodules.sub_module_name}</p>
                      </Link>
                    </li>
                  )
                  )}
                </ul>
              </li>
            )
            )}
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  )
}



export default Sidebar
