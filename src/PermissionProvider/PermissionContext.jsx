// import React from 'react'

// const PermissionContext = () => {

//     var defaultBehaviour = {
//         isAllowedTo: function () { return Promise.resolve(false); }
//     };
//     // Create the context
//     var PermissionContext = react_1.default.createContext(defaultBehaviour);
//     exports.default = PermissionContext;
    
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default PermissionContext


// import  React from  'react'
// import {createContext} from 'react'

// var PermissionContext = react_1.default.createContext(defaultBehaviour);


// export default PermissionContext



// Create permission and user context in permission context itself
// import * as React from "react";

// const authContext = React.createContext();

// function useAuth() {
//   const [authed, setAuthed] = React.useState(false);

//   return {
//     authed,
//     login() {
//       return new Promise((res) => {
//         setAuthed(true);
//         res();
//       });
//     },
//     logout() {
//       return new Promise((res) => {
//         setAuthed(false);
//         res();
//       });
//     },
//   };
// }

// export function AuthProvider({ children }) {
//   const auth = useAuth();

//   return <authContext.Provider value={auth}>{children}</authContext.Provider>;
// }

// export default function AuthConsumer() {
//   return React.useContext(authContext);
// }


// There are lots of different ways the useAuth Hook could work.

// Perhaps it makes an HTTP Fetch request to an API endpoint to validate a cookie. Or maybe it decodes a JWT token stored in the browser's localstorage. Or you could be using a third-party auth solution, like Firebase, and the useAuth Hook just exposes values from that library.

// In any case, the goal is the same: find out if the user is currently authenticated.



//import React  from 'react'
import {createContext} from 'react'
//import {useState} from 'react'

//const [isAllowedTo,setisAllowedTo] = useState(false)

// let defaultBehaviour = {
//     isAllowedTo: function () { return false }
// }

// let defaultBehaviour = {
//     isAllowedTo:false
// }


//let PermissionContext = createContext(defaultBehaviour);


let PermissionContext = createContext()


export default PermissionContext
