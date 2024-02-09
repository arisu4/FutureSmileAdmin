import React from 'react'
import "./Error.css"


function Errorpage() {
  return (
    <section className="page_404">
    <div className="container">
      <div className="row">	
      <div className="col-sm-12 ">
      <div className="col-sm-10 col-sm-offset-1  text-center">
      {/* <div className="four_zero_four_bg"> */}
        {/* <h1 class="text-center ">404</h1> */}
      
      
      {/* </div>
       */}
      <div className="contant_box_404">
      {/* <h3 class="h2">
      Look like you're lost
      </h3>
       */}
       <br />
       <br />
      <h3>The page you are looking for not avaible!</h3>
      
      <a href="/adminhome" className="link_404">Go to Home</a>
    </div>
      </div>
      </div>
      </div>
    </div>
  </section>
  )
}

export default Errorpage
