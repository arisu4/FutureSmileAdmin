import React from 'react'
import usePermission from "./usePermission";

// This component is meant to be used everywhere a restriction based on user permission is needed
const Restricted = ({to, fallback,loadingComponent, children}) => {
      // We "connect" to the provider thanks to the PermissionContext
      const [loading, allowed] = usePermission(to);
      if (loading) {
        return { loadingComponent: loadingComponent } 
      }
    // If the user has that permission, render the children
    if (allowed) {
        return { children: children }
    }
  return (
    <div>
       {/* { fallback: fallback } */}
       {fallback}
    </div>
  )
}

export default Restricted
