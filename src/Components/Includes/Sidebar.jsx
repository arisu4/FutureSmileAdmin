import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <>
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
              {/* SidebarSearch Form */}
              {/* <div className="form-inline">
                <div className="input-group" data-widget="sidebar-search">
                  <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                  <div className="input-group-append">
                    <button className="btn btn-sidebar">
                      <i className="fas fa-search fa-fw" />
                    </button>
                  </div>
                </div>
              </div> */}
              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                  {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                  <li className="nav-item">
                    <Link to="/adminhome" className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        Home
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/teams" className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        Our Team
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/story" className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                      Story
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/brands" className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        Brands
                      </p>
                    </Link>
                  </li> 
                  <li className="nav-item">
                    <Link to="/testimonials" className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        Testimonials
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/videos" className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                     Video
                      </p>
                    </Link>
                    </li> 
                  <li className="nav-item">
                    <Link to="/services" className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        Services
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/gallery" className="nav-link ">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        Gallery
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/adminblog" className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        Blog
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        Contact
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/users" className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        Users
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/faq" className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        FAQ 
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        Logout
                      </p>
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
          </aside>
    </>
  )
}

export default Sidebar
