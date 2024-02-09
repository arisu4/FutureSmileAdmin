// import React from 'react'

// const PermissionProvider = () => {
//     var fetchPermission = _a.fetchPermission, children = _a.children;
//     var cache = {};
//     // Creates a method that returns whether the requested permission is available in the list of permissions
//     // passed as parameter
//     var isAllowedTo = function (permission) { return __awaiter(void 0, void 0, Promise, function () {
//         var isAllowed;
//         return __generator(this, function (_a) {
//             switch (_a.label) {
//                 case 0:
//                     if (Object.keys(cache).includes(permission)) {
//                         return [2 /*return*/, cache[permission]];
//                     }
//                     return [4 /*yield*/, fetchPermission(permission)];
//                 case 1:
//                     isAllowed = _a.sent();
//                     cache[permission] = isAllowed;
//                     return [2 /*return*/, isAllowed];
//             }
//         });
//     }); };
//     // This component will render its children wrapped around a PermissionContext's provider whose
//     // value is set to the method defined above
//   return (
//     <div>
      
//     </div>
//   )
// //   {
// //     {
// //         isAllowedTo;
// //     }
// // } > { children: children } < /PermissionContext.Provider>;;
// // };
// }

// export default PermissionProvider


import React from 'react'
import PermissionContext from './PermissionContext'
import {useState,useEffect,useMemo} from 'react'
import axios from 'axios'
//import Adminroutes  from '../src/Routes/AdminRoutes'

function PermissionProvider(props){
    
 const roleId = localStorage.getItem('adminId')
 const moduleId = localStorage.getItem('moduleId')

    //console.log("permission roleId",roleId)
    const [permit,setPermit] = useState()
    const [allowed,setAllowed] = useState(false)
    
    
    // const baseURL  =  'http://localhost:1804'

    // const value = useMemo(
    //   () => ({access, setAccess}),[access])




    const value = useMemo(()=>(
      {permit}),[permit]
    )
      

      

      //let value = useMemo(() => (access),[access])

      console.log("values",value);
   
    const fetchPermissions = (roleId,moduleId) => {
        const baseURL  =  'http://localhost:1804'

        // let id = roleId
        axios.get(`${baseURL}/admin/permitprovider/${roleId}/${moduleId}`)
        .then(response=>{
          console.log("permission ",response.data);
            //const access = response.data
            //console.log("permission object",access);
          //const {permissions,totalPages} = response.data;
             //setPermit(access);
       
        })
        .catch(error=>{
           console.log(error)
        })
       }

    //console.log("acess",access);
    //console.log("value",value);
    //value.access.[0].sub_module.access

    useEffect(() => {
        fetchPermissions(roleId,moduleId); 
      }, [roleId,moduleId]); 

      //let isAllowedTo =  function () { return true };

      //let isAllowedTo = (access) = access.includes(access.sub_module_access);
      //console.log("is allowed to",isAllowedTo);

      // if (value){
      //      console.log("combined value",value.permit.access[0])
      // }
      // else{

      // }


      return(

      // <PermissionContext.Provider  value={value}
      // //value={value}
      // >
      // {/* <MyComponent /> */}
      // {/* <Adminroutes /> */}
     

      // {props.children}
      // </PermissionContext.Provider>


      <PermissionContext.Provider  value={allowed}
      //value={value}
      >
      {/* <MyComponent /> */}
      {/* <Adminroutes /> */}
     

      {props.children}
      </PermissionContext.Provider>
        )
      
    } 
      


export default PermissionProvider