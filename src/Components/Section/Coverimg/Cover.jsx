import React from 'react'
import Cover1 from "../../../Images/cover.jpg";

export default function Cover() {
    const styles={
        borderRadius:'15px',
        marginTop:'-15px',
   overflow:'hidden',
  //  objectFit:'cover'
    }
  return (
     <div className="container">
      <div className="row">
      <div className="col-1"></div>
      <div className="col-sm-10 col-md-10 col-lg-10 d-flex justify-content-center">
        <img src={Cover1} style={styles} className="img-fluid" width="950px" height="370px" alt="" />
      </div>
      <div className="col-1"></div>
    </div>
    </div>
   

  )
}
