//import React from 'react'
import {useState} from  'react'
import PermissionContext from "./PermissionContext";

const usePermission = (permission) => {
    const [loading, setLoading] = useState(true);
    const [allowed, setAllowed] = useState();

    const {isAllowedTo} = useContext(PermissionContext);

    isAllowedTo(permission).then((allowed) => {
        setLoading(false);
        setAllowed(allowed);
    })
  return (
   
      [loading, allowed]
  
  )
}

export default usePermission
