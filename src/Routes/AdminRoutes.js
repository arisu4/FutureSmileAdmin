// import React from 'react'
// import { Routes, Route } from 'react-router-dom';
// import {Outlet} from 'react-router-dom'
// //import {lazy,Suspense} from 'react'

// import Login from '../Components/AdminLogin/Login'

// import Sidebar from '../Components/Includes/Sidebar'
// import Footer  from '../Components/Includes/Footer'

// import Home from '../Components/AdminHome/Home'
// import Faq  from '../Components/AdminHome/Faq/FaqPage'
// import AddFaq from  '../Components/AdminHome/Faq/AddFaq'

// import Team  from '../Components/AdminAbout/OurTeam/OurTeam'
// import AddTeam from '../Components/AdminAbout/OurTeam/AddTeam'
// import EditTeam from '../Components/AdminAbout/OurTeam/EditTeam';

// import Testimonials from '../Components/AdminAbout/Testimonials/Testimonial'
// import AddTestimonials from '../Components/AdminAbout/Testimonials/AddTestmonial'
// import EditTestimonials from '../Components/AdminAbout/Testimonials/EditTestimonials';


// import Brands from '../Components/AdminAbout/Brands/Brands'
// import AddBrands from '../Components/AdminAbout/Brands/AddBrands'


// import Videos from '../Components/AdminAbout/Videos/Videos'
// import AddVideos from '../Components/AdminAbout/Videos/AddVideos'


// import Services from '../Components/AdminServices/Services'
// import AddServices from '../Components/AdminServices/AddServices'
// import EditServices from'../Components/AdminServices/EditServices'  

// import Gallery from '../Components/AdminGallery/Gallery'
// import AddGallery from '../Components/AdminGallery/AddGallery'
// import EditGallery from '../Components/AdminGallery/EditGallery'

// import Blog from '../Components/AdminBlog/Blog'

// import Contact from '../Components/AdminContact/Contact'
// import AddContact from '../Components/AdminContact/AddContact'
// import EditContact from '../Components/AdminContact/EditContact'

// import OurStory from '../Components/AdminAbout/OurStory/OurStory';
// import AddStory from '../Components/AdminAbout/OurStory/AddStory';

// import Roles  from '../Components/Roles&Permissions/Roles'
// import Permissions  from '../Components/Roles&Permissions/Permissions'

// import Admin from '../Components/Admin/Admin'
// import AddAdmin from '../Components/Admin/AddAdmin'
// import EditAdmin from '../Components/Admin/EditAdmin'

// import User from '../Components/Admin/User'
// import EditFaq from '../Components/AdminHome/Faq/EditFaq';
// import Private from '../Private';

// import Errorpage from  '../Components/Includes/Errorpage'



// // const Home = lazy(() => import('../Pages/Home/Home'));
// // const About = lazy(() => import('../Pages/About/About'));
// // const Services = lazy(() => import('../Pages/Services/Services'));
// // const Gallery = lazy(()=> import('../Pages/Gallery/Gallery'));
// // const Blog = lazy(()=>import('../Pages/Blog/Blog'))
// // const Contact = lazy(()=>import('../Pages/Contact/Contact'))
// // const Login= lazy(()=>import('../Pages/Login/Login'))


// const ReusableLayout = () => (
//   <>
//     <Sidebar />
//     <Outlet />
//     <Footer />
//   </>
// );



// function AdminRoutes() {

//   return (
//     <div>
  
//       <Routes>
//         <Route path="/" element={<Login/>} />

//         <Route path="/error" element={<Errorpage/>} />
        
//         <Route element={<ReusableLayout/>}>
         
//         {/* <Route path="/adminhome" element={<Home/>} /> */}
//         <Route path="/adminhome" element={<Private Component={Home}/>} />
//         <Route path="/faq" element={<Private Component={Faq}/>} />
//         <Route path="/addfaq" element={<Private Component={AddFaq}/>} />
//         <Route path="/editfaq/:id" element={<Private Component={EditFaq}/>}/>

//         <Route path="/videos" element={<Private Component={Videos}/>}/>
//         <Route path="/addvideos" element={<Private Component={AddVideos}/>} />

//         <Route path="/story" element={<Private Component={OurStory}/>} />
//         <Route path="/addstory" element={<Private Component={AddStory}/>} />
        
//         <Route path="/teams" element={<Private Component={Team}/>} />
//         <Route path="/addmembers" element={<Private Component={AddTeam}/>} />
//         <Route path="/editteam/:id" element={<Private Component={EditTeam}/>} />

//         <Route path="/brands" element={<Private Component={Brands}/>} />
//         <Route path="/addbrands" element={<Private Component={AddBrands}/>} />

//         <Route path="/testimonials" element={<Private Component={Testimonials}/>} />
//         <Route path="/addtestimonials" element={<Private Component={AddTestimonials}/>} />
//         <Route path="/edittestimonials/:id" element={<Private Component={EditTestimonials}/>} />

