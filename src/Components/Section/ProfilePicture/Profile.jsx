import React from 'react'
import profile from '../../../Images/profile.jpg'

export default function Profile() {
    const styles = {
borderRadius:'50%',
marginTop:'-85px'
};
  return (
    <div className="profile">
   <div className="container">
    <div className="row">
    <div className="col-1"></div>
    <div className="col-sm-10 col-md-10 col-lg-10 d-flex justify-content-center">
      <img  src={profile} style={styles} className="img-fluid" height="170px" width="170px" alt=""/>     
      </div> 
      <div className="col-1"></div>
      </div>
      </div>
      </div>
    
  )
}
