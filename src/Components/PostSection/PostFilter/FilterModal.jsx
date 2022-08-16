import React,{useState} from 'react'


export default function FilterModal(props){

  const [selectedDate,setSelectedDate]=useState('');
  const submitHandler=()=>{
    props.onChangeValue(selectedDate);
    // e.preventDefault();
    // console.log(selectedDate);
  }  

    return(
        <div className="col-3 text-end pt-2">
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-light"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
        Filter
        </button>

        {/* Modal */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Select Date
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-center">
                <input type="date" className="inp"   onChange={(event) => setSelectedDate(event.target.value)}/>
                </div>
              </div>
              <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={submitHandler} data-bs-dismiss="modal">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
}