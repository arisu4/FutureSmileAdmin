import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Private = ({ Component }) => {
  const baseURL = 'http://localhost:1804'

  const token = localStorage.getItem('adminToken')
  const navigate = useNavigate()

  const logout = () => {
    //console.log('from private route', token);
    // if(token){  
    axios.post(`${baseURL}/admin/verifytoken`, token)
      .then((res) => {
        //console.log('res', res);
      }).catch((err) => {
        //console.log('err', err);
        if (err.response.data.flag === 0 || err.response.data.flag === -1 ) {
          navigate('/')
        }
        //  else{
        //   navigate('/')
        //  }

      })
  }


 

useEffect(() => {
  logout()
}, [])

// let flag = 0
// const getExpTime = localStorage.getItem('tokenExpTime')
// const currentTime = Date.now()
// const timeRemaining = getExpTime - currentTime
// useEffect(()=>{
//     setTimeout(logout,timeRemaining)
// },[])

return (
  <Component />
)
     
    }

export default Private
