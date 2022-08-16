import React from 'react'
import profile from '../../../Images/profile.jpg'
import InputModal from './Input/InputModal'
import './Post.css'
export default function Post() {
  return (
    <div className='post'>
          <div className="container ">
     <div className="row p-5">
     <div className="col-2 p-3"></div>
     <div className="Post_div col-sm-8 col-md-8 col-lg-8 bg-white d-flex ">
     <div className="col-lg-2 p-1"> <img  src={profile} className='Post_Profile' height="50px" width="50px" alt=""/>     
     </div>
     <div className="right col-sm-10 col-md-10 col-lg-10"> 
     <InputModal />

     </div>
       </div> 
       <div className="col-2 p-3"></div>
       </div>
       </div>
    </div>
  )
}
