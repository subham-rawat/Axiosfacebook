// import React from 'react'
import profile from "../../../Images/profile.jpg"
import axios from "axios";
import React, { useEffect, useState } from 'react'
import './Uploaded.css'



const baseURL = "http://139.59.47.49:4004";

export default function UploadedImages(props) {
  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const styles = {
    height: '400px',
    width: '100%',
    padding: '0'
  }

                // Get Api//

  const [postData, setPostData] = useState([]);
  const getAllPostData = async () => {
    const response = await axios(`${baseURL}/api/posts?limit=10&start=1${filterDate ? `&date=${formatDate(filterDate)}` : ""
      }&orderby=0`);
    setPostData(await response.data);
    setFilterDate(props.dateFilter);
  };
  useEffect(() => {
    getAllPostData();
  }, [filterDate]);

            // Delete API //

  const deletePost = (id) => {
    axios.delete(`http://139.59.47.49:4004/api/post/delete/${id}`)
      .then(res =>
        console.log(res))
    getAllPostData();
  }

                        //Update API//

  const updatePost = async (id) => {
    const formData = new FormData();
    formData.append("file", file);

    let res = await axios.post(`${baseURL}/api/upload/image`, formData, {
      headers: {
        "content-type": "multipart/form-data"
      },

    })
    let filename = res.data.filename
    axios.put(`${baseURL}/api/post`, {
      id: `${id}`,
      post: name,
      background: filename
    }).then = (response) => {
      console.log(response.data)
      getAllPostData()
    }
  }

              // Format Date//

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  return (
    <div className="dataFetch">

      {postData.map((response) => {
        return (
          <div className='Upload-Image pt-5'>
            <div className="container bg-white pt-3  rounded">

              <div className="row">
                <div className="col-12 d-flex">
                  <div className="col-11 d-flex flex-row">
                    <img
                      src={profile}
                      className="Post_Profile "
                      height="48px"
                      width="48px"
                      alt=""
                    />
                    <h4 className=' pt-2 px-3'>  Vikram Dabgotra </h4>
                  </div>
                  <div className="col-1"><button type="button" className="btn fs-4" data-bs-toggle="modal" data-bs-target={`#staticBackdrop${response.id}`}><strong>...</strong>
                  </button>
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id={`staticBackdrop${response.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Update Your Post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                      document.getElementById("newpicture").click()
                                    }
                                  ></i>
                                  <input
                                    className="input border-0 form-control"
                                    type="file"
                                    id="newpicture"
                                    onChange={(event) => setFile(event.target.files[0])}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="display_uploaded_image">
                              <div className="shadow  bg-body rounded postion-relative">
                                <textarea
                                  type="text"
                                  value={name}
                                  onChange={(event) => setName(event.target.value)}
                                  className="Add_text_update   d-flex align-items-center justify-content-center text-center" placeholder="write caption"
                                />
                                <div className="uploadImage">
                                  <img
                                    src={file ? URL.createObjectURL(file) : ""}
                                    className="upload  text-dark"
                                    alt="Please Upload to See your Post"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => deletePost(response.id)}>Delete</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => updatePost(response.id)} >Save Changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="row pt-2 p-0">
                <h6 className="text-end text-muted" style={{ fontSize: '13px' }}>{formatDate(response.created_at)}</h6>
                <div className="col-12 p-0">
                  <img src={`${baseURL}/api/profile_image?profile_image=${response.background}`} style={styles} className="img-fluid" alt="..." />
                </div></div>
              <div className="row d-flex justify-content-center">

                <div className="col-4 position-relative d-flex justify-content-center">
                  <div className="uptext position-absolute">
                    <p className="Uploaded_text text-center d-inline font-weight-bold bg-white p-1">{response.post}</p>
                  </div>
                </div>

              </div>


            </div>
          </div>
        );
      })
      }
 
    </div>
  )
}