//         <Route path="/services" element={<Private Component={Services}/>} />
//         <Route path="/addservices" element={<Private Component={AddServices}/>} />
//         <Route path="/editservices/:id" element={<Private Component={EditServices}/>} />

//         <Route path="/adminblog" element={<Private Component={Blog}/>} />


//         <Route path="/gallery" element={<Private Component={Gallery}/>} />
//         <Route path="/addgallery" element={<Private Component={AddGallery}/>}/>
//         <Route path="/editgallery/:id" element={<Private Component={EditGallery}/>}/>
        
//         <Route path="/contact" element={<Private Component={Contact}/>} />
//         <Route path="/addcontact" element={<Private Component={AddContact}/>} />
//         <Route path="/editcontact/:id" element={<Private Component={EditContact}/>} />
       

//         <Route path="/admins" element={<Private Component={Admin}/>} />
//         <Route path="/addadmin" element={<Private Component={AddAdmin}/>} />
//         <Route path="/editadmin/:id" element={<Private Component={EditAdmin}/>} />


//         <Route path="/users" element={<Private Component={User}/>} />
        
//         <Route path="/roles" element={<Private Component={Roles}/>} />
//         <Route path="/permissions" element={<Private Component={Permissions}/>} />

//         <Route path="/*" element={<Private Component={Errorpage}/>} />
        
//         </Route>
       

//        </Routes>
     
//     </div>
//   )
// }
// export default AdminRoutes



//Very very important =  mapped the app location to a few components, typical React Router stuff.




import React from 'react'
import {useState,useEffect} from 'react'
import { Routes, Route} from 'react-router-dom';
import {useLocation} from  'react-router-dom'
import {Outlet} from 'react-router-dom'
import  axios from 'axios'
//import {lazy,Suspense} from 'react'

import Login from '../Components/AdminLogin/Login'

import Sidebar from '../Components/Includes/Sidebar'
import Footer  from '../Components/Includes/Footer'

import Home from '../Components/AdminHome/Home'
import Faq  from '../Components/AdminHome/Faq/FaqPage'
import AddFaq from  '../Components/AdminHome/Faq/AddFaq'

import Team  from '../Components/AdminAbout/OurTeam/OurTeam'
import AddTeam from '../Components/AdminAbout/OurTeam/AddTeam'
import EditTeam from '../Components/AdminAbout/OurTeam/EditTeam';

import Testimonials from '../Components/AdminAbout/Testimonials/Testimonial'
import AddTestimonials from '../Components/AdminAbout/Testimonials/AddTestmonial'
import EditTestimonials from '../Components/AdminAbout/Testimonials/EditTestimonials';


import Brands from '../Components/AdminAbout/Brands/Brands'
import AddBrands from '../Components/AdminAbout/Brands/AddBrands'


import Videos from '../Components/AdminAbout/Videos/Videos'
import AddVideos from '../Components/AdminAbout/Videos/AddVideos'


import Services from '../Components/AdminServices/Services'
import AddServices from '../Components/AdminServices/AddServices'
import EditServices from'../Components/AdminServices/EditServices'  

import Gallery from '../Components/AdminGallery/Gallery'
import AddGallery from '../Components/AdminGallery/AddGallery'
import EditGallery from '../Components/AdminGallery/EditGallery'

import Blog from '../Components/AdminBlog/Blog'

import Contact from '../Components/AdminContact/Contact'
import AddContact from '../Components/AdminContact/AddContact'
import EditContact from '../Components/AdminContact/EditContact'

import OurStory from '../Components/AdminAbout/OurStory/OurStory';
import AddStory from '../Components/AdminAbout/OurStory/AddStory';

import Roles  from '../Components/Roles&Permissions/Roles'
import Permissions  from '../Components/Roles&Permissions/Permissions'

import Admin from '../Components/Admin/Admin'
import AddAdmin from '../Components/Admin/AddAdmin'
import EditAdmin from '../Components/Admin/EditAdmin'

import User from '../Components/Admin/User'
import EditFaq from '../Components/AdminHome/Faq/EditFaq';
import Private from '../Private';

import Errorpage from  '../Components/Includes/Errorpage'
import Otp from '../Components/AdminOtp/Otp'


// const Home = lazy(() => import('../Pages/Home/Home'));
// const About = lazy(() => import('../Pages/About/About'));
// const Services = lazy(() => import('../Pages/Services/Services'));
// const Gallery = lazy(()=> import('../Pages/Gallery/Gallery'));
// const Blog = lazy(()=>import('../Pages/Blog/Blog'))
// const Contact = lazy(()=>import('../Pages/Contact/Contact'))
// const Login= lazy(()=>import('../Pages/Login/Login'))


const ReusableLayout = () => (
  <>
    <Sidebar />
    <Outlet />
    <Footer />
  </>
);



