import React from 'react'
import { Routes, Route } from 'react-router-dom';
import {Outlet} from 'react-router-dom'
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

import Users from '../Components/Users/Users'
import EditFaq from '../Components/AdminHome/Faq/EditFaq';
import Private from '../Private';


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

  return (
    <div>
  
      <Routes>
        <Route path="/" element={<Login/>} />
        
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


        <Route path="/gallery" element={<Private Component={Gallery}/>} />
        <Route path="/addgallery" element={<Private Component={AddGallery}/>}/>
        <Route path="/editgallery/:id" element={<Private Component={EditGallery}/>}/>
        
        <Route path="/contact" element={<Private Component={Contact}/>} />
        <Route path="/addcontact" element={<Private Component={AddContact}/>} />
        <Route path="/editcontact/:id" element={<Private Component={EditContact}/>} />

        <Route path="/users" element={<Private Component={Users}/>} />
       
        </Route>
       

       </Routes>
     
    </div>
  )
}
export default AdminRoutes