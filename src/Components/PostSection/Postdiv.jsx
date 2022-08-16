import React,{useState} from 'react'
import Post from './Post/Post'
import PostFilter from './PostFilter/PostFilter'
import UploadedImages from './Uploaded_data/UploadedImages'
// const UploadedImages = React.lazy(() => import('./Uploaded_data/UploadedImages'));
export default function Postdiv() {
  const [name,setName] =useState(null);
  const handleCallback = (childData) =>{
    setName(childData);
  }
  return (
    <div className="container-fluid" style={{backgroundColor:'#f3f3f3'}}>
<Post />
<PostFilter onChangeHandler={handleCallback}/>
<UploadedImages dateFilter={name}/>
    </div>
  )
}
