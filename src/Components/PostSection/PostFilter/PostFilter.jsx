import React from "react";
import FilterModal from "./FilterModal";
import './PostFilter.css';


export default function PostFilter(props) {
  const postStyle = {
    borderRadius: "24px",
  };
  return (
    <div className="filter">
      <div className="container bg-white border-0 p-4" style={postStyle}>
        <div className="row">
          <div className="col-9">
            <h1>Posts</h1>
          </div>
            <FilterModal onChangeValue={props.onChangeHandler}/>
        </div>
      </div>
    </div>
  );
}
