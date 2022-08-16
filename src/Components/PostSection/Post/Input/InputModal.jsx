import React, { useState } from "react";
import "./InputModal.css";
import profile from "../../../../Images/profile.jpg";
// import Api from "../../../API/Api";
import axios from "axios";
const baseUrl="http://139.59.47.49:4004";
export default function InputModal() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);



const postData=async(e) =>{
  const formData = new FormData();
  formData.append("file", image);
  
  let res=await axios.post(`${baseUrl}/api/upload/image`,formData,{
    headers: {
      "content-type": "multipart/form-data",
    },

  })
let filename=res.data.filename
   e.preventDefault();
  axios.post(`${baseUrl}/api/post`, {
        post:text,
        background:filename
      })
}


  return (
    <div className="InputModal p-2  ">
      <button
        type="button"
        className="btn Post_input col-sm-12 col-md-12 col-lg-12"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        What's in your mind?
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Post
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="Profile_display d-flex">
                  <div className="col-sm-1 col-md-1 col-lg-1">
                    
                    <img
                      src={profile}
                      className="Post_Profile"
                      height="30px"
                      width="30px"
                      alt=""
                    />
                  </div>
                  <div className="col-sm-10 col-md-10 col-lg-10  fs-6 ">
                 
                    Vikram Dabgotra
                  </div>
                  <div className="col-1">
                    <i
                      role="button"
                      className="fa-solid fa-camera"
                      onClick={() =>
                        document.getElementById("selectFileInput").click()
                      }
                    ></i>
                    <input
                      className="input border-0 form-control"
                      type="file"
                      id="selectFileInput"
                      onChange={(event) => setImage(event .target.files[0])}
                    />
                  </div>
                </div>
                <div className="display_uploaded_image">
                  <div className="shadow  bg-body rounded postion-relative">
                    <textarea
                      type="text"
                      value={text}
                      onChange={(event) => setText(event.target.value)}
                      className="Add_text   d-flex align-items-center justify-content-center text-center" placeholder="write caption"
                    />
                    <div className="uploadImage">
                    <img
                        src={image ? URL.createObjectURL(image) : ""}
                        className="upload  text-dark"
                        alt="Please Upload to See your Post"
                      />
                      </div>
                  </div>
                </div>
                <div className="select_smileys"></div>
              </div>
            </div>
            <div className="modal-footer">
            <button type="button" onClick={postData} className="btn btn-primary w-100" data-bs-dismiss="modal">Post</button>
            {/* <Api getData={getData} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
