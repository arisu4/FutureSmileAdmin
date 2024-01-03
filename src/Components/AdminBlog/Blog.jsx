import React from 'react'

function Blog() {
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Blog</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/link">Blog</a></li>
                  <li className="breadcrumb-item active">Blog</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
