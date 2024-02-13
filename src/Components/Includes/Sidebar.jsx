import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import { version } from 'react';
//Original 1
// function Sidebar() {
//   const [modules, setModules] = useState([])
//   const [submodules, setSubmodules] = useState([])
//   //let { id } = useParams()

//   const baseURL = 'http://localhost:1804'


//   const roleId = localStorage.getItem('adminId') 
//   //console.log("sidebar adminid",adminId);

//   const fetchSidebar = () => {
   
//     console.log("adminId sidebar",roleId);

//     axios.get(`${baseURL}/admin/module`)
//       .then(response => {
//         const modules = response.data;
//         //console.log(`sidebar modules`, modules)
//         setModules(modules);
//       })
//       .catch(error => {
//         console.log(error)
//       })

//   }

//   useEffect(() => {
//     fetchSidebar()
//   }, [])

//   const handleClick = (id) => {
//     //console.log("handle click ", id);
//     axios.get(`${baseURL}/admin/submodules/${id}`)
//       .then(response => {
//         const submodules = response.data;
//         console.log(`sidebar submodules`, submodules)
//         setSubmodules(submodules);
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }
//   return (
//     <aside className="main-sidebar sidebar-dark-primary elevation-4">
//       {/* Brand Logo */}
//       <Link to="index3.html" className="brand-link">
//         <img src="assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
//         <span className="brand-text font-weight-light ">Future Smile</span>
//       </Link>
//       {/* Sidebar */}
//       <div className="sidebar">
//         {/* Sidebar user panel (optional) */}
//         <div className="user-panel mt-3 pb-3 mb-3 d-flex">
//           <div className="image">
//             <img src="assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User " />
//           </div>
//           <div className="info ">
//             <Link to="/link" className="d-block">Alexander Pierce</Link>
//           </div>
//         </div>
//         <nav className="mt-2">
//           <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
//             {modules.map(modules => (
//               <li className="nav-item" key={modules.id} onClick={() => handleClick(modules.id)}>
//                 <p className="nav-link">
//                   <FontAwesomeIcon title={modules.name} icon={modules.icon} />&nbsp;
//                   {modules.name}
//                 </p>
//                 <ul className="nav nav-treeview">
//                   {submodules.map(submodules => (
//                     <li className="nav-item" key={submodules.id}>
//                       <Link to={submodules.link} className="nav-link active">
//                         <i className="far fa-circle nav-icon"></i>
//                         <p>{submodules.sub_module_name}</p>
//                       </Link>
//                     </li>
//                   )
//                   )}
//                 </ul>
//               </li>
//             )
//             )}
//           </ul>
//         </nav>
//         {/* /.sidebar-menu */}
//       </div>
//       {/* /.sidebar */}
//     </aside>
//   )
// }




function Sidebar() {
  const [modules, setModules] = useState([])
  const [submodules, setSubmodules] = useState([])
  //let { id } = useParams()

  const baseURL = 'http://localhost:1804'

  //console.log("version",version);
  const roleId = localStorage.getItem('adminId') 
  //console.log("sidebar adminid",adminId);
 const adminName = localStorage.getItem('adminname')

 
 
  // const renderSubmodules = (roleId) => {
  //   if (roleId==1) {
  //     return (
  //       <ul className="nav nav-treeview">
  //       {submodules.map(submodules => (
  //         <li className="nav-item" key={submodules.id}>
  //           <Link to={submodules.link} className="nav-link active">
  //             <i className="far fa-circle nav-icon"></i>
  //             <p>{submodules.sub_module_name}</p>
  //           </Link>
  //         </li>
  //       )
  //       )}
  //     </ul>
  //     );
  //   } else {
  //     return (
  //       <ul className="nav nav-treeview">
        
  //         <li className="nav-item" >
  //           <Link to="/"className="nav-link active">
  //             <i className="far fa-circle nav-icon"></i>
  //             <p>Log Out</p>
  //           </Link>
  //         </li>
      
  //     </ul> 
  //     );
  //   }
  // };
  

 
  
  

  const fetchSidebar = () => {
   
    //console.log("adminId sidebar",roleId);

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




  const handleClick = (id,roleid) => {
    //console.log("handle click ", id);
    localStorage.setItem('moduleId',id)
    //console.log("handle role ", roleId);
    //console.log(`submodules 1`, submodules)
    //setSubmodules((x)=>({...x,}))
    //console.log(`submodules 2`, submodules)
    axios.get(`${baseURL}/admin/submodules/${id}/${roleId}`)
      .then(response => {
        const submodules = response.data;
        console.log(`sidebar submodules`, submodules)
         //console.log("sidebar names",submodulepermit);
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
        <span className="brand-text font-weight-light ">Future Smile {adminName}</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User " />
          </div>
          <div className="info ">
            <Link to="/link" className="d-block">{adminName}</Link>
          </div>
        </div>
  
        {roleId==1||roleId==2 
                ?
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" >
            {modules.map(modules => (
              <li className="nav-item" key={modules.id} onClick={() => handleClick(modules.id,roleId)}>
                <p className="nav-link">
                  <FontAwesomeIcon title={modules.name} icon={modules.icon} />&nbsp;
                  {modules.name}
                </p>
                  <ul className="nav nav-treeview">
                  {submodules.map(subs => (
                    <li className="nav-item" key={subs.id}>
                      {subs.module_access==1 &&  subs.sub_module_access==1?
                      <Link to={subs.submodulepermit.link}  className="nav-link active">
                        <i className="far fa-circle nav-icon"></i>
                        <p>{subs.submodulepermit.sub_module_name}</p>
                      </Link>
                      :
                      console.log("sidemodules is not permitted")
                  }
                    </li>
                  )
                  )}
                </ul> 
              </li>
            )
            )}  
          </ul>
        </nav>
        :
        <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
   
            <li className="nav-item"  >
              <p className="nav-link">
                <FontAwesomeIcon title= "Log Out" icon= "fa-solid fa-lock" />&nbsp;
                 Log Out
              </p>
                <ul className="nav nav-treeview">
              
                  <li className="nav-item" >
                    <Link to= "/" className="nav-link active">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Log Out</p>
                    </Link>
                  </li>
               
              </ul> 
            
              
            
            </li>
       
        </ul>
      </nav>
        

                  }
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  )
}



// Dynamic binding to on 'click' and Toggle the nested nav
// $('.nav-list').on('click', '.nav-click', function(){
//   $('.nav-submenu').not($(this).siblings('.nav-submenu')).hide();
//   $('.nav-item .nav-click').not(this).removeClass('icon-close'); 
//   $(this).siblings('.nav-submenu').toggle();
//   $(this).toggleClass('icon-close');  
// });

// in line number 224 ul remove data-accordion="false" then only  one sub-menu at a time

//other options
//How to Close Sidebar menu dropdown when the user opens second dropdown in adminlte?
// $('#main-side .has-treeview').click(function(){
//   $(this).siblings('.menu-open').removeClass('menu-open').children('.nav-treeview').slideToggle();
// })




export default Sidebar
