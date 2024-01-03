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
         
        <Route path="/adminhome" element={<Home/>} />

        <Route path="/faq" element={<Faq/>} />
        <Route path="/addfaq" element={<AddFaq/>} />
        <Route path="/editfaq/:id" element={<EditFaq />} />

        <Route path="/videos" element={<Videos/>} />
        <Route path="/addvideos" element={<AddVideos/>} />

        <Route path="/story" element={<OurStory/>} />
        <Route path="/addstory" element={<AddStory/>} />
        
        <Route path="/teams" element={<Team/>} />
        <Route path="/addmembers" element={<AddTeam/>} />
        <Route path="/editteam/:id" element={<EditTeam/>} />

        <Route path="/brands" element={<Brands />} />
        <Route path="/addbrands" element={<AddBrands />} />

        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/addtestimonials" element={<AddTestimonials/>} />
        <Route path="/edittestimonials/:id" element={<EditTestimonials/>} />

        <Route path="/services" element={<Services />} />
        <Route path="/addservices" element={<AddServices />} />
        <Route path="/editservices/:id" element={<EditServices />} />

        <Route path="/adminblog" element={<Blog />} />


        <Route path="/gallery" element={<Gallery />} />
        <Route path="/addgallery" element={<AddGallery/>}/>
        <Route path="/editgallery/:id" element={<EditGallery/>}/>
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/addcontact" element={<AddContact />} />
        <Route path="/editcontact/:id" element={<EditContact/>} />

        <Route path="/users" element={<Users />} />
       
        </Route>
       

       </Routes>
     
    </div>
  )
}

export default AdminRoutes