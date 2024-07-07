import {useLoaderData} from 'react-router-dom';
import {useParams, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    console.log(postId)
    const navigate = useNavigate();

    const{id,title,body} = post;

    const handleGoBack = () => {
        navigate(-1);
    }
    
    return (
        <div>
            <h3>Post Details About : {id} </h3>
            <p>{title}</p>
            <p><small>{body}</small></p>
    <button onClick={ handleGoBack }>Go back</button>
        </div>
    );
};

export default PostDetails;