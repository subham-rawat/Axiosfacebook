// import React, { useState } from "react";
// import axios from "axios"
// const [postData,setPostData]=useState('');


// const baseUrl="http://139.59.47.49:4004";


// export default function Api(){
    
//     const getData=()=>{
//         axios.get(`${baseUrl}/api/posts?limit=10&start=1&orderby=0`).then((Response)=>{
//           console.log(Response.data)
//         })
//       }

//       const postData=async() =>{
//         const formData = new FormData();
//         formData.append("file", file);
        
//         let res=await axios.post(`${baseUrl}/api/upload/image`,formData,{
//           headers: {
//             "content-type": "multipart/form-data",
//           },
      
//         })
//       let filename=res.data.filename
//         axios.post(`${baseUrl}/api/post`, {
//               post:text,
//               background:filename
//             })
      
      
//       }
      
//     return (
          
//       <div>
//         <button onClick={postData} value={postData} ></button>
//            </div>      
//     );
// }