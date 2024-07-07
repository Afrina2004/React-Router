import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Post = ({post}) => {

 const {id,title} = post
 
const navigate = useNavigate();

 const postStyle = {
    border:'2px  solid red',
    padding:'5px',
    borderRadius:"20px",
 }

 const handleShowDetail =() => {
    navigate(`/post/${id}`);
 }

    return (
        <div style={postStyle }>
           <h4>Post of id : {id}</h4>
           <p>{title}</p>
           <Link to={`/post/${id}`}>Post Details</Link>
           <button onClick={handleShowDetail }>Click</button> 
        </div>
    );
};

export default Post;