function AdminRoutes() {

   const [allow,setAllow] = useState()


 
  const roleId = localStorage.getItem('adminId') 
  const location  =  useLocation()
  let status = location
  console.log("status",status);
  let dir = location.pathname
  console.log("dir",dir);
  


  //const adminName = localStorage.getItem('adminname')
  //const isLoggedIn = adminName;

  useEffect(()=>{
    fetchAccess(roleId,dir)
  },[])

const fetchAccess = (roleid,path) => {
  
    //localStorage.setItem('moduleId',id)
    const baseURL = 'http://localhost:1804'

    axios.get(`${baseURL}/admin/access?path=${path}&role=${roleid}`)
      .then(response => {
        const permit = response.data;
        console.log(`permit`, permit)
        if(permit === 0){
          setAllow(false)
         
        }
        if(permit === 1){
           setAllow(true)
           
        }
        //setSubmodules(submodules);
      })
      .catch(error => {
        console.log(error)
      })
  }


 console.log("allowed",allow);

  return (
    <div>
  
      <Routes>
        <Route path="/" element={<Login/>} />

        {/* <Route path="/error" element={<Errorpage/>} /> */}
        <Route path="/otp" element={<Private Component={Otp}/>} />
        
        <Route element={<ReusableLayout/>}>
         
        {/* <Route path="/adminhome" element={<Home/>} /> */}
        <Route path="/adminhome" element={<Private Component={Home}/>} />
        <Route path="/faq" element={<Private Component={Faq}/>} />
        <Route path="/addfaq" element={<Private Component={AddFaq}/>} />
        <Route path="/editfaq/:id" element={<Private Component={EditFaq}/>}/>

        <Route path="/videos" element={<Private Component={Videos}/>}/>
        <Route path="/addvideos" element={<Private Component={AddVideos}/>} />

        <Route path="/story" element={<Private Component={OurStory}/>} />
        <Route path="/addstory" element={<Private Component={AddStory}/>} />
        
        <Route path="/teams" element={<Private Component={Team}/>} />
        <Route path="/addmembers" element={<Private Component={AddTeam}/>} />
        <Route path="/editteam/:id" element={<Private Component={EditTeam}/>} />

      
        <Route path="/brands" element={<Private Component={Brands}/>} />
        


        <Route path="/addbrands" element={<Private Component={AddBrands}/>} />

        <Route path="/testimonials" element={<Private Component={Testimonials}/>} />
        <Route path="/addtestimonials" element={<Private Component={AddTestimonials}/>} />
        <Route path="/edittestimonials/:id" element={<Private Component={EditTestimonials}/>} />

        <Route path="/services" element={<Private Component={Services}/>} />
        <Route path="/addservices" element={<Private Component={AddServices}/>} />
        <Route path="/editservices/:id" element={<Private Component={EditServices}/>} />

        <Route path="/adminblog" element={<Private Component={Blog}/>} />



         {/* {dir === "/adminblog" && allow === true || allow===undefined?
        <Route path="/adminblog"  element={ <Private Component={Blog}/>} />
        :<Route path="/error"  element={ <Private Component={Errorpage}/>} />
         } */}


       
      {/* {dir === "/adminblog" && allow === true ?
      <Route path="/adminblog"  element={ <Private Component={Blog}/>}/>
      :<Route path="/error"  element={ <Private Component={Errorpage}/>}/>
      }

        {dir ==='/adminblog' ?
        <Route path="/adminblog" element={allow === true ? <Private Component={Blog}/>:<Navigate to="/error" />} />
        :console.log("blog")
        }  */}


  {/* <Route path="/adminblog"  element={isLoggedIn==="admin" ?<Private Component={Blog}/>:<Navigate to="/error" />} /> */}


{/* <Route path="/adminblog" element={<Private Component={Blog}/>} render={() => (isLoggedIn=="admin" ? <Blog/> : <Navigate to="/error" />)} /> */}








        <Route path="/gallery" element={<Private Component={Gallery}/>} />
        <Route path="/addgallery" element={<Private Component={AddGallery}/>}/>
        <Route path="/editgallery/:id" element={<Private Component={EditGallery}/>}/>
        
        <Route path="/contact" element={<Private Component={Contact}/>} />
        <Route path="/addcontact" element={<Private Component={AddContact}/>} />
        <Route path="/editcontact/:id" element={<Private Component={EditContact}/>} />
       

        <Route path="/admins" element={<Private Component={Admin}/>} />
        <Route path="/addadmin" element={<Private Component={AddAdmin}/>} />
        <Route path="/editadmin/:id" element={<Private Component={EditAdmin}/>} />


        <Route path="/users" element={<Private Component={User}/>} />

        <Route path="/roles" element={<Private Component={Roles}/>} />

        <Route path="/permissions" element={<Private Component={Permissions}/>} />

       
        
        {/* <Route path="/roles" element={isLoggedIn==="admin"?<Private Component={Roles}/>:<Navigate to="/error" />} /> */}
        {/* {dir ==='/permissions' ?
        <Route path="/permissions" element={allow === true ? <Private Component={Permissions}/>:<Navigate to="/error" />} />
        :console.log("permit")
        } */}


        <Route path="/error" element={<Private Component={Errorpage}/>} />
        </Route>
       

       </Routes>
     
    </div>
  )
}
export default AdminRoutes