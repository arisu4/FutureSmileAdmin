import React, { useEffect,useState } from 'react'
import { useNavigate } from "react-router-dom";
//import { useLocation } from 'react-router-dom';
function Home() {
  const [finishStatus, setfinishStatus] = useState(false)
  const navigate = useNavigate();
  // const location = useLocation();
  // const data = location.state;
  // console.log(data);

  const onBackButtonEvent = (e) => {
    e.preventDefault();
    if (!finishStatus) {
        if (window.confirm("Do you want to go to login window ?")) {
            setfinishStatus(true)
            navigate("/");
        } else {
            window.history.pushState(null, null, window.location.pathname);
            setfinishStatus(false)
        }
    }
}
  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', onBackButtonEvent);
    return () => {
      window.removeEventListener('popstate', onBackButtonEvent);  
    };
  }, []);

  return (
    <>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Home</h1>
                
              </div>
              <div className="col-sm-6">
                
              </div>
            </div>
          </div>
        </section>
        <div className="card card-default">
          <div className="card-header">
            <h3 className="card-title">Home</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse">
                <i className="fas fa-minus" />
              </button>
              <button type="button" className="btn btn-tool" data-card-widget="remove">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          {/* /.card-header */}
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <div className="form-group">
                    <h2>*Welcome Admin to Home page*</h2>
                    {/* <p>{data}</p> */}
                  </div>
                </div>
                {/* /.form-group */}
               
              
              </div>
           
              

            </div>

          </div>


        </div>

      </div>

    </>
  )
}

export default Home
